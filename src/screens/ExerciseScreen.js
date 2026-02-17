import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius } from '../theme/colors';
import { Button } from '../components';
import { getExerciseWeights, getSettings } from '../services/storage';

export const ExerciseScreen = ({ navigation, route }) => {
  const { exercise, exerciseIndex, workout, cycle, onComplete } = route.params;

  const [currentSeries, setCurrentSeries] = useState(1);
  const [weight, setWeight] = useState(exercise.defaultWeight);
  const [reps, setReps] = useState(10);
  const [completedSeries, setCompletedSeries] = useState([]);
  const [showRestTimer, setShowRestTimer] = useState(false);
  const [restTime, setRestTime] = useState(90);
  const [restTimeLeft, setRestTimeLeft] = useState(90);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    loadSettings();
    loadLastWeight();
  }, []);

  useEffect(() => {
    let timer;
    if (showRestTimer && restTimeLeft > 0) {
      timer = setInterval(() => {
        setRestTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (restTimeLeft === 0) {
      setShowRestTimer(false);
      setRestTimeLeft(restTime);
    }
    return () => clearInterval(timer);
  }, [showRestTimer, restTimeLeft]);

  const loadSettings = async () => {
    const s = await getSettings();
    setSettings(s);
    setRestTime(s.restTime || 90);
    setRestTimeLeft(s.restTime || 90);
  };

  const loadLastWeight = async () => {
    const weights = await getExerciseWeights();
    if (weights[exercise.id]) {
      setWeight(weights[exercise.id]);
    }
  };

  const adjustWeight = (amount) => {
    setWeight((prev) => Math.max(0, prev + amount));
  };

  const adjustReps = (amount) => {
    setReps((prev) => Math.max(1, prev + amount));
  };

  const validateSeries = () => {
    const seriesData = { weight, reps, series: currentSeries };
    setCompletedSeries((prev) => [...prev, seriesData]);

    if (currentSeries < exercise.sets) {
      setCurrentSeries((prev) => prev + 1);
      setShowRestTimer(true);
    } else {
      // Exercice terminé
      if (onComplete) {
        onComplete({ weight, totalSeries: completedSeries.length + 1 });
      }
      navigation.goBack();
    }
  };

  const skipRest = () => {
    setShowRestTimer(false);
    setRestTimeLeft(restTime);
  };

  const isBodyweight = exercise.defaultWeight === 0;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{exercise.name}</Text>
          <Text style={styles.subtitle}>
            {exercise.sets} séries x {exercise.reps} reps
          </Text>
        </View>

        {/* Progress dots */}
        <View style={styles.seriesProgress}>
          {Array.from({ length: exercise.sets }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.seriesDot,
                index < completedSeries.length && styles.seriesDotCompleted,
                index === currentSeries - 1 && styles.seriesDotActive,
              ]}
            />
          ))}
        </View>

        {/* Series card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>
              Série {currentSeries}/{exercise.sets}
            </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>En cours</Text>
            </View>
          </View>

          {!isBodyweight ? (
            <View style={styles.inputContainer}>
              <TouchableOpacity
                style={styles.adjustBtn}
                onPress={() => adjustWeight(-2.5)}
              >
                <Ionicons name="remove" size={24} color={colors.textPrimary} />
              </TouchableOpacity>
              <TextInput
                style={styles.weightInput}
                value={weight.toString()}
                onChangeText={(text) => setWeight(parseFloat(text) || 0)}
                keyboardType="numeric"
              />
              <Text style={styles.unit}>kg</Text>
              <TouchableOpacity
                style={styles.adjustBtn}
                onPress={() => adjustWeight(2.5)}
              >
                <Ionicons name="add" size={24} color={colors.textPrimary} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.bodyweightIndicator}>
              <Text style={styles.bodyweightIcon}>🏋️</Text>
              <Text style={styles.bodyweightText}>Poids de corps</Text>
            </View>
          )}

          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.adjustBtn}
              onPress={() => adjustReps(-1)}
            >
              <Ionicons name="remove" size={24} color={colors.textPrimary} />
            </TouchableOpacity>
            <TextInput
              style={styles.repsInput}
              value={reps.toString()}
              onChangeText={(text) => setReps(parseInt(text) || 0)}
              keyboardType="numeric"
            />
            <Text style={styles.unit}>répétitions</Text>
            <TouchableOpacity
              style={styles.adjustBtn}
              onPress={() => adjustReps(1)}
            >
              <Ionicons name="add" size={24} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>

        <Button title="Valider la série" onPress={validateSeries} />

        <Button
          title="Retour aux exercices"
          variant="secondary"
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />
      </ScrollView>

      {/* Rest Timer Modal */}
      <Modal visible={showRestTimer} transparent animationType="fade">
        <View style={styles.restOverlay}>
          <Text style={styles.restLabel}>Repos</Text>
          <Text style={styles.restTimer}>{restTimeLeft}</Text>
          <Button
            title="Passer"
            variant="secondary"
            onPress={skipRest}
            style={styles.skipButton}
          />
        </View>
      </Modal>
    </View>
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
  header: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.accentPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  seriesProgress: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  seriesDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.bgTertiary,
  },
  seriesDotCompleted: {
    backgroundColor: colors.success,
  },
  seriesDotActive: {
    backgroundColor: colors.accentPrimary,
    transform: [{ scale: 1.2 }],
    shadowColor: colors.accentPrimary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  card: {
    backgroundColor: colors.bgSecondary,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.bgTertiary,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  badge: {
    backgroundColor: colors.accentPrimary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 20,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.lg,
    gap: spacing.md,
  },
  adjustBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.bgTertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weightInput: {
    width: 100,
    padding: spacing.md,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    backgroundColor: colors.bgPrimary,
    borderWidth: 2,
    borderColor: colors.bgTertiary,
    borderRadius: borderRadius.md,
    color: colors.textPrimary,
  },
  repsInput: {
    width: 80,
    padding: spacing.md,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    backgroundColor: colors.bgPrimary,
    borderWidth: 2,
    borderColor: colors.bgTertiary,
    borderRadius: borderRadius.md,
    color: colors.textPrimary,
  },
  unit: {
    fontSize: 18,
    color: colors.textSecondary,
  },
  bodyweightIndicator: {
    alignItems: 'center',
    padding: spacing.lg,
    backgroundColor: colors.bgPrimary,
    borderRadius: borderRadius.md,
    marginVertical: spacing.lg,
  },
  bodyweightIcon: {
    fontSize: 32,
  },
  bodyweightText: {
    color: colors.accentTertiary,
    fontWeight: '600',
    marginTop: spacing.sm,
  },
  backButton: {
    marginTop: spacing.md,
  },
  // Rest timer
  restOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 15, 26, 0.95)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restLabel: {
    fontSize: 24,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
  restTimer: {
    fontSize: 120,
    fontWeight: '700',
    color: '#4facfe',
  },
  skipButton: {
    marginTop: spacing.xxl,
    width: 200,
  },
});
