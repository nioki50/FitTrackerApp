# FitTracker Pro - Application Mobile

Application mobile de suivi d'entraînement musculation, cardio et CrossFit.

## Fonctionnalités

- **Programmes d'entraînement** : Force, Volume, Mixte, Full Body, CrossFit
- **Suivi des séances** : Timer, poids, répétitions, historique
- **Statistiques** : Volume total, temps d'entraînement, progression
- **Mode voyage** : Exercices au poids de corps
- **Mises à jour OTA** : L'app se met à jour automatiquement au lancement

## Technologies

- React Native / Expo
- React Navigation
- AsyncStorage pour le stockage local
- Expo Updates pour les mises à jour OTA

## Installation

```bash
# Cloner le repo
git clone https://github.com/nioki50/FitTrackerApp.git
cd FitTrackerApp

# Installer les dépendances
npm install

# Lancer en développement
npm start
```

## Développement

```bash
# Lancer sur iOS
npm run ios

# Lancer sur Android
npm run android

# Lancer sur web
npm run web
```

## Build pour production

### Configuration EAS (Expo Application Services)

```bash
# Installer EAS CLI
npm install -g eas-cli

# Se connecter
eas login

# Configurer le projet
eas build:configure

# Build Android
eas build --platform android

# Build iOS
eas build --platform ios
```

### Mises à jour OTA

```bash
# Publier une mise à jour
eas update --branch production --message "Description de la mise à jour"
```

## Structure du projet

```
FitTrackerApp/
├── App.js                 # Point d'entrée
├── app.json              # Configuration Expo
├── package.json
├── src/
│   ├── components/       # Composants réutilisables
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── CycleCard.js
│   │   ├── ExerciseItem.js
│   │   ├── ProgramCard.js
│   │   └── StatCard.js
│   ├── data/
│   │   └── programs.js   # Données des programmes et exercices
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── WorkoutScreen.js
│   │   ├── ExerciseScreen.js
│   │   ├── StatsScreen.js
│   │   ├── SettingsScreen.js
│   │   ├── ProgramSelectScreen.js
│   │   └── WorkoutSummaryScreen.js
│   ├── services/
│   │   ├── storage.js    # Gestion du stockage local
│   │   └── updates.js    # Gestion des mises à jour OTA
│   └── theme/
│       └── colors.js     # Thème et couleurs
└── assets/
    ├── icon.png
    ├── splash.png
    └── adaptive-icon.png
```

## Mises à jour automatiques

L'application vérifie automatiquement les mises à jour à chaque lancement grâce à Expo Updates. Si une nouvelle version est disponible :

1. Elle est téléchargée en arrière-plan
2. L'utilisateur est invité à redémarrer l'app pour appliquer la mise à jour

Cela permet de déployer des corrections et nouvelles fonctionnalités sans passer par les stores.

## Licence

MIT - Créé par [nioki50](https://github.com/nioki50)
