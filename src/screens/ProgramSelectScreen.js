import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { colors, spacing, borderRadius } from '../theme/colors';
import { Button, ProgramCard, ProgramGrid } from '../components';
import { PROGRAMS } from '../data/programs';
import { saveCycle } from '../services/storage';

export const ProgramSelectScreen = ({ navigation }) => {
  const [selectedProgram, setSelectedProgram] = useState('force');
  const [selectedDuration, setSelectedDuration] = useState(8);

  const programs = Object.values(PROGRAMS);
  const durations = [4, 6, 8, 12];

  const startCycle = async () => {
    const program = PROGRAMS[selectedProgram];

    const cycle = {
      programId: selectedProgram,
      programName: program.name,
      gradient: program.gradient,
      totalWeeks: selectedDuration,
      currentWeek: 1,
      completedSessions: 0,
      startDate: new Date().toISOString(),
    };

    await saveCycle(cycle);
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Choisis ton programme</Text>
        <Text style={styles.subtitle}>
          Chaque programme a son objectif. Tu pourras changer à la fin du cycle.
        </Text>
      </View>

      <ProgramGrid>
        {programs.map((program) => (
          <ProgramCard
            key={program.id}
            program={program}
            isSelected={selectedProgram === program.id}
            onPress={() => setSelectedProgram(program.id)}
          />
        ))}
      </ProgramGrid>

      <Text style={styles.durationLabel}>Durée du cycle :</Text>
      <View style={styles.durationSelector}>
        {durations.map((weeks) => (
          <TouchableOpacity
            key={weeks}
            style={[
              styles.durationBtn,
              selectedDuration === weeks && styles.durationBtnActive,
            ]}
            onPress={() => setSelectedDuration(weeks)}
          >
            <Text
              style={[
                styles.durationBtnText,
                selectedDuration === weeks && styles.durationBtnTextActive,
              ]}
            >
              {weeks} sem.
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Démarrer le cycle" onPress={startCycle} />

      <Button
        title="Annuler"
        variant="secondary"
        onPress={() => navigation.goBack()}
        style={styles.cancelButton}
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
  header: {
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  durationLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  durationSelector: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.xl,
    flexWrap: 'wrap',
  },
  durationBtn: {
    flex: 1,
    minWidth: 70,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    backgroundColor: colors.bgTertiary,
    borderRadius: borderRadius.md,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  durationBtnActive: {
    borderColor: colors.accentPrimary,
    backgroundColor: 'rgba(233, 69, 96, 0.2)',
  },
  durationBtnText: {
    color: colors.textPrimary,
    fontWeight: '600',
  },
  durationBtnTextActive: {
    color: colors.accentPrimary,
  },
  cancelButton: {
    marginTop: spacing.md,
  },
});
