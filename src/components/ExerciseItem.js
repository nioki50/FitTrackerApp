import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { colors, borderRadius, spacing } from '../theme/colors';

export const ExerciseItem = ({
  exercise,
  isCompleted = false,
  isActive = false,
  onPress,
}) => {
  // Détecte si c'est un exercice poids de corps (mode voyage)
  const isBodyweight = exercise.originalName !== undefined;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.item,
        isCompleted && styles.itemCompleted,
        isActive && styles.itemActive,
        isBodyweight && styles.itemBodyweight,
      ]}
    >
      {isBodyweight && (
        <View style={styles.bodyweightIcon}>
          <Text style={styles.bodyweightEmoji}>🏠</Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={[styles.name, isCompleted && styles.nameCompleted]}>
          {exercise.name}
        </Text>

        {isBodyweight && (
          <Text style={styles.originalExercise}>
            Remplace : {exercise.originalName}
          </Text>
        )}

        <Text style={styles.details}>
          {exercise.sets} séries x {exercise.reps} reps
          {isBodyweight && ' • Poids du corps'}
        </Text>

        {exercise.biset && (
          <View style={styles.bisetContainer}>
            <View style={[styles.bisetBadge, isBodyweight && styles.bisetBadgeBodyweight]}>
              <Text style={styles.bisetBadgeText}>{isBodyweight ? 'BISET PDC' : 'BISET'}</Text>
            </View>
            <Text style={styles.bisetName}>{exercise.biset.name}</Text>
            {exercise.biset.originalName && (
              <Text style={styles.bisetOriginal}> (→ {exercise.biset.originalName})</Text>
            )}
          </View>
        )}
      </View>

      {isCompleted && (
        <View style={styles.checkmark}>
          <Text style={styles.checkmarkText}>✓</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.bgTertiary,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
  },
  itemCompleted: {
    opacity: 0.6,
    borderLeftWidth: 3,
    borderLeftColor: colors.success,
  },
  itemActive: {
    borderWidth: 2,
    borderColor: colors.accentPrimary,
    shadowColor: colors.accentPrimary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  itemBodyweight: {
    borderLeftWidth: 3,
    borderLeftColor: '#4CAF50',
    backgroundColor: 'rgba(76, 175, 80, 0.08)',
  },
  bodyweightIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  bodyweightEmoji: {
    fontSize: 18,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  nameCompleted: {
    textDecorationLine: 'line-through',
  },
  originalExercise: {
    fontSize: 11,
    color: '#4CAF50',
    marginBottom: spacing.xs,
    fontStyle: 'italic',
  },
  details: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  bisetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.textMuted,
    borderStyle: 'dashed',
  },
  bisetBadge: {
    backgroundColor: colors.gradients.purple[0],
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: spacing.sm,
  },
  bisetBadgeBodyweight: {
    backgroundColor: '#4CAF50',
  },
  bisetBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  bisetName: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  bisetOriginal: {
    fontSize: 11,
    color: '#4CAF50',
    fontStyle: 'italic',
  },
  checkmark: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
