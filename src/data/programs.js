// Programmes d'entraînement FitTracker Pro
export const PROGRAMS = {
  force: {
    id: 'force',
    name: 'Force',
    icon: '🔥',
    description: 'Charges lourdes, 4-6 reps',
    gradient: 'force',
    restTime: 120,
    workouts: {
      upperA: {
        id: 'upperA',
        name: 'Upper A - Force Push',
        exercises: [
          { id: 'bench', name: 'Développé couché', variants: ['Développé couché', 'Développé incliné', 'Floor press'], sets: 5, reps: '4-6', defaultWeight: 70 },
          { id: 'row', name: 'Rowing barre', variants: ['Rowing barre', 'Rowing Pendlay', 'Rowing T-bar'], sets: 5, reps: '4-6', defaultWeight: 60 },
          { id: 'ohp', name: 'Développé militaire', variants: ['Développé militaire', 'Push press', 'Développé haltères'], sets: 4, reps: '5-6', defaultWeight: 45 },
          { id: 'arms', name: 'Curl barre + Dips', sets: 3, reps: '6-8', defaultWeight: 30, biset: { id: 'dips', name: 'Dips lestés', sets: 3, reps: '6-8', defaultWeight: 10 } }
        ]
      },
      upperB: {
        id: 'upperB',
        name: 'Upper B - Force Pull',
        exercises: [
          { id: 'pullups', name: 'Tractions lestées', variants: ['Tractions pronation', 'Tractions supination', 'Tractions neutres'], sets: 5, reps: '4-6', defaultWeight: 10 },
          { id: 'incline', name: 'Développé incliné', variants: ['Développé incliné barre', 'Développé incliné haltères'], sets: 4, reps: '5-6', defaultWeight: 55 },
          { id: 'dbrow', name: 'Rowing haltère lourd', sets: 4, reps: '5-6', defaultWeight: 36 },
          { id: 'face', name: 'Face pull + Extension triceps', sets: 3, reps: '8-10', defaultWeight: 0, biset: { id: 'tricep', name: 'Barre au front', sets: 3, reps: '6-8', defaultWeight: 25 } }
        ]
      },
      lowerA: {
        id: 'lowerA',
        name: 'Lower A - Force Squat',
        exercises: [
          { id: 'squat', name: 'Squat barre', variants: ['Squat barre', 'Squat pause', 'Squat avant'], sets: 5, reps: '4-6', defaultWeight: 90 },
          { id: 'rdl', name: 'Soulevé roumain', sets: 4, reps: '5-6', defaultWeight: 70 },
          { id: 'legpress', name: 'Presse à cuisses / Hack squat', sets: 4, reps: '6-8', defaultWeight: 100 },
          { id: 'calf', name: 'Mollets debout', sets: 4, reps: '8-10', defaultWeight: 50 }
        ]
      },
      lowerB: {
        id: 'lowerB',
        name: 'Lower B - Force Deadlift',
        exercises: [
          { id: 'deadlift', name: 'Soulevé de terre', variants: ['Soulevé conventionnel', 'Soulevé sumo', 'Trap bar deadlift'], sets: 5, reps: '3-5', defaultWeight: 110 },
          { id: 'frontsquat', name: 'Squat avant', sets: 4, reps: '5-6', defaultWeight: 60 },
          { id: 'bulgare', name: 'Squat bulgare', sets: 3, reps: '6-8', defaultWeight: 20 },
          { id: 'calfseated', name: 'Mollets assis', sets: 4, reps: '10-12', defaultWeight: 30 }
        ]
      }
    }
  },
  volume: {
    id: 'volume',
    name: 'Volume',
    icon: '💪',
    description: 'Hypertrophie, 10-15 reps',
    gradient: 'volume',
    restTime: 60,
    workouts: {
      upperA: {
        id: 'upperA',
        name: 'Upper A - Volume Push',
        exercises: [
          { id: 'bench', name: 'Développé couché', variants: ['Développé couché', 'Développé haltères', 'Développé incliné haltères'], sets: 4, reps: '10-12', defaultWeight: 50, biset: { id: 'row', name: 'Rowing barre', variants: ['Rowing barre', 'Rowing haltères'], sets: 4, reps: '10-12', defaultWeight: 40 } },
          { id: 'ohp', name: 'Élévations latérales', variants: ['Élévations latérales', 'Élévations frontales', 'Oiseau'], sets: 4, reps: '12-15', defaultWeight: 8, biset: { id: 'rear', name: 'Oiseau', sets: 4, reps: '12-15', defaultWeight: 6 } },
          { id: 'cable', name: 'Écarté poulie / haltères', sets: 3, reps: '12-15', defaultWeight: 10, biset: { id: 'face', name: 'Face pull', sets: 3, reps: '15-20', defaultWeight: 0 } },
          { id: 'arms', name: 'Curl incliné + Extension corde', sets: 3, reps: '12-15', defaultWeight: 10, biset: { id: 'tricep', name: 'Pushdown corde', sets: 3, reps: '12-15', defaultWeight: 15 } }
        ]
      },
      upperB: {
        id: 'upperB',
        name: 'Upper B - Volume Pull',
        exercises: [
          { id: 'pullups', name: 'Tractions', variants: ['Tractions', 'Tirage vertical', 'Tirage neutre'], sets: 4, reps: '8-12', defaultWeight: 0, biset: { id: 'push', name: 'Développé incliné', sets: 4, reps: '10-12', defaultWeight: 40 } },
          { id: 'dbrow', name: 'Rowing haltère', sets: 4, reps: '10-12', defaultWeight: 24, biset: { id: 'flyes', name: 'Écarté couché', sets: 4, reps: '12-15', defaultWeight: 10 } },
          { id: 'shrug', name: 'Shrugs + Développé Arnold', sets: 3, reps: '12-15', defaultWeight: 30, biset: { id: 'arnold', name: 'Développé Arnold', sets: 3, reps: '10-12', defaultWeight: 14 } },
          { id: 'curl', name: 'Curl marteau + Kickback', sets: 3, reps: '12-15', defaultWeight: 12, biset: { id: 'kick', name: 'Kickback triceps', sets: 3, reps: '12-15', defaultWeight: 8 } }
        ]
      },
      lowerA: {
        id: 'lowerA',
        name: 'Lower A - Volume Quad',
        exercises: [
          { id: 'squat', name: 'Squat barre', variants: ['Squat barre', 'Goblet squat', 'Squat hack'], sets: 4, reps: '10-12', defaultWeight: 60 },
          { id: 'lunge', name: 'Fentes marchées', variants: ['Fentes marchées', 'Fentes arrière', 'Fentes latérales'], sets: 4, reps: '12/jambe', defaultWeight: 16, biset: { id: 'legcurl', name: 'Leg curl', sets: 4, reps: '12-15', defaultWeight: 0 } },
          { id: 'ext', name: 'Extension quadriceps', sets: 3, reps: '12-15', defaultWeight: 30, biset: { id: 'hip', name: 'Hip thrust', sets: 3, reps: '12-15', defaultWeight: 60 } },
          { id: 'calf', name: 'Mollets debout + assis', sets: 4, reps: '15-20', defaultWeight: 30, biset: { id: 'calfs', name: 'Mollets assis', sets: 4, reps: '15-20', defaultWeight: 20 } }
        ]
      },
      lowerB: {
        id: 'lowerB',
        name: 'Lower B - Volume Post.',
        exercises: [
          { id: 'rdl', name: 'Soulevé roumain', variants: ['Soulevé roumain', 'Soulevé jambes tendues', 'Good morning'], sets: 4, reps: '10-12', defaultWeight: 50 },
          { id: 'bulgare', name: 'Squat bulgare', sets: 4, reps: '10-12/jambe', defaultWeight: 14, biset: { id: 'bridge', name: 'Pont fessier unilatéral', sets: 4, reps: '12/jambe', defaultWeight: 0 } },
          { id: 'sumo', name: 'Sumo squat', sets: 3, reps: '12-15', defaultWeight: 24, biset: { id: 'abduct', name: 'Abducteurs', sets: 3, reps: '15-20', defaultWeight: 0 } },
          { id: 'calf', name: 'Mollets', sets: 4, reps: '15-20', defaultWeight: 30 }
        ]
      }
    }
  },
  mixte: {
    id: 'mixte',
    name: 'Mixte',
    icon: '⚡',
    description: 'Polyvalent, 8-12 reps',
    gradient: 'purple',
    restTime: 90,
    workouts: {
      upperA: {
        id: 'upperA',
        name: 'Upper A - Push',
        exercises: [
          { id: 'bench', name: 'Développé couché', variants: ['Développé couché', 'Développé incliné', 'Développé haltères'], sets: 4, reps: '8-10', defaultWeight: 60, biset: { id: 'row', name: 'Rowing barre', variants: ['Rowing barre', 'Rowing haltères'], sets: 4, reps: '8-10', defaultWeight: 50 } },
          { id: 'ohp', name: 'Développé épaules', variants: ['Développé militaire', 'Développé haltères', 'Arnold press'], sets: 3, reps: '8-10', defaultWeight: 35, biset: { id: 'lateral', name: 'Élévations latérales', sets: 3, reps: '12-15', defaultWeight: 8 } },
          { id: 'dips', name: 'Dips', sets: 3, reps: '10-12', defaultWeight: 0, biset: { id: 'curl', name: 'Curl marteau', sets: 3, reps: '10-12', defaultWeight: 14 } }
        ]
      },
      upperB: {
        id: 'upperB',
        name: 'Upper B - Pull',
        exercises: [
          { id: 'pullups', name: 'Tractions', variants: ['Tractions pronation', 'Tractions supination', 'Tirage vertical'], sets: 4, reps: '6-10', defaultWeight: 0, biset: { id: 'incline', name: 'Développé incliné', sets: 4, reps: '8-10', defaultWeight: 45 } },
          { id: 'dbrow', name: 'Rowing haltère', sets: 3, reps: '10-12', defaultWeight: 28, biset: { id: 'face', name: 'Face pull', sets: 3, reps: '15-20', defaultWeight: 0 } },
          { id: 'curl', name: 'Curl barre', sets: 3, reps: '10-12', defaultWeight: 25, biset: { id: 'tricep', name: 'Extension triceps', sets: 3, reps: '10-12', defaultWeight: 14 } }
        ]
      },
      lowerA: {
        id: 'lowerA',
        name: 'Lower A - Quad',
        exercises: [
          { id: 'squat', name: 'Squat barre', variants: ['Squat barre', 'Squat avant', 'Squat pause'], sets: 4, reps: '8-10', defaultWeight: 70 },
          { id: 'lunge', name: 'Fentes', variants: ['Fentes marchées', 'Fentes arrière', 'Fentes bulgares'], sets: 3, reps: '10/jambe', defaultWeight: 16, biset: { id: 'rdl', name: 'Soulevé roumain', sets: 3, reps: '10-12', defaultWeight: 50 } },
          { id: 'goblet', name: 'Goblet squat', sets: 3, reps: '12-15', defaultWeight: 24, biset: { id: 'calf', name: 'Mollets', sets: 3, reps: '15-20', defaultWeight: 30 } }
        ]
      },
      lowerB: {
        id: 'lowerB',
        name: 'Lower B - Post.',
        exercises: [
          { id: 'deadlift', name: 'Soulevé de terre', variants: ['Soulevé conventionnel', 'Soulevé sumo', 'Trap bar'], sets: 4, reps: '6-8', defaultWeight: 90 },
          { id: 'bulgare', name: 'Squat bulgare', sets: 3, reps: '10/jambe', defaultWeight: 14, biset: { id: 'legcurl', name: 'Leg curl élastique', sets: 3, reps: '12-15', defaultWeight: 0 } },
          { id: 'sumo', name: 'Sumo squat haltère', sets: 3, reps: '12-15', defaultWeight: 28, biset: { id: 'calf', name: 'Mollets assis', sets: 3, reps: '15-20', defaultWeight: 25 } }
        ]
      }
    }
  },
  fullbody: {
    id: 'fullbody',
    name: 'Full Body',
    icon: '🎯',
    description: '3 séances complètes',
    gradient: 'fullbody',
    restTime: 90,
    workouts: {
      fbA: {
        id: 'fbA',
        name: 'Full Body A',
        exercises: [
          { id: 'squat', name: 'Squat barre', variants: ['Squat barre', 'Goblet squat', 'Squat avant'], sets: 4, reps: '8-10', defaultWeight: 70 },
          { id: 'bench', name: 'Développé couché', variants: ['Développé couché', 'Développé haltères'], sets: 4, reps: '8-10', defaultWeight: 55 },
          { id: 'row', name: 'Rowing barre', variants: ['Rowing barre', 'Rowing haltères'], sets: 4, reps: '8-10', defaultWeight: 50 },
          { id: 'ohp', name: 'Développé épaules', sets: 3, reps: '10-12', defaultWeight: 30 },
          { id: 'curl', name: 'Curl + Triceps', sets: 3, reps: '10-12', defaultWeight: 12, biset: { id: 'tricep', name: 'Extension triceps', sets: 3, reps: '10-12', defaultWeight: 12 } }
        ]
      },
      fbB: {
        id: 'fbB',
        name: 'Full Body B',
        exercises: [
          { id: 'deadlift', name: 'Soulevé de terre', variants: ['Soulevé conventionnel', 'Soulevé roumain'], sets: 4, reps: '6-8', defaultWeight: 90 },
          { id: 'incline', name: 'Développé incliné', variants: ['Développé incliné barre', 'Développé incliné haltères'], sets: 4, reps: '8-10', defaultWeight: 45 },
          { id: 'pullups', name: 'Tractions', sets: 4, reps: '6-10', defaultWeight: 0 },
          { id: 'lateral', name: 'Élévations latérales', sets: 3, reps: '12-15', defaultWeight: 8 },
          { id: 'lunge', name: 'Fentes + Mollets', sets: 3, reps: '10/jambe', defaultWeight: 16, biset: { id: 'calf', name: 'Mollets', sets: 3, reps: '15-20', defaultWeight: 30 } }
        ]
      },
      fbC: {
        id: 'fbC',
        name: 'Full Body C',
        exercises: [
          { id: 'frontsquat', name: 'Squat avant / Goblet', variants: ['Squat avant', 'Goblet squat'], sets: 4, reps: '8-10', defaultWeight: 50 },
          { id: 'dips', name: 'Dips', sets: 4, reps: '8-12', defaultWeight: 0 },
          { id: 'dbrow', name: 'Rowing haltère', sets: 4, reps: '10-12', defaultWeight: 26 },
          { id: 'rdl', name: 'Soulevé roumain', sets: 3, reps: '10-12', defaultWeight: 50 },
          { id: 'face', name: 'Face pull + Curl marteau', sets: 3, reps: '12-15', defaultWeight: 0, biset: { id: 'hammer', name: 'Curl marteau', sets: 3, reps: '10-12', defaultWeight: 14 } }
        ]
      }
    }
  },
  crossfit: {
    id: 'crossfit',
    name: 'CrossFit',
    icon: '🏋️',
    description: 'WOD, Haltéro & Gym',
    gradient: 'crossfit',
    restTime: 60,
    workouts: {
      wod: {
        id: 'wod',
        name: 'WOD du jour',
        exercises: [
          { id: 'wod1', name: 'WOD', sets: 1, reps: 'AMRAP/For Time', defaultWeight: 0 }
        ]
      },
      haltero: {
        id: 'haltero',
        name: 'Haltérophilie',
        exercises: [
          { id: 'snatch', name: 'Snatch', sets: 5, reps: '3', defaultWeight: 40 },
          { id: 'clean', name: 'Clean & Jerk', sets: 5, reps: '2', defaultWeight: 50 },
          { id: 'frontSquat', name: 'Front Squat', sets: 4, reps: '5', defaultWeight: 60 },
          { id: 'ohSquat', name: 'Overhead Squat', sets: 3, reps: '5', defaultWeight: 30 }
        ]
      },
      gym: {
        id: 'gym',
        name: 'Gymnastique',
        exercises: [
          { id: 'muscleUp', name: 'Muscle-ups', sets: 5, reps: '3-5', defaultWeight: 0 },
          { id: 'hspu', name: 'HSPU', sets: 4, reps: '5-8', defaultWeight: 0 },
          { id: 't2b', name: 'Toes-to-bar', sets: 4, reps: '10-15', defaultWeight: 0 },
          { id: 'pistol', name: 'Pistol Squats', sets: 3, reps: '8/jambe', defaultWeight: 0 }
        ]
      }
    }
  }
};

export const CROSSFIT_WODS = {
  fran: { name: 'Fran', type: 'fortime', reps: '21-15-9', exercises: ['Thrusters (43/30kg)', 'Pull-ups'], description: '21-15-9 Thrusters + Pull-ups' },
  murph: { name: 'Murph', type: 'fortime', exercises: ['Run 1.6km', '100 Pull-ups', '200 Push-ups', '300 Squats', 'Run 1.6km'], description: 'Le WOD Hero par excellence' },
  cindy: { name: 'Cindy', type: 'amrap', duration: 20, exercises: ['5 Pull-ups', '10 Push-ups', '15 Squats'], description: 'AMRAP 20 min' },
  helen: { name: 'Helen', type: 'fortime', rounds: 3, exercises: ['Run 400m', '21 KB Swings (24/16kg)', '12 Pull-ups'], description: '3 rounds For Time' },
  grace: { name: 'Grace', type: 'fortime', exercises: ['30 Clean & Jerk (60/43kg)'], description: '30 Clean & Jerk For Time' },
  isabel: { name: 'Isabel', type: 'fortime', exercises: ['30 Snatch (60/43kg)'], description: '30 Snatch For Time' },
  diane: { name: 'Diane', type: 'fortime', reps: '21-15-9', exercises: ['Deadlift (100/70kg)', 'HSPU'], description: '21-15-9 DL + HSPU' },
  annie: { name: 'Annie', type: 'fortime', reps: '50-40-30-20-10', exercises: ['Double-unders', 'Sit-ups'], description: '50-40-30-20-10' },
  jackie: { name: 'Jackie', type: 'fortime', exercises: ['1km Row', '50 Thrusters (20/15kg)', '30 Pull-ups'], description: 'Row + Thrusters + Pull-ups' },
  karen: { name: 'Karen', type: 'fortime', exercises: ['150 Wall Balls (9/6kg)'], description: '150 Wall Balls For Time' },
  nancy: { name: 'Nancy', type: 'fortime', rounds: 5, exercises: ['Run 400m', '15 Overhead Squat (43/30kg)'], description: '5 rounds' },
  chelsea: { name: 'Chelsea', type: 'emom', duration: 30, exercises: ['5 Pull-ups', '10 Push-ups', '15 Squats'], description: 'EMOM 30 min' },
  amanda: { name: 'Amanda', type: 'fortime', reps: '9-7-5', exercises: ['Muscle-ups', 'Snatch (60/43kg)'], description: '9-7-5 MU + Snatch' },
  elizabeth: { name: 'Elizabeth', type: 'fortime', reps: '21-15-9', exercises: ['Clean (60/43kg)', 'Ring Dips'], description: '21-15-9' },
  filthy50: { name: 'Filthy 50', type: 'fortime', exercises: ['50 Box Jumps', '50 Jumping Pull-ups', '50 KB Swings', '50 Walking Lunges', '50 K2E', '50 Push Press', '50 Back Extensions', '50 Wall Balls', '50 Burpees', '50 Double-unders'], description: '50 reps de 10 exercices' }
};

export const BODYWEIGHT_EXERCISES = {
  'Développé couché': 'Pompes',
  'Développé incliné': 'Pompes déclinées',
  'Développé haltères': 'Pompes larges',
  'Floor press': 'Pompes serrées',
  'Rowing barre': 'Rowing inversé (table)',
  'Rowing haltères': 'Rowing serviette',
  'Tractions': 'Tractions porte',
  'Tractions pronation': 'Tractions porte',
  'Tractions supination': 'Chin-ups porte',
  'Développé militaire': 'Pike push-ups',
  'Développé épaules': 'Pike push-ups',
  'Élévations latérales': 'Cercles de bras',
  'Dips': 'Dips sur chaise',
  'Dips lestés': 'Dips sur chaise',
  'Curl barre': 'Curl serviette',
  'Curl marteau': 'Curl isométrique',
  'Extension triceps': 'Diamond push-ups',
  'Squat barre': 'Squats sautés',
  'Squat avant': 'Sissy squat',
  'Goblet squat': 'Squat sumo PDC',
  'Fentes': 'Fentes alternées',
  'Fentes marchées': 'Fentes sautées',
  'Squat bulgare': 'Squat bulgare PDC',
  'Soulevé de terre': 'Soulevé unipodal PDC',
  'Soulevé roumain': 'Good morning PDC',
  'Hip thrust': 'Pont fessier',
  'Mollets': 'Mollets sur marche',
  'default': 'Exercice au poids de corps'
};
