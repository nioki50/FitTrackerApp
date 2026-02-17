import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius } from '../theme/colors';
import { Button } from '../components';

export const WorkoutSummaryScreen = ({ navigation, route }) => {
  const { session, cycle } = route.params;

  const goHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainTabs' }],
    });
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors.gradients.fire}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.summaryCard}
      >
        <Text style={styles.title}>Séance terminée !</Text>
        <Text style={styles.emoji}>💪</Text>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{session.duration}</Text>
            <Text style={styles.statLabel}>Durée</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>
              {session.volume?.toLocaleString() || 0}
            </Text>
            <Text style={styles.statLabel}>Kg soulevés</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>
              {session.exercisesCompleted}/{session.totalExercises}
            </Text>
            <Text style={styles.statLabel}>Exercices</Text>
          </View>
        </View>
      </LinearGradient>

      {cycle && (
        <View style={styles.cycleInfo}>
          <Text style={styles.cycleTitle}>Progression du cycle</Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${(cycle.currentWeek / cycle.totalWeeks) * 100}%` },
              ]}
            />
          </View>
          <Text style={styles.cycleText}>
            Semaine {cycle.currentWeek}/{cycle.totalWeeks} • {cycle.completedSessions} séances
          </Text>
        </View>
      )}

      <Button title="Super !" onPress={goHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
    padding: spacing.xl,
    justifyContent: 'center',
  },
  summaryCard: {
    borderRadius: borderRadius.lg,
    padding: spacing.xxl,
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    marginBottom: spacing.md,
  },
  emoji: {
    fontSize: 64,
    marginBottom: spacing.xl,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: spacing.xs,
  },
  cycleInfo: {
    backgroundColor: colors.bgSecondary,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xxl,
  },
  cycleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.bgTertiary,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.accentPrimary,
    borderRadius: 4,
  },
  cycleText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});
