import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  CYCLE: 'fittracker_cycle',
  SESSIONS: 'fittracker_sessions',
  SETTINGS: 'fittracker_settings',
  WEIGHTS: 'fittracker_weights',
  WEIGHT_GOAL: 'fittracker_weight_goal',
  EXERCISE_WEIGHTS: 'fittracker_exercise_weights',
};

// Cycle actuel
export const getCycle = async () => {
  try {
    const data = await AsyncStorage.getItem(KEYS.CYCLE);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting cycle:', error);
    return null;
  }
};

export const saveCycle = async (cycle) => {
  try {
    await AsyncStorage.setItem(KEYS.CYCLE, JSON.stringify(cycle));
  } catch (error) {
    console.error('Error saving cycle:', error);
  }
};

// Sessions d'entraînement
export const getSessions = async () => {
  try {
    const data = await AsyncStorage.getItem(KEYS.SESSIONS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting sessions:', error);
    return [];
  }
};

export const saveSession = async (session) => {
  try {
    const sessions = await getSessions();
    sessions.unshift(session);
    await AsyncStorage.setItem(KEYS.SESSIONS, JSON.stringify(sessions));
  } catch (error) {
    console.error('Error saving session:', error);
  }
};

// Paramètres
export const getSettings = async () => {
  try {
    const data = await AsyncStorage.getItem(KEYS.SETTINGS);
    return data ? JSON.parse(data) : {
      level: 'intermediaire',
      sessionsPerWeek: 4,
      restTime: 90,
      soundEnabled: true,
      bisetEnabled: true,
      autoExport: false,
    };
  } catch (error) {
    console.error('Error getting settings:', error);
    return {};
  }
};

export const saveSettings = async (settings) => {
  try {
    await AsyncStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving settings:', error);
  }
};

// Poids des exercices (historique)
export const getExerciseWeights = async () => {
  try {
    const data = await AsyncStorage.getItem(KEYS.EXERCISE_WEIGHTS);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error getting exercise weights:', error);
    return {};
  }
};

export const saveExerciseWeight = async (exerciseId, weight) => {
  try {
    const weights = await getExerciseWeights();
    weights[exerciseId] = weight;
    await AsyncStorage.setItem(KEYS.EXERCISE_WEIGHTS, JSON.stringify(weights));
  } catch (error) {
    console.error('Error saving exercise weight:', error);
  }
};

// Pesées corporelles
export const getWeightEntries = async () => {
  try {
    const data = await AsyncStorage.getItem(KEYS.WEIGHTS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting weight entries:', error);
    return [];
  }
};

export const saveWeightEntry = async (entry) => {
  try {
    const entries = await getWeightEntries();
    entries.unshift(entry);
    await AsyncStorage.setItem(KEYS.WEIGHTS, JSON.stringify(entries));
  } catch (error) {
    console.error('Error saving weight entry:', error);
  }
};

// Objectif de poids
export const getWeightGoal = async () => {
  try {
    const data = await AsyncStorage.getItem(KEYS.WEIGHT_GOAL);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting weight goal:', error);
    return null;
  }
};

export const saveWeightGoal = async (goal) => {
  try {
    await AsyncStorage.setItem(KEYS.WEIGHT_GOAL, JSON.stringify(goal));
  } catch (error) {
    console.error('Error saving weight goal:', error);
  }
};

// Export/Import de toutes les données
export const exportAllData = async () => {
  try {
    const cycle = await getCycle();
    const sessions = await getSessions();
    const settings = await getSettings();
    const weights = await getWeightEntries();
    const weightGoal = await getWeightGoal();
    const exerciseWeights = await getExerciseWeights();

    return {
      version: '1.0.0',
      exportDate: new Date().toISOString(),
      cycle,
      sessions,
      settings,
      weights,
      weightGoal,
      exerciseWeights,
    };
  } catch (error) {
    console.error('Error exporting data:', error);
    return null;
  }
};

export const importAllData = async (data) => {
  try {
    if (data.cycle) await saveCycle(data.cycle);
    if (data.sessions) await AsyncStorage.setItem(KEYS.SESSIONS, JSON.stringify(data.sessions));
    if (data.settings) await saveSettings(data.settings);
    if (data.weights) await AsyncStorage.setItem(KEYS.WEIGHTS, JSON.stringify(data.weights));
    if (data.weightGoal) await saveWeightGoal(data.weightGoal);
    if (data.exerciseWeights) await AsyncStorage.setItem(KEYS.EXERCISE_WEIGHTS, JSON.stringify(data.exerciseWeights));
    return true;
  } catch (error) {
    console.error('Error importing data:', error);
    return false;
  }
};

// Reset complet
export const clearAllData = async () => {
  try {
    await AsyncStorage.multiRemove(Object.values(KEYS));
    return true;
  } catch (error) {
    console.error('Error clearing data:', error);
    return false;
  }
};
