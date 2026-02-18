import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_KEYS = {
  EXERCISES: 'fittracker_exercises_cache',
  PROGRAMS: 'fittracker_programs_cache',
  VERSION: 'fittracker_data_version',
  LAST_FETCH: 'fittracker_last_fetch',
};

// URL du JSON distant (GitHub raw)
const REMOTE_DATA_URL = 'https://raw.githubusercontent.com/nioki50/FitTrackerApp/main/src/data/remote-exercises.json';

// Version actuelle des données locales (incrémentée à chaque MAJ)
const CURRENT_DATA_VERSION = '2.0.0';

// Durée de validité du cache (24h en ms)
const CACHE_DURATION = 24 * 60 * 60 * 1000;

/**
 * Vérifie si le cache est valide
 */
export const isCacheValid = async () => {
  try {
    const lastFetch = await AsyncStorage.getItem(CACHE_KEYS.LAST_FETCH);
    const cachedVersion = await AsyncStorage.getItem(CACHE_KEYS.VERSION);

    if (!lastFetch || !cachedVersion) return false;

    const timeSinceLastFetch = Date.now() - parseInt(lastFetch);
    const isVersionMatch = cachedVersion === CURRENT_DATA_VERSION;
    const isNotExpired = timeSinceLastFetch < CACHE_DURATION;

    return isVersionMatch && isNotExpired;
  } catch (error) {
    console.error('Error checking cache validity:', error);
    return false;
  }
};

/**
 * Récupère les exercices depuis le cache ou le distant
 */
export const getExercises = async (forceRefresh = false) => {
  try {
    // Si pas de refresh forcé et cache valide, utiliser le cache
    if (!forceRefresh && await isCacheValid()) {
      const cached = await AsyncStorage.getItem(CACHE_KEYS.EXERCISES);
      if (cached) {
        console.log('Using cached exercises');
        return JSON.parse(cached);
      }
    }

    // Sinon, tenter de récupérer depuis le distant
    console.log('Fetching exercises from remote...');
    const response = await fetch(REMOTE_DATA_URL, {
      headers: { 'Cache-Control': 'no-cache' }
    });

    if (response.ok) {
      const data = await response.json();

      // Sauvegarder en cache
      await AsyncStorage.setItem(CACHE_KEYS.EXERCISES, JSON.stringify(data.exercises));
      await AsyncStorage.setItem(CACHE_KEYS.PROGRAMS, JSON.stringify(data.programs));
      await AsyncStorage.setItem(CACHE_KEYS.VERSION, data.version || CURRENT_DATA_VERSION);
      await AsyncStorage.setItem(CACHE_KEYS.LAST_FETCH, Date.now().toString());

      console.log('Exercises cached successfully');
      return data.exercises;
    }

    // Si échec du fetch, utiliser le cache même expiré
    const fallbackCache = await AsyncStorage.getItem(CACHE_KEYS.EXERCISES);
    if (fallbackCache) {
      console.log('Using fallback cache');
      return JSON.parse(fallbackCache);
    }

    // Dernier recours : données locales embarquées
    console.log('Using embedded data');
    return null; // Signale d'utiliser les données locales
  } catch (error) {
    console.error('Error fetching exercises:', error);

    // En cas d'erreur, utiliser le cache ou les données locales
    const fallbackCache = await AsyncStorage.getItem(CACHE_KEYS.EXERCISES);
    if (fallbackCache) {
      return JSON.parse(fallbackCache);
    }
    return null;
  }
};

/**
 * Récupère les programmes depuis le cache ou le distant
 */
export const getPrograms = async (forceRefresh = false) => {
  try {
    if (!forceRefresh && await isCacheValid()) {
      const cached = await AsyncStorage.getItem(CACHE_KEYS.PROGRAMS);
      if (cached) {
        return JSON.parse(cached);
      }
    }

    // Tenter de rafraîchir via getExercises (qui met à jour tout)
    await getExercises(forceRefresh);

    const cached = await AsyncStorage.getItem(CACHE_KEYS.PROGRAMS);
    if (cached) {
      return JSON.parse(cached);
    }

    return null;
  } catch (error) {
    console.error('Error fetching programs:', error);
    return null;
  }
};

/**
 * Efface le cache (force le re-téléchargement)
 */
export const clearCache = async () => {
  try {
    await AsyncStorage.multiRemove([
      CACHE_KEYS.EXERCISES,
      CACHE_KEYS.PROGRAMS,
      CACHE_KEYS.VERSION,
      CACHE_KEYS.LAST_FETCH,
    ]);
    console.log('Cache cleared');
    return true;
  } catch (error) {
    console.error('Error clearing cache:', error);
    return false;
  }
};

/**
 * Récupère les infos du cache
 */
export const getCacheInfo = async () => {
  try {
    const lastFetch = await AsyncStorage.getItem(CACHE_KEYS.LAST_FETCH);
    const version = await AsyncStorage.getItem(CACHE_KEYS.VERSION);
    const exercises = await AsyncStorage.getItem(CACHE_KEYS.EXERCISES);

    return {
      lastFetch: lastFetch ? new Date(parseInt(lastFetch)) : null,
      version: version || 'Non mis en cache',
      exerciseCount: exercises ? JSON.parse(exercises).length : 0,
      isValid: await isCacheValid(),
    };
  } catch (error) {
    console.error('Error getting cache info:', error);
    return null;
  }
};

/**
 * Pré-charge les données au démarrage de l'app
 */
export const preloadData = async () => {
  try {
    const isValid = await isCacheValid();
    if (!isValid) {
      console.log('Cache invalid or expired, preloading data...');
      await getExercises(true);
    }
    return true;
  } catch (error) {
    console.error('Error preloading data:', error);
    return false;
  }
};
