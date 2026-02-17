import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, borderRadius, spacing } from '../theme/colors';

export const CycleCard = ({ cycle, onPress }) => {
  if (!cycle) {
    return <NoCycleCard onPress={onPress} />;
  }

  const gradientColors = colors.gradients[cycle.gradient] || colors.gradients.fire;
  const progress = cycle.currentWeek / cycle.totalWeeks;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.header}>
          <Text style={styles.name}>{cycle.programName}</Text>
          <View style={styles.duration}>
            <Text style={styles.durationText}>{cycle.totalWeeks} sem.</Text>
          </View>
        </View>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>

        <View style={styles.stats}>
          <Text style={styles.statText}>
            Semaine {cycle.currentWeek}/{cycle.totalWeeks}
          </Text>
          <Text style={styles.statText}>
            {cycle.completedSessions} séances
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const NoCycleCard = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.noCycleCard}>
        <Text style={styles.noCycleTitle}>Aucun programme actif</Text>
        <Text style={styles.noCycleDesc}>
          Choisis un programme pour commencer ton cycle d'entraînement
        </Text>
        <View style={styles.noCycleButton}>
          <Text style={styles.noCycleButtonText}>Choisir un programme</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
  duration: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  durationText: {
    color: 'white',
    fontSize: 12,
  },
  progressBar: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    height: 8,
    marginVertical: spacing.lg,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
  },
  // No cycle card
  noCycleCard: {
    backgroundColor: colors.bgTertiary,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.textMuted,
    borderRadius: borderRadius.lg,
    padding: spacing.xxl,
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  noCycleTitle: {
    color: colors.textSecondary,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  noCycleDesc: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  noCycleButton: {
    backgroundColor: colors.accentPrimary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
  },
  noCycleButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});
