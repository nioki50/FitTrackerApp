import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, borderRadius, spacing } from '../theme/colors';

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'normal',
  icon,
  style,
  disabled = false,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.btnSecondary;
      case 'success':
        return styles.btnSuccess;
      case 'danger':
        return styles.btnDanger;
      default:
        return null;
    }
  };

  const getSizeStyle = () => {
    return size === 'small' ? styles.btnSmall : styles.btnNormal;
  };

  if (variant === 'primary') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[styles.btnWrapper, style, disabled && styles.disabled]}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={colors.gradients.fire}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.btn, getSizeStyle()]}
        >
          <View style={styles.btnContent}>
            {icon && <View style={styles.iconWrapper}>{icon}</View>}
            <Text style={styles.btnText}>{title}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.btn,
        getButtonStyle(),
        getSizeStyle(),
        style,
        disabled && styles.disabled
      ]}
      activeOpacity={0.8}
    >
      <View style={styles.btnContent}>
        {icon && <View style={styles.iconWrapper}>{icon}</View>}
        <Text style={[styles.btnText, variant === 'secondary' && styles.btnTextSecondary]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    width: '100%',
    borderRadius: borderRadius.md,
    overflow: 'hidden',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.md,
  },
  btnNormal: {
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  btnSmall: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btnContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  btnTextSecondary: {
    color: colors.textPrimary,
  },
  btnSecondary: {
    backgroundColor: colors.bgTertiary,
  },
  btnSuccess: {
    backgroundColor: colors.success,
  },
  btnDanger: {
    backgroundColor: colors.danger,
  },
  iconWrapper: {
    marginRight: 4,
  },
  disabled: {
    opacity: 0.5,
  },
});
