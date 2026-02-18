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
import { saveCrossfitSession } from '../services/storage';
import { CROSSFIT_WODS } from '../data/programs';

const CROSSFIT_TYPES = [
  { id: 'wod', name: 'WOD', icon: '🔥' },
  { id: 'haltero', name: 'Haltéro', icon: '🏋️' },
  { id: 'gym', name: 'Gym', icon: '🤸' },
];

export const CrossFitScreen = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState('wod');
  const [selectedWod, setSelectedWod] = useState(null);
  const [duration, setDuration] = useState('');
  const [rounds, setRounds] = useState('');
  const [notes, setNotes] = useState('');
  const [wodTab, setWodTab] = useState('random');

  const wodList = Object.entries(CROSSFIT_WODS).map(([key, wod]) => ({
    id: key,
    ...wod,
  }));

  const generateRandomWod = () => {
    const randomIndex = Math.floor(Math.random() * wodList.length);
    setSelectedWod(wodList[randomIndex]);
  };

  const handleSave = async () => {
    const durationValue = parseInt(duration) || 0;
    const roundsValue = parseInt(rounds) || 0;

    if (selectedType === 'wod' && !selectedWod) {
      Alert.alert('Erreur', 'Veuillez sélectionner ou générer un WOD');
      return;
    }

    if (durationValue === 0) {
      Alert.alert('Erreur', 'Veuillez entrer une durée');
      return;
    }

    const session = {
      id: Date.now().toString(),
      type: 'crossfit',
      crossfitType: selectedType,
      wod: selectedWod,
      duration: durationValue,
      rounds: roundsValue,
      notes: notes,
      date: new Date().toISOString(),
      name: selectedType === 'wod' && selectedWod
        ? `WOD: ${selectedWod.name}`
        : selectedType === 'haltero'
          ? 'Haltérophilie'
          : 'Gymnastique',
    };

    const success = await saveCrossfitSession(session);

    if (success) {
      Alert.alert('Succès', 'Séance CrossFit enregistrée !', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } else {
      Alert.alert('Erreur', 'Impossible d\'enregistrer la séance');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>🏋️ Séance CrossFit</Text>
      </View>

      <Card>
        <Text style={styles.sectionTitle}>TYPE DE SÉANCE</Text>
        <View style={styles.typeGrid}>
          {CROSSFIT_TYPES.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.typeCard,
                selectedType === type.id && styles.typeCardActive
              ]}
              onPress={() => {
                setSelectedType(type.id);
                if (type.id !== 'wod') setSelectedWod(null);
              }}
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

      {selectedType === 'wod' && (
        <Card>
          <Text style={styles.sectionTitle}>SÉLECTION DU WOD</Text>

          <View style={styles.wodTabs}>
            <TouchableOpacity
              style={[styles.wodTab, wodTab === 'random' && styles.wodTabActive]}
              onPress={() => setWodTab('random')}
            >
              <Text style={[styles.wodTabText, wodTab === 'random' && styles.wodTabTextActive]}>
                🎲 Aléatoire
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.wodTab, wodTab === 'select' && styles.wodTabActive]}
              onPress={() => setWodTab('select')}
            >
              <Text style={[styles.wodTabText, wodTab === 'select' && styles.wodTabTextActive]}>
                📋 Choisir
              </Text>
            </TouchableOpacity>
          </View>

          {wodTab === 'random' && (
            <TouchableOpacity style={styles.randomBtn} onPress={generateRandomWod}>
              <Text style={styles.randomBtnText}>🎲 Générer un WOD aléatoire</Text>
            </TouchableOpacity>
          )}

          {wodTab === 'select' && (
            <View style={styles.wodGrid}>
              {wodList.map((wod) => (
                <TouchableOpacity
                  key={wod.id}
                  style={[
                    styles.wodCard,
                    selectedWod?.id === wod.id && styles.wodCardActive
                  ]}
                  onPress={() => setSelectedWod(wod)}
                >
                  <Text style={styles.wodName}>{wod.name}</Text>
                  <Text style={styles.wodType}>{wod.type}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {selectedWod && (
            <View style={styles.wodPreview}>
              <Text style={styles.wodPreviewName}>{selectedWod.name}</Text>
              <Text style={styles.wodPreviewType}>{selectedWod.type.toUpperCase()}</Text>
              <Text style={styles.wodPreviewDesc}>{selectedWod.description}</Text>
              <View style={styles.wodExercises}>
                {selectedWod.exercises.map((ex, i) => (
                  <Text key={i} style={styles.wodExercise}>• {ex}</Text>
                ))}
              </View>
            </View>
          )}
        </Card>
      )}

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

        {(selectedType === 'wod' || selectedType === 'gym') && (
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Rounds complétés</Text>
            <TextInput
              style={styles.input}
              value={rounds}
              onChangeText={setRounds}
              placeholder="5"
              placeholderTextColor={colors.textMuted}
              keyboardType="numeric"
            />
          </View>
        )}

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Notes (RX, scaled, temps...)</Text>
          <TextInput
            style={[styles.input, styles.inputMultiline]}
            value={notes}
            onChangeText={setNotes}
            placeholder="Ex: RX en 12:34"
            placeholderTextColor={colors.textMuted}
            multiline
          />
        </View>
      </Card>

      <Button
        title="Enregistrer"
        onPress={handleSave}
        style={styles.saveButton}
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
    color: '#00b4db',
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
    gap: spacing.md,
  },
  typeCard: {
    flex: 1,
    backgroundColor: colors.bgTertiary,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  typeCardActive: {
    borderColor: '#00b4db',
    backgroundColor: 'rgba(0, 180, 219, 0.1)',
  },
  typeIcon: {
    fontSize: 28,
    marginBottom: spacing.sm,
  },
  typeName: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  typeNameActive: {
    color: '#00b4db',
  },
  wodTabs: {
    flexDirection: 'row',
    backgroundColor: colors.bgTertiary,
    borderRadius: borderRadius.md,
    padding: 4,
    marginBottom: spacing.lg,
  },
  wodTab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: borderRadius.sm,
  },
  wodTabActive: {
    backgroundColor: '#00b4db',
  },
  wodTabText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  wodTabTextActive: {
    color: 'white',
  },
  randomBtn: {
    backgroundColor: 'linear-gradient(135deg, #00b4db, #0083b0)',
    backgroundColor: '#00b4db',
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    alignItems: 'center',
  },
  randomBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  wodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  wodCard: {
    backgroundColor: colors.bgTertiary,
    borderRadius: borderRadius.sm,
    padding: spacing.md,
    minWidth: '30%',
    flex: 1,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  wodCardActive: {
    borderColor: '#00b4db',
    backgroundColor: 'rgba(0, 180, 219, 0.1)',
  },
  wodName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  wodType: {
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 2,
  },
  wodPreview: {
    backgroundColor: colors.bgTertiary,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginTop: spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: '#00b4db',
  },
  wodPreviewName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#00b4db',
  },
  wodPreviewType: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  wodPreviewDesc: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },
  wodExercises: {
    marginTop: spacing.md,
  },
  wodExercise: {
    fontSize: 13,
    color: colors.textPrimary,
    marginBottom: 4,
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
  inputMultiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#00b4db',
  },
  cancelButton: {
    marginTop: spacing.md,
  },
});
