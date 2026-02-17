import * as Updates from 'expo-updates';
import { Alert } from 'react-native';

// Vérifie et applique les mises à jour OTA au lancement
export const checkForUpdates = async () => {
  if (__DEV__) {
    console.log('Mode développement - Pas de vérification des mises à jour');
    return { isAvailable: false };
  }

  try {
    const update = await Updates.checkForUpdateAsync();

    if (update.isAvailable) {
      console.log('Mise à jour disponible, téléchargement...');
      await Updates.fetchUpdateAsync();

      // Demander à l'utilisateur s'il veut redémarrer
      Alert.alert(
        'Mise à jour disponible',
        'Une nouvelle version est prête. Voulez-vous redémarrer pour l\'appliquer ?',
        [
          {
            text: 'Plus tard',
            style: 'cancel',
          },
          {
            text: 'Redémarrer',
            onPress: async () => {
              await Updates.reloadAsync();
            },
          },
        ]
      );

      return { isAvailable: true, manifest: update.manifest };
    }

    return { isAvailable: false };
  } catch (error) {
    console.error('Erreur lors de la vérification des mises à jour:', error);
    return { isAvailable: false, error };
  }
};

// Force la vérification et l'application immédiate
export const forceUpdate = async () => {
  if (__DEV__) {
    Alert.alert('Mode développement', 'Les mises à jour OTA ne fonctionnent pas en mode développement.');
    return false;
  }

  try {
    const update = await Updates.checkForUpdateAsync();

    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
      return true;
    } else {
      Alert.alert('À jour', 'Vous avez déjà la dernière version.');
      return false;
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour forcée:', error);
    Alert.alert('Erreur', 'Impossible de vérifier les mises à jour.');
    return false;
  }
};

// Informations sur la version actuelle
export const getUpdateInfo = () => {
  if (__DEV__) {
    return {
      isEmbeddedLaunch: true,
      channel: 'development',
      runtimeVersion: 'dev',
    };
  }

  return {
    isEmbeddedLaunch: Updates.isEmbeddedLaunch,
    channel: Updates.channel,
    runtimeVersion: Updates.runtimeVersion,
    createdAt: Updates.createdAt,
    updateId: Updates.updateId,
  };
};
