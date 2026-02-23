import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius } from '../theme/colors';
import { Button, ExerciseItem, Card } from '../components';
import { PROGRAMS, BODYWEIGHT_EXERCISES } from '../data/programs';
import { saveSession, getCycle, saveCycle, saveExerciseWeight } from '../services/storage';

export const WorkoutScreen = ({ navigation, route }) => {
  const { cycle, workoutMode = 'gym' } = route.params || {};
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [timer, setTimer] = useState(0);
  const [showWarmup, setShowWarmup] = useState(true);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const isBodyweight = workoutMode === 'bodyweight';

  useEffect(() => {
    if (cycle) {
      loadWorkout();
      startTimer();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [cycle]);

  const convertToBodyweight = (exercise) => {
    const bwName = BODYWEIGHT_EXERCISES[exercise.name] || exercise.name;
    const converted = {
      ...exercise,
      name: bwName,
      originalName: exercise.name,
      defaultWeight: 0, // Poids du corps = 0
    };

    // Convertir aussi le biset si présent
    if (exercise.biset) {
      const bwBisetName = BODYWEIGHT_EXERCISES[exercise.biset.name] || exercise.biset.name;
      converted.biset = {
        ...exercise.biset,
        name: bwBisetName,
        originalName: exercise.biset.name,
        defaultWeight: 0,
      };
    }

    return converted;
  };

  const loadWorkout = () => {
    const program = PROGRAMS[cycle.programId];
    if (!program) return;

    const workoutKeys = Object.keys(program.workouts);
    const nextWorkoutIndex = (cycle.completedSessions || 0) % workoutKeys.length;
    const workoutKey = workoutKeys[nextWorkoutIndex];
    const workout = program.workouts[workoutKey];

    setCurrentWorkout(workout);

    // Convertir en poids du corps si mode voyage
    const workoutExercises = isBodyweight
      ? workout.exercises.map(convertToBodyweight)
      : workout.exercises;

    setExercises(workoutExercises);
  };

  const startTimer = () => {
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      setTimer(elapsed);
    }, 1000);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleExercisePress = (exercise, index) => {
    navigation.navigate('Exercise', {
      exercise,
      exerciseIndex: index,
      workout: currentWorkout,
      cycle,
      onComplete: (completedData) => {
        setCompletedExercises(prev => [...prev, index]);
        if (completedData.weight) {
          saveExerciseWeight(exercise.id, completedData.weight);
        }
      },
    });
  };

  const finishWorkout = async () => {
    Alert.alert(
      'Terminer la séance',
      'Es-tu sûr de vouloir terminer cette séance ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Terminer',
          onPress: async () => {
            // Calculer le volume total
            const totalVolume = completedExercises.reduce((sum, index) => {
              const ex = exercises[index];
              return sum + (ex.defaultWeight * ex.sets * 10); // Approximation
            }, 0);

            // Sauvegarder la session
            const session = {
              id: Date.now().toString(),
              date: new Date().toISOString(),
              name: currentWorkout.name,
              programId: cycle.programId,
              duration: formatTime(timer),
              durationSeconds: timer,
              volume: totalVolume,
              exercisesCompleted: completedExercises.length,
              totalExercises: exercises.length,
              workoutMode: workoutMode,
            };

            await saveSession(session);

            // Mettre à jour le cycle
            const updatedCycle = {
              ...cycle,
              completedSessions: (cycle.completedSessions || 0) + 1,
            };

            // Vérifier si on change de semaine
            const sessionsPerWeek = 4;
            if (updatedCycle.completedSessions % sessionsPerWeek === 0) {
              updatedCycle.currentWeek = Math.min(
                (updatedCycle.currentWeek || 1) + 1,
                updatedCycle.totalWeeks
              );
            }

            await saveCycle(updatedCycle);

            // Arrêter le timer
            if (timerRef.current) clearInterval(timerRef.current);

            // Afficher le résumé
            navigation.replace('WorkoutSummary', {
              session,
              cycle: updatedCycle,
            });
          },
        },
      ]
    );
  };

  if (!currentWorkout) {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.errorText}>Aucune séance disponible</Text>
          <Button
            title="Retour"
            variant="secondary"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>{currentWorkout.name}</Text>
        <View style={styles.modeIndicator}>
          <Text style={styles.modeIcon}>{isBodyweight ? '✈️' : '🏋️'}</Text>
          <Text style={styles.subtitle}>
            {isBodyweight ? 'Mode Voyage (poids du corps)' : 'Mode Salle de sport'}
          </Text>
        </View>
      </View>

      {showWarmup && (
        <View style={styles.warmupCard}>
          <Text style={styles.warmupTitle}>Échauffement (5-10 min)</Text>
          <View style={styles.warmupList}>
            <Text style={styles.warmupItem}>• 2 min corde à sauter</Text>
            <Text style={styles.warmupItem}>• Rotations d'épaules</Text>
            <Text style={styles.warmupItem}>• Mobilité articulaire</Text>
            <Text style={styles.warmupItem}>• 1 série légère du 1er exercice</Text>
          </View>
          <Button
            title="C'est fait !"
            size="small"
            variant="secondary"
            onPress={() => setShowWarmup(false)}
            style={styles.warmupButton}
          />
        </View>
      )}

      <View style={styles.timerContainer}>
        <Text style={styles.timerDisplay}>{formatTime(timer)}</Text>
        <Text style={styles.timerLabel}>Temps total</Text>
      </View>

      <View style={styles.exercisesList}>
        {exercises.map((exercise, index) => (
          <ExerciseItem
            key={index}
            exercise={exercise}
            isCompleted={completedExercises.includes(index)}
            onPress={() => handleExercisePress(exercise, index)}
          />
        ))}
      </View>

      <Button
        title="Terminer la séance"
        variant="success"
        onPress={finishWorkout}
        icon={<Ionicons name="checkmark-circle" size={24} color="white" />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  content: {
    padding: spacing.xl,
    paddingBottom: 100,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  errorText: {
    color: colors.textSecondary,
    fontSize: 16,
    marginBottom: spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.accentPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  modeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
    backgroundColor: colors.bgTertiary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 20,
  },
  modeIcon: {
    fontSize: 16,
    marginRight: spacing.xs,
  },
  warmupCard: {
    backgroundColor: '#ff9a56',
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  warmupTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: spacing.sm,
  },
  warmupList: {
    marginBottom: spacing.md,
  },
  warmupItem: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    marginBottom: spacing.xs,
  },
  warmupButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  timerContainer: {
    alignItems: 'center',
    backgroundColor: colors.bgTertiary,
    borderRadius: borderRadius.lg,
    padding: spacing.xxl,
    marginBottom: spacing.xl,
  },
  timerDisplay: {
    fontSize: 64,
    fontWeight: '700',
    color: colors.accentPrimary,
    fontVariant: ['tabular-nums'],
  },
  timerLabel: {
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },
  exercisesList: {
    marginBottom: spacing.xl,
  },
});
