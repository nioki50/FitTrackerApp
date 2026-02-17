import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { checkForUpdates } from './src/services/updates';
import { colors } from './src/theme/colors';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [updateStatus, setUpdateStatus] = useState(null);

  useEffect(() => {
    async function initialize() {
      try {
        // Vérifier les mises à jour au lancement
        const result = await checkForUpdates();
        setUpdateStatus(result);
      } catch (error) {
        console.log('Erreur lors de l\'initialisation:', error);
      } finally {
        setIsLoading(false);
      }
    }

    initialize();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingTitle}>FitTracker Pro</Text>
        <ActivityIndicator size="large" color={colors.accentPrimary} />
        <Text style={styles.loadingText}>Vérification des mises à jour...</Text>
        <StatusBar style="light" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <AppNavigator />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.accentPrimary,
    marginBottom: 40,
  },
  loadingText: {
    marginTop: 20,
    color: colors.textSecondary,
    fontSize: 14,
  },
});
