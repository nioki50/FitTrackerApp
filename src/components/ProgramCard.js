import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, borderRadius, spacing } from '../theme/colors';

export const ProgramCard = ({
  program,
  isSelected = false,
  onPress,
  size = 'normal'
}) => {
  const gradientColors = colors.gradients[program.gradient] || colors.gradients.fire;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.wrapper,
        size === 'small' && styles.wrapperSmall,
      ]}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          styles.card,
          size === 'small' && styles.cardSmall,
          isSelected && styles.cardSelected,
        ]}
      >
        <Text style={[styles.icon, size === 'small' && styles.iconSmall]}>
          {program.icon}
        </Text>
        <Text style={[styles.name, size === 'small' && styles.nameSmall]}>
          {program.name}
        </Text>
        <Text style={[styles.desc, size === 'small' && styles.descSmall]}>
          {program.description}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const ProgramGrid = ({ children }) => {
  return (
    <View style={styles.grid}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  wrapper: {
    width: '48%',
    marginBottom: spacing.md,
  },
  wrapperSmall: {
    width: '31%',
  },
  card: {
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  cardSmall: {
    padding: spacing.lg,
  },
  cardSelected: {
    borderColor: 'white',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  icon: {
    fontSize: 40,
    marginBottom: spacing.sm,
  },
  iconSmall: {
    fontSize: 28,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    marginBottom: spacing.xs,
  },
  nameSmall: {
    fontSize: 13,
  },
  desc: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
  },
  descSmall: {
    fontSize: 10,
  },
});
