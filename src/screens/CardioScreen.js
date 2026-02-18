import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius } from '../theme/colors';
import { Button, Card } from '../components';
import { saveCardioSession } from '../services/storage';

const CARDIO_TYPES = [
  { id: 'running', name: 'Course', icon: '🏃' },
  { id: 'cycling', name: 'Vélo', icon: '🚴' },
  { id: 'swimming', name: 'Piscine', icon: '🏊' },
  { id: 'other', name: 'Autre', icon: '💪' },
];

export const CardioScreen = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState('running');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [elevation, setElevation] = useState('');

  const handleSave = async () => {
    const durationValue = parseInt(duration) || 0;
    const distanceValue = parseFloat(distance) || 0;
    const elevationValue = parseInt(elevation) || 0;

    if (durationValue === 0 && distanceValue === 0) {
      Alert.alert('Erreur', 'Veuillez entrer une durée ou une distance');
      return;
    }

    const session = {
      id: Date.now().toString(),
      type: 'cardio',
      cardioType: selectedType,
      duration: durationValue,
      distance: distanceValue,
      elevation: elevationValue,
      date: new Date().toISOString(),
      name: CARDIO_TYPES.find(t => t.id === selectedType)?.name || 'Cardio',
    };

    const success = await saveCardioSession(session);

    if (success) {
      Alert.alert('Succès', 'Sortie cardio enregistrée !', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } else {
      Alert.alert('Erreur', 'Impossible d\'enregistrer la séance');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Sortie Cardio</Text>
      </View>

      <Card>
        <Text style={styles.sectionTitle}>TYPE D'ACTIVITÉ</Text>
        <View style={styles.typeGrid}>
          {CARDIO_TYPES.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.typeCard,
                selectedType === type.id && styles.typeCardActive
              ]}
              onPress={() => setSelectedType(type.id)}
            >
              <Text style={styles.typeIcon}>{type.icon}</Text>
              <Text style={[
                styles.typeName,
                selectedType === type.id && styles.typeNameActive
              ]}>
                {type.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>DÉTAILS</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Durée (minutes)</Text>
          <TextInput
            style={styles.input}
            value={duration}
            onChangeText={setDuration}
            placeholder="30"
            placeholderTextColor={colors.textMuted}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Distance (km)</Text>
          <TextInput
            style={styles.input}
            value={distance}
            onChangeText={setDistance}
            placeholder="5"
            placeholderTextColor={colors.textMuted}
            keyboardType="decimal-pad"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Dénivelé (m)</Text>
          <TextInput
            style={styles.input}
            value={elevation}
            onChangeText={setElevation}
            placeholder="0"
            placeholderTextColor={colors.textMuted}
            keyboardType="numeric"
          />
        </View>
      </Card>

      <Button
        title="Enregistrer"
        onPress={handleSave}
        icon={<Ionicons name="checkmark" size={24} color="white" />}
      />

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
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.accentPrimary,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: spacing.lg,
    letterSpacing: 0.5,
  },
  typeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  typeCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.bgTertiary,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  typeCardActive: {
    borderColor: colors.accentPrimary,
    backgroundColor: 'rgba(0, 210, 106, 0.1)',
  },
  typeIcon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  typeName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  typeNameActive: {
    color: colors.accentPrimary,
  },
  inputGroup: {
    marginBottom: spacing.lg,
  },
  inputLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  input: {
    backgroundColor: colors.bgTertiary,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: 16,
    color: colors.textPrimary,
  },
  cancelButton: {
    marginTop: spacing.md,
  },
});
