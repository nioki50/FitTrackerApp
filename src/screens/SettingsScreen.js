import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  Alert,
  Share,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useFocusEffect } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { colors, spacing, borderRadius } from '../theme/colors';
import { Button, Card } from '../components';
import {
  getSettings,
  saveSettings,
  getCycle,
  exportAllData,
  importAllData,
  clearAllData,
} from '../services/storage';
import { forceUpdate, getUpdateInfo } from '../services/updates';

export const SettingsScreen = ({ navigation }) => {
  const [settings, setSettings] = useState({
    level: 'intermediaire',
    sessionsPerWeek: 4,
    restTime: 90,
    soundEnabled: true,
    bisetEnabled: true,
    autoExport: false,
  });
  const [cycle, setCycle] = useState(null);

  const loadData = async () => {
    const settingsData = await getSettings();
    const cycleData = await getCycle();
    setSettings(settingsData);
    setCycle(cycleData);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  const updateSetting = async (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    await saveSettings(newSettings);
  };

  const handleExport = async () => {
    try {
      const data = await exportAllData();
      const jsonString = JSON.stringify(data, null, 2);
      await Share.share({
        message: jsonString,
        title: 'FitTracker Pro - Export',
      });
    } catch (error) {
      Alert.alert('Erreur', "Impossible d'exporter les données");
    }
  };

  const handleReset = () => {
    Alert.alert(
      'Réinitialiser',
      'Es-tu sûr de vouloir supprimer toutes tes données ? Cette action est irréversible.',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: async () => {
            await clearAllData();
            loadData();
            Alert.alert('Terminé', 'Toutes les données ont été supprimées');
          },
        },
      ]
    );
  };

  const handleCheckUpdate = async () => {
    await forceUpdate();
  };

  // Convertit le format HTML vers le format React Native
  const convertHtmlFormat = (data) => {
    // Convertir les settings
    const settings = data.settings ? {
      level: data.settings.userLevel || data.settings.level || 'intermediaire',
      sessionsPerWeek: data.settings.sessionsPerWeek || 4,
      restTime: data.settings.restTime || 90,
      soundEnabled: data.settings.soundEnabled !== false,
      bisetEnabled: data.settings.bisetEnabled !== false,
      autoExport: data.settings.autoExportEnabled || data.settings.autoExport || false,
    } : null;

    // Convertir le cycle
    const cycle = data.currentCycle ? {
      programId: data.currentCycle.programId,
      programName: data.currentCycle.programId === 'volume' ? 'Volume - 4 semaines' : data.currentCycle.programId,
      startDate: data.currentCycle.startDate,
      totalWeeks: data.currentCycle.durationWeeks || 4,
      currentWeek: Math.ceil((Date.now() - new Date(data.currentCycle.startDate).getTime()) / (7 * 24 * 60 * 60 * 1000)),
      completedSessions: data.currentCycle.sessionsCompleted || 0,
      currentWorkoutIndex: data.currentCycle.currentWorkoutIndex || 0,
    } : data.cycle || null;

    // Convertir exerciseHistory vers exerciseWeights (garder le dernier poids)
    const exerciseWeights = {};
    if (data.exerciseHistory) {
      Object.keys(data.exerciseHistory).forEach(exerciseId => {
        const history = data.exerciseHistory[exerciseId];
        if (history && history.length > 0) {
          const lastEntry = history[history.length - 1];
          exerciseWeights[exerciseId] = lastEntry.weight || 0;
        }
      });
    }

    return {
      version: data.version || '1.0.0',
      exportDate: data.exportDate,
      cycle,
      sessions: data.sessions || [],
      settings,
      weights: data.weightHistory || data.weights || [],
      weightGoal: data.weightLossGoal || data.weightGoal || null,
      exerciseWeights: Object.keys(exerciseWeights).length > 0 ? exerciseWeights : (data.exerciseWeights || {}),
    };
  };

  const handleImport = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/json',
        copyToCacheDirectory: true,
      });

      if (result.canceled) {
        return;
      }

      const file = result.assets[0];
      const content = await FileSystem.readAsStringAsync(file.uri);
      const data = JSON.parse(content);

      // Vérification basique - accepte les deux formats
      const isHtmlFormat = data.currentCycle !== undefined || data.exerciseHistory !== undefined;
      const isRnFormat = data.version !== undefined && data.cycle !== undefined;

      if (!data.exportDate && !data.sessions) {
        Alert.alert('Erreur', 'Le fichier sélectionné n\'est pas un export FitTracker valide.');
        return;
      }

      // Convertir si c'est le format HTML
      const importData = isHtmlFormat ? convertHtmlFormat(data) : data;

      const formatInfo = isHtmlFormat ? ' (format web détecté)' : '';

      Alert.alert(
        'Confirmer l\'import',
        `Voulez-vous importer les données du ${new Date(data.exportDate).toLocaleDateString('fr-FR')} ?${formatInfo}\n\n${data.sessions?.length || 0} séances seront importées.\n\nCela remplacera vos données actuelles.`,
        [
          { text: 'Annuler', style: 'cancel' },
          {
            text: 'Importer',
            onPress: async () => {
              const success = await importAllData(importData);
              if (success) {
                loadData();
                Alert.alert('Succès', 'Les données ont été importées avec succès.');
              } else {
                Alert.alert('Erreur', 'Une erreur est survenue lors de l\'import.');
              }
            },
          },
        ]
      );
    } catch (error) {
      console.error('Erreur import:', error);
      Alert.alert('Erreur', 'Impossible de lire le fichier. Assurez-vous qu\'il s\'agit d\'un fichier JSON valide.');
    }
  };

  const updateInfo = getUpdateInfo();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Paramètres</Text>
      </View>

      <Card>
        <Text style={styles.sectionTitle}>PROFIL</Text>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Niveau</Text>
            <Text style={styles.settingDesc}>Adapte les séries et repos</Text>
          </View>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={settings.level}
              onValueChange={(value) => updateSetting('level', value)}
              style={styles.picker}
              dropdownIconColor={colors.textPrimary}
            >
              <Picker.Item label="Débutant" value="debutant" />
              <Picker.Item label="Intermédiaire" value="intermediaire" />
              <Picker.Item label="Avancé" value="avance" />
            </Picker>
          </View>
        </View>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Séances par semaine</Text>
            <Text style={styles.settingDesc}>Objectif hebdomadaire</Text>
          </View>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={settings.sessionsPerWeek}
              onValueChange={(value) => updateSetting('sessionsPerWeek', value)}
              style={styles.picker}
              dropdownIconColor={colors.textPrimary}
            >
              {[2, 3, 4, 5, 6].map((n) => (
                <Picker.Item key={n} label={`${n}`} value={n} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Bisets (supersets)</Text>
            <Text style={styles.settingDesc}>Exercices enchaînés</Text>
          </View>
          <Switch
            value={settings.bisetEnabled}
            onValueChange={(value) => updateSetting('bisetEnabled', value)}
            trackColor={{ false: colors.bgTertiary, true: colors.accentPrimary }}
            thumbColor="white"
          />
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>ENTRAÎNEMENT</Text>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Sons</Text>
            <Text style={styles.settingDesc}>Notifications sonores</Text>
          </View>
          <Switch
            value={settings.soundEnabled}
            onValueChange={(value) => updateSetting('soundEnabled', value)}
            trackColor={{ false: colors.bgTertiary, true: colors.accentPrimary }}
            thumbColor="white"
          />
        </View>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Temps de repos</Text>
            <Text style={styles.settingDesc}>Entre les séries</Text>
          </View>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={settings.restTime}
              onValueChange={(value) => updateSetting('restTime', value)}
              style={styles.picker}
              dropdownIconColor={colors.textPrimary}
            >
              {[60, 75, 90, 120, 150].map((n) => (
                <Picker.Item key={n} label={`${n}s`} value={n} />
              ))}
            </Picker>
          </View>
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>CYCLE ACTUEL</Text>
        {cycle ? (
          <View style={styles.cycleInfo}>
            <Text style={styles.cycleName}>{cycle.programName}</Text>
            <Text style={styles.cycleDetails}>
              Semaine {cycle.currentWeek}/{cycle.totalWeeks} • {cycle.completedSessions} séances
            </Text>
          </View>
        ) : (
          <Text style={styles.noCycle}>Aucun programme actif</Text>
        )}
        <Button
          title="Changer de programme"
          variant="secondary"
          size="small"
          onPress={() => navigation.navigate('ProgramSelect')}
          style={styles.button}
        />
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>DONNÉES</Text>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Export automatique</Text>
            <Text style={styles.settingDesc}>Sauvegarder après chaque séance</Text>
          </View>
          <Switch
            value={settings.autoExport}
            onValueChange={(value) => updateSetting('autoExport', value)}
            trackColor={{ false: colors.bgTertiary, true: colors.accentPrimary }}
            thumbColor="white"
          />
        </View>

        <View style={styles.buttonRow}>
          <Button
            title="Exporter"
            variant="secondary"
            size="small"
            onPress={handleExport}
            style={styles.halfButton}
          />
          <Button
            title="Importer"
            variant="secondary"
            size="small"
            onPress={handleImport}
            style={styles.halfButton}
          />
        </View>

        <Button
          title="Réinitialiser"
          variant="danger"
          size="small"
          onPress={handleReset}
          style={styles.button}
        />
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>MISES À JOUR</Text>
        <Text style={styles.updateInfo}>
          Version: {updateInfo.runtimeVersion || '1.0.0'}
        </Text>
        <Button
          title="Vérifier les mises à jour"
          variant="secondary"
          size="small"
          onPress={handleCheckUpdate}
          style={styles.button}
        />
      </Card>

      <View style={styles.footer}>
        <Text style={styles.footerText}>FitTracker Pro v1.0.0</Text>
        <Text style={styles.footerText}>Powered by nioki50</Text>
      </View>
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.bgTertiary,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  settingDesc: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  pickerWrapper: {
    width: 120,
    backgroundColor: colors.bgTertiary,
    borderRadius: borderRadius.sm,
    overflow: 'hidden',
  },
  picker: {
    color: colors.textPrimary,
    height: 40,
  },
  cycleInfo: {
    marginBottom: spacing.md,
  },
  cycleName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.accentPrimary,
  },
  cycleDetails: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  noCycle: {
    color: colors.textMuted,
    marginBottom: spacing.md,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  halfButton: {
    flex: 1,
  },
  button: {
    marginTop: spacing.md,
  },
  updateInfo: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: spacing.md,
  },
  footer: {
    alignItems: 'center',
    marginTop: spacing.xxl,
    paddingVertical: spacing.lg,
  },
  footerText: {
    fontSize: 12,
    color: colors.textMuted,
  },
});
