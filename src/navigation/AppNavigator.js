import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

import {
  HomeScreen,
  WorkoutScreen,
  ExerciseScreen,
  StatsScreen,
  SettingsScreen,
  ProgramSelectScreen,
  WorkoutSummaryScreen,
} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: colors.bgSecondary,
  },
  headerTintColor: colors.textPrimary,
  headerTitleStyle: {
    fontWeight: '600',
  },
  contentStyle: {
    backgroundColor: colors.bgPrimary,
  },
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Workout':
              iconName = focused ? 'barbell' : 'barbell-outline';
              break;
            case 'Stats':
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              break;
            case 'Settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.accentPrimary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.bgSecondary,
          borderTopColor: colors.bgTertiary,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Accueil' }}
      />
      <Tab.Screen
        name="WorkoutTab"
        component={WorkoutPlaceholder}
        options={{ tabBarLabel: 'Séance' }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Empêcher l'action par défaut
            e.preventDefault();
            // Naviguer vers l'écran workout
            navigation.navigate('Workout');
          },
        })}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{ tabBarLabel: 'Stats' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: 'Réglages' }}
      />
    </Tab.Navigator>
  );
}

// Placeholder pour l'onglet séance
function WorkoutPlaceholder() {
  return null;
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Workout"
          component={WorkoutScreen}
          options={{
            title: 'Séance',
            headerBackTitle: 'Retour',
          }}
        />
        <Stack.Screen
          name="Exercise"
          component={ExerciseScreen}
          options={{
            title: 'Exercice',
            headerBackTitle: 'Retour',
          }}
        />
        <Stack.Screen
          name="ProgramSelect"
          component={ProgramSelectScreen}
          options={{
            title: 'Programme',
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="WorkoutSummary"
          component={WorkoutSummaryScreen}
          options={{
            title: 'Résumé',
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
