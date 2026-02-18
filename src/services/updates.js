import { Alert } from 'react-native';
import * as Updates from 'expo-updates';

// Vérifie si une mise à jour est disponible
export const checkForUpdates = async () => {
  try {
    // En mode développement, les updates ne sont pas disponibles
    if (__DEV__) {
      return { isAvailable: false, isDev: true };
    }

    const update = await Updates.checkForUpdateAsync();
    return {
      isAvailable: update.isAvailable,
      manifest: update.manifest,
    };
  } catch (error) {
    console.error('Erreur lors de la vérification des mises à jour:', error);
    return { isAvailable: false, error: error.message };
  }
};

// Télécharge et applique une mise à jour
export const downloadAndApplyUpdate = async () => {
  try {
    const fetchResult = await Updates.fetchUpdateAsync();
    if (fetchResult.isNew) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Erreur lors du téléchargement de la mise à jour:', error);
    throw error;
  }
};

// Recharge l'application avec la nouvelle version
export const reloadApp = async () => {
  await Updates.reloadAsync();
};

// Vérifie et propose la mise à jour à l'utilisateur
export const forceUpdate = async () => {
  try {
    // En mode développement
    if (__DEV__) {
      Alert.alert(
        'Mode développement',
        'Les mises à jour OTA ne sont pas disponibles en mode développement (Expo Go). Elles seront actives dans la version de production (APK/IPA).'
      );
      return false;
    }

    Alert.alert('Vérification', 'Recherche de mises à jour en cours...');

    const result = await checkForUpdates();

    if (result.isAvailable) {
      Alert.alert(
        'Mise à jour disponible',
        'Une nouvelle version est disponible. Voulez-vous la télécharger et l\'installer maintenant ?',
        [
          { text: 'Plus tard', style: 'cancel' },
          {
            text: 'Mettre à jour',
            onPress: async () => {
              try {
                Alert.alert('Téléchargement', 'Téléchargement de la mise à jour...');
                await downloadAndApplyUpdate();
                Alert.alert(
                  'Mise à jour prête',
                  'La mise à jour a été téléchargée. L\'application va redémarrer.',
                  [
                    {
                      text: 'Redémarrer',
                      onPress: () => reloadApp(),
                    },
                  ]
                );
              } catch (error) {
                Alert.alert('Erreur', 'Impossible de télécharger la mise à jour. Réessayez plus tard.');
              }
            },
          },
        ]
      );
      return true;
    } else {
      Alert.alert('À jour', 'Vous avez déjà la dernière version de l\'application.');
      return false;
    }
  } catch (error) {
    Alert.alert('Erreur', 'Impossible de vérifier les mises à jour. Vérifiez votre connexion internet.');
    return false;
  }
};

// Obtient les informations sur la version actuelle
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
    channel: Updates.channel || 'production',
    runtimeVersion: Updates.runtimeVersion || '1.0.0',
    updateId: Updates.updateId,
  };
};
