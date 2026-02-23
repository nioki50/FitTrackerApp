// Détails des exercices avec images et instructions
export const EXERCISE_DETAILS = {
  // ========== PECTORAUX ==========
  'Développé couché': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/1.jpg',
    execution: [
      "Allongez-vous sur le banc, pieds fermement au sol",
      "Saisissez la barre légèrement plus large que les épaules",
      "Descendez la barre de façon contrôlée jusqu'au milieu de la poitrine",
      "Poussez en expirant jusqu'à l'extension complète des bras"
    ],
    vigilance: [
      "Gardez les omoplates serrées et le dos légèrement cambré",
      "Ne rebondissez jamais la barre sur la poitrine",
      "Coudes à 45° du corps",
      "Poignets droits et verrouillés"
    ],
    muscles: { principaux: ["Pectoraux"], secondaires: ["Deltoïdes antérieurs", "Triceps"] }
  },
  'Développé incliné': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Bench_Press_-_Medium_Grip/1.jpg',
    execution: [
      "Réglez le banc à 30-45° d'inclinaison",
      "Saisissez la barre largeur d'épaules ou légèrement plus",
      "Descendez vers le haut de la poitrine (clavicules)",
      "Poussez en ligne droite vers le plafond"
    ],
    vigilance: [
      "Ne descendez pas trop bas pour éviter le stress sur l'épaule",
      "Gardez le bas du dos plaqué contre le banc"
    ],
    muscles: { principaux: ["Pectoraux supérieurs"], secondaires: ["Deltoïdes antérieurs", "Triceps"] }
  },
  'Développé incliné barre': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Bench_Press_-_Medium_Grip/1.jpg',
    execution: [
      "Réglez le banc à 30-45° d'inclinaison",
      "Saisissez la barre largeur d'épaules ou légèrement plus",
      "Descendez vers le haut de la poitrine (clavicules)",
      "Poussez en ligne droite vers le plafond"
    ],
    vigilance: [
      "Ne descendez pas trop bas pour éviter le stress sur l'épaule",
      "Gardez le bas du dos plaqué contre le banc"
    ],
    muscles: { principaux: ["Pectoraux supérieurs"], secondaires: ["Deltoïdes antérieurs", "Triceps"] }
  },
  'Développé incliné haltères': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/1.jpg',
    execution: [
      "Réglez le banc à 30-45° d'inclinaison",
      "Allongez-vous avec un haltère dans chaque main",
      "Descendez en écartant les coudes à 45°",
      "Poussez vers le plafond en rapprochant les haltères"
    ],
    vigilance: [
      "Contrôlez la descente",
      "Gardez les poignets neutres"
    ],
    muscles: { principaux: ["Pectoraux supérieurs"], secondaires: ["Deltoïdes antérieurs", "Triceps"] }
  },
  'Développé haltères': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/1.jpg',
    execution: [
      "Allongez-vous avec un haltère dans chaque main",
      "Démarrez bras tendus au-dessus de la poitrine",
      "Descendez en écartant les coudes à 45°",
      "Remontez en rapprochant légèrement les haltères"
    ],
    vigilance: [
      "Contrôlez la descente",
      "Gardez les poignets neutres"
    ],
    muscles: { principaux: ["Pectoraux"], secondaires: ["Deltoïdes antérieurs", "Triceps"] }
  },
  'Floor press': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Floor_Press/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Floor_Press/1.jpg',
    execution: [
      "Allongez-vous au sol, genoux fléchis",
      "Descendez jusqu'à ce que les coudes touchent le sol",
      "Marquez une pause puis poussez vers le haut"
    ],
    vigilance: [
      "Le sol limite naturellement l'amplitude",
      "Gardez les coudes à 45° du corps"
    ],
    muscles: { principaux: ["Pectoraux", "Triceps"], secondaires: ["Deltoïdes antérieurs"] }
  },
  'Écarté poulie / haltères': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/1.jpg',
    execution: [
      "Allongez-vous sur le banc, haltères au-dessus de la poitrine",
      "Bras légèrement fléchis, paumes face à face",
      "Ouvrez les bras en arc de cercle",
      "Remontez en serrant les pectoraux"
    ],
    vigilance: [
      "Gardez toujours une légère flexion des coudes",
      "Ne descendez pas trop bas"
    ],
    muscles: { principaux: ["Pectoraux"], secondaires: ["Deltoïdes antérieurs"] }
  },
  'Écarté couché': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/1.jpg',
    execution: [
      "Allongez-vous sur le banc, haltères au-dessus de la poitrine",
      "Ouvrez les bras en arc de cercle",
      "Remontez en serrant les pectoraux"
    ],
    vigilance: [
      "Gardez toujours une légère flexion des coudes"
    ],
    muscles: { principaux: ["Pectoraux"], secondaires: ["Deltoïdes antérieurs"] }
  },

  // ========== DOS ==========
  'Rowing barre': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/1.jpg',
    execution: [
      "Debout, pieds largeur d'épaules, genoux légèrement fléchis",
      "Penchez le buste à 45°, dos droit",
      "Tirez la barre vers le nombril en serrant les omoplates",
      "Redescendez de façon contrôlée"
    ],
    vigilance: [
      "Gardez le dos droit pendant tout le mouvement",
      "Serrez les omoplates en haut"
    ],
    muscles: { principaux: ["Dorsaux", "Trapèzes"], secondaires: ["Biceps", "Rhomboïdes"] }
  },
  'Rowing Pendlay': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/1.jpg',
    execution: [
      "Buste parallèle au sol, barre au sol",
      "Tirez explosif la barre vers le bas de la poitrine",
      "Reposez complètement la barre au sol entre chaque rep"
    ],
    vigilance: [
      "Buste strictement parallèle au sol",
      "Chaque répétition part du sol"
    ],
    muscles: { principaux: ["Dorsaux", "Trapèzes"], secondaires: ["Biceps", "Rhomboïdes"] }
  },
  'Rowing haltère': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/1.jpg',
    execution: [
      "Un genou et une main sur le banc, dos parallèle au sol",
      "Tirez l'haltère vers la hanche",
      "Redescendez lentement"
    ],
    vigilance: [
      "Gardez le dos droit et parallèle au sol",
      "Ne tournez pas le torse"
    ],
    muscles: { principaux: ["Dorsaux"], secondaires: ["Biceps", "Rhomboïdes"] }
  },
  'Rowing haltère lourd': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/1.jpg',
    execution: [
      "Un genou et une main sur le banc",
      "Tirez puissamment vers la hanche",
      "Redescendez de façon contrôlée"
    ],
    vigilance: [
      "Gardez le dos droit malgré la charge"
    ],
    muscles: { principaux: ["Dorsaux"], secondaires: ["Biceps", "Trapèzes"] }
  },
  'Rowing T-bar': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_T-Bar_Row/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_T-Bar_Row/1.jpg',
    execution: [
      "Debout au-dessus de la barre, pieds écartés",
      "Saisissez la poignée en prise neutre",
      "Tirez la barre vers le torse en serrant les omoplates",
      "Redescendez de façon contrôlée"
    ],
    vigilance: [
      "Gardez le dos bien droit pendant tout le mouvement",
      "Ne tirez pas avec les bras, utilisez le dos"
    ],
    muscles: { principaux: ["Dorsaux", "Trapèzes"], secondaires: ["Biceps", "Rhomboïdes"] }
  },
  'Tractions': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/1.jpg',
    execution: [
      "Suspendez-vous à la barre",
      "Tirez-vous jusqu'au menton au-dessus de la barre",
      "Serrez les omoplates",
      "Redescendez de façon contrôlée"
    ],
    vigilance: [
      "Évitez de vous balancer",
      "Descendez complètement"
    ],
    muscles: { principaux: ["Dorsaux"], secondaires: ["Biceps", "Trapèzes"] }
  },
  'Tractions lestées': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/1.jpg',
    execution: [
      "Attachez le poids à une ceinture de lest",
      "Tirez-vous en gardant le contrôle",
      "Redescendez lentement"
    ],
    vigilance: [
      "Commencez avec un poids léger",
      "Le lest ne doit pas compromettre la technique"
    ],
    muscles: { principaux: ["Dorsaux"], secondaires: ["Biceps", "Trapèzes"] }
  },
  'Tractions pronation': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/1.jpg',
    execution: [
      "Prise en pronation (paumes vers l'avant)",
      "Tirez-vous jusqu'au menton au-dessus de la barre",
      "Amplitude complète"
    ],
    vigilance: [
      "Évitez le kipping (balancement)"
    ],
    muscles: { principaux: ["Dorsaux"], secondaires: ["Biceps", "Avant-bras"] }
  },
  'Tractions supination': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/1.jpg',
    execution: [
      "Prise en supination (paumes vers vous)",
      "Tirez-vous jusqu'au menton au-dessus de la barre",
      "Contractez les biceps et dorsaux"
    ],
    vigilance: [
      "Plus facile grâce aux biceps"
    ],
    muscles: { principaux: ["Dorsaux", "Biceps"], secondaires: ["Trapèzes"] }
  },
  'Tirage vertical': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Lat_Pulldown/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Lat_Pulldown/1.jpg',
    execution: [
      "Asseyez-vous, cuisses calées",
      "Tirez la barre vers le haut de la poitrine",
      "Serrez les omoplates"
    ],
    vigilance: [
      "Ne tirez pas derrière la nuque"
    ],
    muscles: { principaux: ["Dorsaux"], secondaires: ["Biceps", "Trapèzes"] }
  },
  'Tirage neutre': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/1.jpg',
    execution: [
      "Asseyez-vous, cuisses calées sous les boudins",
      "Saisissez la barre en prise neutre (paumes face à face)",
      "Tirez vers le haut de la poitrine en contractant les dorsaux",
      "Remontez de façon contrôlée"
    ],
    vigilance: [
      "Gardez le buste légèrement incliné en arrière",
      "Serrez les omoplates à chaque répétition"
    ],
    muscles: { principaux: ["Dorsaux"], secondaires: ["Biceps", "Rhomboïdes"] }
  },
  'Face pull': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/1.jpg',
    execution: [
      "Face à la poulie haute",
      "Tirez la corde vers le visage en écartant les mains",
      "Serrez les omoplates"
    ],
    vigilance: [
      "Gardez les coudes hauts",
      "Mouvement lent et contrôlé"
    ],
    muscles: { principaux: ["Deltoïdes postérieurs"], secondaires: ["Trapèzes"] }
  },
  'Shrugs': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/1.jpg',
    execution: [
      "Debout, barre ou haltères le long du corps",
      "Montez les épaules vers les oreilles",
      "Maintenez la contraction",
      "Redescendez lentement"
    ],
    vigilance: [
      "Ne roulez pas les épaules"
    ],
    muscles: { principaux: ["Trapèzes"], secondaires: ["Rhomboïdes"] }
  },

  // ========== ÉPAULES ==========
  'Développé militaire': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shoulder_Press/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shoulder_Press/1.jpg',
    execution: [
      "Debout ou assis, barre au niveau des clavicules",
      "Poussez la barre au-dessus de la tête",
      "Redescendez de façon contrôlée"
    ],
    vigilance: [
      "Gardez le tronc gainé",
      "Ne cambrez pas le dos"
    ],
    muscles: { principaux: ["Deltoïdes"], secondaires: ["Triceps", "Trapèzes"] }
  },
  'Push press': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Press/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Press/1.jpg',
    execution: [
      "Barre aux clavicules",
      "Fléchissez légèrement les genoux",
      "Poussez explosif avec les jambes puis les bras"
    ],
    vigilance: [
      "L'élan vient des jambes, pas du dos"
    ],
    muscles: { principaux: ["Deltoïdes", "Quadriceps"], secondaires: ["Triceps"] }
  },
  'Développé Arnold': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/1.jpg',
    execution: [
      "Assis, haltères devant les épaules, paumes vers vous",
      "Poussez en tournant les paumes vers l'avant",
      "Terminez bras tendus"
    ],
    vigilance: [
      "La rotation doit être fluide"
    ],
    muscles: { principaux: ["Deltoïdes"], secondaires: ["Triceps"] }
  },
  'Développé épaules': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/1.jpg',
    execution: [
      "Assis ou debout, haltères au niveau des épaules",
      "Poussez les haltères au-dessus de la tête",
      "Redescendez de façon contrôlée jusqu'aux épaules"
    ],
    vigilance: [
      "Gardez le tronc gainé",
      "Ne cambrez pas le dos"
    ],
    muscles: { principaux: ["Deltoïdes"], secondaires: ["Triceps", "Trapèzes"] }
  },
  'Élévations latérales': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/1.jpg',
    execution: [
      "Debout, haltères le long du corps",
      "Levez les bras sur les côtés jusqu'à l'horizontale",
      "Gardez une légère flexion des coudes"
    ],
    vigilance: [
      "Ne montez pas plus haut que les épaules",
      "Évitez de balancer le corps"
    ],
    muscles: { principaux: ["Deltoïdes latéraux"], secondaires: ["Trapèzes"] }
  },
  'Élévations frontales': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/1.jpg',
    execution: [
      "Debout, haltères devant les cuisses",
      "Levez les bras devant vous jusqu'à l'horizontale"
    ],
    vigilance: [
      "Ne montez pas plus haut que les épaules"
    ],
    muscles: { principaux: ["Deltoïdes antérieurs"], secondaires: ["Pectoraux supérieurs"] }
  },
  'Oiseau': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/1.jpg',
    execution: [
      "Penché à 90°, haltères sous la poitrine",
      "Levez les bras sur les côtés",
      "Serrez les omoplates en haut"
    ],
    vigilance: [
      "Gardez le dos droit"
    ],
    muscles: { principaux: ["Deltoïdes postérieurs"], secondaires: ["Trapèzes"] }
  },

  // ========== BRAS ==========
  'Curl barre': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/1.jpg',
    execution: [
      "Debout, barre en prise supination",
      "Coudes fixes, montez la barre vers les épaules",
      "Redescendez de façon contrôlée"
    ],
    vigilance: [
      "Gardez les coudes immobiles",
      "Ne balancez pas le corps"
    ],
    muscles: { principaux: ["Biceps"], secondaires: ["Avant-bras"] }
  },
  'Curl barre + Dips': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/1.jpg',
    execution: [
      "Curl : montez la barre vers les épaules",
      "Enchaînez directement avec les dips (biset)"
    ],
    vigilance: [
      "Biset = fatigue importante, adaptez les charges"
    ],
    muscles: { principaux: ["Biceps", "Triceps"], secondaires: ["Avant-bras", "Pectoraux"] }
  },
  'Curl marteau': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/1.jpg',
    execution: [
      "Debout, haltères le long du corps, prise neutre",
      "Fléchissez un bras en gardant la prise neutre",
      "Montez jusqu'à la contraction maximale"
    ],
    vigilance: [
      "Gardez les coudes fixes"
    ],
    muscles: { principaux: ["Biceps", "Brachial"], secondaires: ["Avant-bras"] }
  },
  'Curl incliné': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Incline_Dumbbell_Curl/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Incline_Dumbbell_Curl/1.jpg',
    execution: [
      "Assis sur banc incliné à 45-60°",
      "Les bras pendent naturellement",
      "Fléchissez en gardant les coudes fixes"
    ],
    vigilance: [
      "L'inclinaison étire le biceps - commencez léger"
    ],
    muscles: { principaux: ["Biceps"], secondaires: ["Brachial"] }
  },
  'Dips': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/1.jpg',
    execution: [
      "Mains sur les barres parallèles",
      "Descendez en fléchissant les coudes jusqu'à 90°",
      "Poussez pour revenir en position haute"
    ],
    vigilance: [
      "Ne descendez pas trop bas"
    ],
    muscles: { principaux: ["Triceps", "Pectoraux"], secondaires: ["Deltoïdes"] }
  },
  'Dips lestés': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/1.jpg',
    execution: [
      "Attachez le poids à une ceinture de lest",
      "Même exécution que les dips classiques"
    ],
    vigilance: [
      "Maîtrisez les dips au poids de corps avant de lester"
    ],
    muscles: { principaux: ["Triceps", "Pectoraux"], secondaires: ["Deltoïdes"] }
  },
  'Extension triceps': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Triceps_Extension/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Triceps_Extension/1.jpg',
    execution: [
      "Debout ou assis, haltère au-dessus de la tête",
      "Descendez l'haltère derrière la tête",
      "Remontez en contractant les triceps"
    ],
    vigilance: [
      "Gardez les coudes fixes"
    ],
    muscles: { principaux: ["Triceps"], secondaires: [] }
  },
  'Barre au front': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Triceps_Press/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Triceps_Press/1.jpg',
    execution: [
      "Allongé sur le banc, barre au-dessus",
      "Coudes fixes, descendez la barre vers le front",
      "Remontez en contractant les triceps"
    ],
    vigilance: [
      "Gardez les coudes parfaitement fixes"
    ],
    muscles: { principaux: ["Triceps"], secondaires: [] }
  },
  'Pushdown corde': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown_-_Rope_Attachment/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown_-_Rope_Attachment/1.jpg',
    execution: [
      "Face à la poulie haute",
      "Coudes collés au corps, poussez vers le bas",
      "En bas, écartez les mains"
    ],
    vigilance: [
      "Gardez les coudes strictement immobiles"
    ],
    muscles: { principaux: ["Triceps"], secondaires: [] }
  },
  'Kickback triceps': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Kickback/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Kickback/1.jpg',
    execution: [
      "Penché, coude à 90° le long du corps",
      "Tendez le bras vers l'arrière",
      "Contractez fort le triceps"
    ],
    vigilance: [
      "Gardez le coude strictement immobile"
    ],
    muscles: { principaux: ["Triceps"], secondaires: [] }
  },

  // ========== QUADRICEPS ==========
  'Squat barre': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/1.jpg',
    execution: [
      "Barre sur les trapèzes, pieds largeur d'épaules",
      "Descendez en poussant les genoux vers l'extérieur",
      "Descendez jusqu'à ce que les cuisses soient parallèles"
    ],
    vigilance: [
      "Gardez le dos droit",
      "Les genoux suivent la direction des pieds"
    ],
    muscles: { principaux: ["Quadriceps", "Fessiers"], secondaires: ["Ischio-jambiers", "Lombaires"] }
  },
  'Squat avant': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/1.jpg',
    execution: [
      "Barre sur les deltoïdes, coudes hauts",
      "Descendez en gardant le buste très droit",
      "Remontez en gardant les coudes hauts"
    ],
    vigilance: [
      "Gardez les coudes très hauts"
    ],
    muscles: { principaux: ["Quadriceps"], secondaires: ["Fessiers", "Core"] }
  },
  'Front Squat': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/1.jpg',
    execution: [
      "Barre sur les deltoïdes, coudes hauts (position rack)",
      "Descendez en gardant le buste très droit",
      "Descendez profond (sous parallèle si mobilité OK)",
      "Remontez en gardant les coudes hauts"
    ],
    vigilance: [
      "Gardez les coudes très hauts pendant tout le mouvement",
      "Le buste reste le plus vertical possible"
    ],
    muscles: { principaux: ["Quadriceps"], secondaires: ["Fessiers", "Core"] }
  },
  'Squat pause': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/1.jpg',
    execution: [
      "Même position que le squat classique",
      "Descendez et marquez une pause de 2-3 secondes en bas",
      "Remontez explosif"
    ],
    vigilance: [
      "Charge plus légère car pas d'effet rebond"
    ],
    muscles: { principaux: ["Quadriceps", "Fessiers"], secondaires: ["Ischio-jambiers", "Core"] }
  },
  'Goblet squat': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/1.jpg',
    execution: [
      "Tenez un haltère contre la poitrine",
      "Pieds plus larges que les épaules",
      "Descendez profond"
    ],
    vigilance: [
      "Excellent pour apprendre la technique du squat"
    ],
    muscles: { principaux: ["Quadriceps", "Fessiers"], secondaires: ["Core"] }
  },
  'Squat bulgare': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Single_Leg_Split_Squat/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Single_Leg_Split_Squat/1.jpg',
    execution: [
      "Pied arrière sur un banc",
      "Descendez jusqu'à ce que le genou arrière frôle le sol",
      "Poussez à travers le talon avant"
    ],
    vigilance: [
      "Gardez le buste droit"
    ],
    muscles: { principaux: ["Quadriceps", "Fessiers"], secondaires: ["Ischio-jambiers"] }
  },
  'Squat hack': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hack_Squat/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hack_Squat/1.jpg',
    execution: [
      "Installez-vous sur la machine hack squat, dos contre le dossier",
      "Pieds sur la plateforme, largeur d'épaules",
      "Descendez en contrôlant jusqu'à 90° de flexion",
      "Poussez pour remonter sans verrouiller les genoux"
    ],
    vigilance: [
      "Gardez le bas du dos plaqué contre le dossier",
      "Ne descendez pas trop bas si vous manquez de mobilité"
    ],
    muscles: { principaux: ["Quadriceps"], secondaires: ["Fessiers", "Ischio-jambiers"] }
  },
  'Fentes marchées': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges_-_Walking/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges_-_Walking/1.jpg',
    execution: [
      "Faites une fente en avançant",
      "Poussez pour amener le pied arrière devant",
      "Enchaînez avec l'autre jambe"
    ],
    vigilance: [
      "Gardez le buste droit"
    ],
    muscles: { principaux: ["Quadriceps", "Fessiers"], secondaires: ["Ischio-jambiers"] }
  },
  'Presse à cuisses / Hack squat': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hack_Squat/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hack_Squat/1.jpg',
    execution: [
      "Installez-vous sur la machine, dos bien calé",
      "Descendez en contrôlant jusqu'à 90°",
      "Poussez pour remonter"
    ],
    vigilance: [
      "Ne verrouillez jamais complètement les genoux"
    ],
    muscles: { principaux: ["Quadriceps"], secondaires: ["Fessiers", "Ischio-jambiers"] }
  },
  'Extension quadriceps': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/1.jpg',
    execution: [
      "Assis sur la machine",
      "Tendez les jambes jusqu'à l'extension complète",
      "Contractez les quadriceps en haut"
    ],
    vigilance: [
      "Contrôlez la descente"
    ],
    muscles: { principaux: ["Quadriceps"], secondaires: [] }
  },

  // ========== ISCHIO-JAMBIERS / FESSIERS ==========
  'Soulevé de terre': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/1.jpg',
    execution: [
      "Pieds largeur de hanches, barre au-dessus des lacets",
      "Dos droit, poussez avec les jambes et levez le buste",
      "Terminez debout, épaules en arrière"
    ],
    vigilance: [
      "Gardez le dos DROIT pendant tout le mouvement",
      "La barre reste proche du corps"
    ],
    muscles: { principaux: ["Ischio-jambiers", "Fessiers", "Lombaires"], secondaires: ["Quadriceps", "Trapèzes"] }
  },
  'Soulevé conventionnel': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/1.jpg',
    execution: [
      "Pieds largeur de hanches",
      "Dos droit, poitrine sortie",
      "Soulevez en gardant la barre proche du corps"
    ],
    vigilance: [
      "Le dos reste neutre, jamais arrondi"
    ],
    muscles: { principaux: ["Ischio-jambiers", "Fessiers", "Lombaires"], secondaires: ["Quadriceps", "Trapèzes"] }
  },
  'Soulevé sumo': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Deadlift/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Deadlift/1.jpg',
    execution: [
      "Pieds très écartés, pointes vers l'extérieur",
      "Mains à l'intérieur des genoux",
      "Soulevez en gardant le buste plus vertical"
    ],
    vigilance: [
      "Demande plus de mobilité de hanches"
    ],
    muscles: { principaux: ["Quadriceps", "Fessiers", "Adducteurs"], secondaires: ["Ischio-jambiers", "Lombaires"] }
  },
  'Trap bar deadlift': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Trap_Bar_Deadlift/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Trap_Bar_Deadlift/1.jpg',
    execution: [
      "Entrez à l'intérieur de la trap bar, pieds largeur de hanches",
      "Saisissez les poignées latérales, dos droit",
      "Poussez avec les jambes et levez le buste simultanément",
      "Terminez debout, épaules en arrière"
    ],
    vigilance: [
      "Gardez le dos droit pendant tout le mouvement",
      "Plus facile sur le bas du dos que le soulevé conventionnel"
    ],
    muscles: { principaux: ["Quadriceps", "Fessiers", "Ischio-jambiers"], secondaires: ["Trapèzes", "Lombaires"] }
  },
  'Soulevé roumain': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Romanian_Deadlift/1.jpg',
    execution: [
      "Debout, barre en mains, genoux légèrement fléchis",
      "Penchez-vous en poussant les hanches vers l'arrière",
      "Remontez en contractant les fessiers"
    ],
    vigilance: [
      "Gardez le dos DROIT, jamais arrondi"
    ],
    muscles: { principaux: ["Ischio-jambiers", "Fessiers"], secondaires: ["Lombaires"] }
  },
  'Good morning': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning/1.jpg',
    execution: [
      "Barre sur les trapèzes",
      "Genoux légèrement fléchis",
      "Penchez-vous en poussant les hanches en arrière"
    ],
    vigilance: [
      "Gardez le dos parfaitement droit",
      "Commencez très léger"
    ],
    muscles: { principaux: ["Ischio-jambiers", "Lombaires"], secondaires: ["Fessiers"] }
  },
  'Hip thrust': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/1.jpg',
    execution: [
      "Dos contre un banc, barre sur les hanches",
      "Poussez les hanches vers le plafond",
      "Contractez les fessiers en haut"
    ],
    vigilance: [
      "Gardez le menton rentré",
      "Ne cambrez pas le bas du dos"
    ],
    muscles: { principaux: ["Fessiers"], secondaires: ["Ischio-jambiers", "Quadriceps"] }
  },
  'Leg curl': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/1.jpg',
    execution: [
      "Allongé face contre la machine",
      "Fléchissez les jambes en amenant les talons vers les fessiers",
      "Contractez les ischio-jambiers en haut"
    ],
    vigilance: [
      "Gardez les hanches plaquées"
    ],
    muscles: { principaux: ["Ischio-jambiers"], secondaires: ["Mollets"] }
  },
  'Sumo squat': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Squat/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Squat/1.jpg',
    execution: [
      "Pieds très écartés, pointes à 45°",
      "Haltère tenu entre les jambes",
      "Descendez en gardant le buste droit"
    ],
    vigilance: [
      "Les genoux suivent la direction des pieds"
    ],
    muscles: { principaux: ["Quadriceps", "Adducteurs", "Fessiers"], secondaires: ["Ischio-jambiers"] }
  },
  'Abducteurs': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Thigh_Abductor/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Thigh_Abductor/1.jpg',
    execution: [
      "Assis sur la machine",
      "Écartez les jambes contre la résistance",
      "Revenez de façon contrôlée"
    ],
    vigilance: [
      "Gardez le dos plaqué contre le dossier"
    ],
    muscles: { principaux: ["Moyen fessier"], secondaires: [] }
  },

  // ========== MOLLETS ==========
  'Mollets debout': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/1.jpg',
    execution: [
      "Debout sur une marche, talons dans le vide",
      "Descendez les talons pour étirer les mollets",
      "Montez sur la pointe des pieds le plus haut possible"
    ],
    vigilance: [
      "Amplitude maximale"
    ],
    muscles: { principaux: ["Mollets"], secondaires: ["Soléaire"] }
  },
  'Mollets assis': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/1.jpg',
    execution: [
      "Assis, genoux sous le boudin",
      "Descendez les talons pour étirer",
      "Montez sur la pointe des pieds"
    ],
    vigilance: [
      "Cible le soléaire"
    ],
    muscles: { principaux: ["Soléaire"], secondaires: ["Mollets"] }
  },
  'Mollets': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/1.jpg',
    execution: [
      "Debout sur une marche ou au sol",
      "Montez sur la pointe des pieds",
      "Redescendez de façon contrôlée"
    ],
    vigilance: [
      "Amplitude complète"
    ],
    muscles: { principaux: ["Mollets"], secondaires: [] }
  },

  // ========== CROSSFIT ==========
  'WOD': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Burpee/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Burpee/1.jpg',
    execution: [
      "Choisissez un WOD (Workout of the Day) adapté à votre niveau",
      "Échauffez-vous correctement avant de commencer",
      "Réalisez le workout en respectant les mouvements prescrits",
      "Notez votre temps ou score pour suivre votre progression"
    ],
    vigilance: [
      "Privilégiez la technique à la vitesse",
      "Adaptez les charges et mouvements si nécessaire",
      "Écoutez votre corps et récupérez entre les séances"
    ],
    muscles: { principaux: ["Corps entier"], secondaires: [] }
  },
  'Snatch': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch/1.jpg',
    execution: [
      "Prise large, barre au sol",
      "Extension explosive des hanches",
      "Passez sous la barre en squat overhead"
    ],
    vigilance: [
      "Mouvement technique - apprenez avec un coach"
    ],
    muscles: { principaux: ["Corps entier"], secondaires: [] }
  },
  'Clean & Jerk': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_and_Jerk/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_and_Jerk/1.jpg',
    execution: [
      "Clean : amenez la barre aux épaules",
      "Jerk : poussez la barre au-dessus de la tête"
    ],
    vigilance: [
      "Apprenez avec un coach qualifié"
    ],
    muscles: { principaux: ["Corps entier"], secondaires: [] }
  },
  'Thrusters': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Thrusters/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Thrusters/1.jpg',
    execution: [
      "Barre en position front rack",
      "Descendez en front squat",
      "Remontez explosif et poussez la barre overhead"
    ],
    vigilance: [
      "Le mouvement doit être fluide"
    ],
    muscles: { principaux: ["Quadriceps", "Deltoïdes"], secondaires: ["Fessiers", "Triceps"] }
  },
  'Burpees': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Burpee/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Burpee/1.jpg',
    execution: [
      "Debout, descendez en squat mains au sol",
      "Jetez les pieds en arrière",
      "Faites une pompe, ramenez les pieds et sautez"
    ],
    vigilance: [
      "Gardez le core gainé"
    ],
    muscles: { principaux: ["Corps entier"], secondaires: [] }
  },
  'HSPU': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Handstand_Push-Ups/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Handstand_Push-Ups/1.jpg',
    execution: [
      "En appui contre un mur, tête en bas",
      "Descendez jusqu'à ce que la tête touche le sol",
      "Poussez pour revenir en position haute"
    ],
    vigilance: [
      "Commencez par des pike push-ups"
    ],
    muscles: { principaux: ["Deltoïdes", "Triceps"], secondaires: ["Core"] }
  },
  'Toes-to-bar': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/1.jpg',
    execution: [
      "Suspendez-vous à la barre",
      "Levez les jambes tendues vers la barre",
      "Touchez la barre avec les orteils"
    ],
    vigilance: [
      "Commencez par des relevés de genoux"
    ],
    muscles: { principaux: ["Abdominaux"], secondaires: ["Dorsaux", "Avant-bras"] }
  },
  'Pistol Squats': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pistol_Squat/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pistol_Squat/1.jpg',
    execution: [
      "Debout sur une jambe, l'autre tendue devant",
      "Descendez en squat complet sur une jambe",
      "Remontez sans poser l'autre pied"
    ],
    vigilance: [
      "Demande force, équilibre et mobilité"
    ],
    muscles: { principaux: ["Quadriceps", "Fessiers"], secondaires: ["Core"] }
  },
  'Overhead Squat': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Squat/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Squat/1.jpg',
    execution: [
      "Barre au-dessus de la tête, prise large",
      "Bras verrouillés, descendez en squat profond"
    ],
    vigilance: [
      "Demande une excellente mobilité"
    ],
    muscles: { principaux: ["Quadriceps", "Core"], secondaires: ["Épaules"] }
  },
  'Muscle-ups': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/1.jpg',
    execution: [
      "Tirez-vous puissamment vers la barre",
      "Basculez au-dessus de la barre",
      "Poussez pour terminer bras tendus"
    ],
    vigilance: [
      "Maîtrisez d'abord tractions et dips"
    ],
    muscles: { principaux: ["Dorsaux", "Pectoraux", "Triceps"], secondaires: ["Biceps"] }
  },

  // ========== POIDS DE CORPS ==========
  'Pompes': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/1.jpg',
    execution: [
      "Mains légèrement plus larges que les épaules",
      "Corps gainé, descendez en fléchissant les coudes",
      "Poussez pour revenir bras tendus"
    ],
    vigilance: [
      "Gardez le corps parfaitement gainé",
      "Coudes à 45° du corps"
    ],
    muscles: { principaux: ["Pectoraux", "Triceps"], secondaires: ["Deltoïdes", "Core"] }
  },
  'Pompes déclinées': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Push-Up/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Push-Up/1.jpg',
    execution: [
      "Pieds surélevés sur un banc",
      "Descendez jusqu'à ce que la poitrine frôle le sol",
      "Poussez pour remonter"
    ],
    vigilance: [
      "Cible davantage le haut des pectoraux"
    ],
    muscles: { principaux: ["Pectoraux supérieurs", "Triceps"], secondaires: ["Deltoïdes"] }
  },
  'Pike push-ups': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pike_Push_Press/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pike_Push_Press/1.jpg',
    execution: [
      "Position de V inversé",
      "Descendez la tête vers le sol entre les mains",
      "Poussez pour remonter"
    ],
    vigilance: [
      "Excellent pour progresser vers le HSPU"
    ],
    muscles: { principaux: ["Deltoïdes", "Triceps"], secondaires: ["Pectoraux"] }
  },
  'Dips sur chaise': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/1.jpg',
    execution: [
      "Mains sur le bord d'une chaise derrière vous",
      "Descendez en fléchissant les coudes",
      "Poussez pour remonter"
    ],
    vigilance: [
      "Ne descendez pas trop bas"
    ],
    muscles: { principaux: ["Triceps"], secondaires: ["Pectoraux", "Deltoïdes"] }
  },
  'Squats sautés': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Freehand_Jump_Squat/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Freehand_Jump_Squat/1.jpg',
    execution: [
      "Position de squat classique",
      "Descendez en squat",
      "Explosez vers le haut en sautant"
    ],
    vigilance: [
      "Atterrissez en douceur"
    ],
    muscles: { principaux: ["Quadriceps", "Fessiers"], secondaires: ["Mollets"] }
  },
  'Fentes alternées': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges_-_Walking/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges_-_Walking/1.jpg',
    execution: [
      "Debout, faites un pas en avant",
      "Descendez jusqu'à ce que le genou arrière frôle le sol",
      "Alternez avec l'autre jambe"
    ],
    vigilance: [
      "Gardez le buste droit"
    ],
    muscles: { principaux: ["Quadriceps", "Fessiers"], secondaires: ["Ischio-jambiers"] }
  },
  'Fentes': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges_-_Walking/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges_-_Walking/1.jpg',
    execution: [
      "Debout, faites un grand pas en avant",
      "Descendez jusqu'à ce que le genou arrière frôle le sol",
      "Poussez sur le talon avant pour revenir"
    ],
    vigilance: [
      "Gardez le buste droit",
      "Le genou avant ne dépasse pas la pointe du pied"
    ],
    muscles: { principaux: ["Quadriceps", "Fessiers"], secondaires: ["Ischio-jambiers"] }
  },
  'Fentes arrière': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Rear_Lunge/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Rear_Lunge/1.jpg',
    execution: [
      "Debout, faites un grand pas en arrière",
      "Descendez jusqu'à ce que le genou arrière frôle le sol",
      "Poussez pour revenir à la position de départ"
    ],
    vigilance: [
      "Plus facile à équilibrer que les fentes avant",
      "Gardez le buste droit"
    ],
    muscles: { principaux: ["Quadriceps", "Fessiers"], secondaires: ["Ischio-jambiers"] }
  },
  'Fentes latérales': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lunge/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lunge/1.jpg',
    execution: [
      "Debout, faites un grand pas sur le côté",
      "Pliez le genou de la jambe d'appui en gardant l'autre tendue",
      "Poussez pour revenir au centre"
    ],
    vigilance: [
      "Gardez le pied d'appui bien à plat",
      "Buste légèrement penché en avant"
    ],
    muscles: { principaux: ["Quadriceps", "Adducteurs"], secondaires: ["Fessiers"] }
  },
  'Pont fessier': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Bridge/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Bridge/1.jpg',
    execution: [
      "Allongé sur le dos, genoux pliés",
      "Poussez les hanches vers le plafond",
      "Contractez fort les fessiers"
    ],
    vigilance: [
      "Ne cambrez pas excessivement le dos"
    ],
    muscles: { principaux: ["Fessiers"], secondaires: ["Ischio-jambiers", "Core"] }
  },
  'Pont fessier unilatéral': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/1.jpg',
    execution: [
      "Allongé, une jambe au sol, l'autre en l'air",
      "Poussez avec le pied au sol pour lever les hanches",
      "Contractez le fessier"
    ],
    vigilance: [
      "Gardez les hanches parallèles au sol"
    ],
    muscles: { principaux: ["Fessiers"], secondaires: ["Ischio-jambiers", "Core"] }
  },
  'Diamond push-ups': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Diamond_Push-Up/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Diamond_Push-Up/1.jpg',
    execution: [
      "Mains en forme de diamant sous la poitrine",
      "Descendez en gardant les coudes près du corps",
      "Poussez explosif pour remonter"
    ],
    vigilance: [
      "Exercice avancé"
    ],
    muscles: { principaux: ["Triceps"], secondaires: ["Pectoraux", "Deltoïdes"] }
  },
  'Pompes larges': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Push-Up/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Push-Up/1.jpg',
    execution: [
      "Mains écartées bien plus larges que les épaules",
      "Corps gainé",
      "Descendez en fléchissant les coudes vers l'extérieur"
    ],
    vigilance: [
      "Plus d'amplitude sur les pectoraux"
    ],
    muscles: { principaux: ["Pectoraux"], secondaires: ["Triceps", "Deltoïdes"] }
  },
  'Pompes serrées': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Push-Up/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Push-Up/1.jpg',
    execution: [
      "Mains rapprochées sous la poitrine",
      "Coudes le long du corps",
      "Descendez et poussez"
    ],
    vigilance: [
      "Cible davantage les triceps"
    ],
    muscles: { principaux: ["Triceps", "Pectoraux"], secondaires: ["Deltoïdes"] }
  },
  'Rowing inversé (table)': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Inverted_Row/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Inverted_Row/1.jpg',
    execution: [
      "Allongez-vous sous une table solide",
      "Tirez-vous vers la table en serrant les omoplates",
      "Redescendez de façon contrôlée"
    ],
    vigilance: [
      "Excellent pour progresser vers les tractions"
    ],
    muscles: { principaux: ["Dorsaux", "Trapèzes"], secondaires: ["Biceps"] }
  },

  // ========== CALLISTHÉNIE ==========
  'Australian pull-ups': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Inverted_Row/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Inverted_Row/1.jpg',
    execution: [
      "Suspendez-vous sous une barre basse, corps incliné",
      "Pieds au sol, corps gainé en ligne droite",
      "Tirez la poitrine vers la barre en serrant les omoplates",
      "Redescendez de façon contrôlée"
    ],
    vigilance: [
      "Plus les pieds sont avancés, plus c'est difficile",
      "Gardez le corps parfaitement gainé"
    ],
    muscles: { principaux: ["Dorsaux", "Trapèzes"], secondaires: ["Biceps", "Rhomboïdes"] }
  },
  'Archer pull-ups': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/1.jpg',
    execution: [
      "Prise large sur la barre",
      "Tirez-vous vers une main en tendant l'autre bras",
      "La main tendue glisse sur la barre",
      "Alternez de chaque côté"
    ],
    vigilance: [
      "Progression vers le one-arm pull-up",
      "Maîtrisez d'abord 10+ tractions classiques"
    ],
    muscles: { principaux: ["Dorsaux"], secondaires: ["Biceps", "Avant-bras"] }
  },
  'L-sit pull-ups': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/1.jpg',
    execution: [
      "Suspendez-vous à la barre, jambes tendues à l'horizontale (L-sit)",
      "Maintenez la position L pendant toute la traction",
      "Tirez-vous jusqu'au menton au-dessus de la barre",
      "Redescendez en gardant le L"
    ],
    vigilance: [
      "Demande une bonne force abdominale",
      "Commencez avec les genoux pliés si nécessaire"
    ],
    muscles: { principaux: ["Dorsaux", "Abdominaux"], secondaires: ["Biceps", "Fléchisseurs de hanche"] }
  },
  'Archer push-ups': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Push-Up/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Push-Up/1.jpg',
    execution: [
      "Position de pompe très large",
      "Descendez vers une main en tendant l'autre bras",
      "Le bras tendu reste droit sur le côté",
      "Poussez et alternez"
    ],
    vigilance: [
      "Progression vers les pompes à un bras",
      "Gardez le corps gainé"
    ],
    muscles: { principaux: ["Pectoraux", "Triceps"], secondaires: ["Deltoïdes", "Core"] }
  },
  'Pseudo planche push-ups': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/1.jpg',
    execution: [
      "Position de pompe avec les mains au niveau des hanches",
      "Doigts pointant vers les pieds ou sur les côtés",
      "Penchez-vous en avant pour charger les épaules",
      "Descendez et poussez en gardant le lean forward"
    ],
    vigilance: [
      "Progression vers la planche",
      "Commencez avec un lean léger et augmentez progressivement"
    ],
    muscles: { principaux: ["Deltoïdes antérieurs", "Pectoraux"], secondaires: ["Triceps", "Core"] }
  },
  'L-sit': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/1.jpg',
    execution: [
      "Assis au sol ou sur des parallettes, mains à côté des hanches",
      "Poussez pour soulever le corps du sol",
      "Tendez les jambes devant vous à l'horizontale",
      "Maintenez la position"
    ],
    vigilance: [
      "Commencez avec les genoux pliés (tuck L-sit)",
      "Poussez fort dans les épaules pour vous élever"
    ],
    muscles: { principaux: ["Abdominaux", "Fléchisseurs de hanche"], secondaires: ["Triceps", "Quadriceps"] }
  },
  'Hollow body hold': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Lying_Leg_Raise/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Lying_Leg_Raise/1.jpg',
    execution: [
      "Allongé sur le dos, bras tendus au-dessus de la tête",
      "Soulevez les épaules et les jambes du sol",
      "Creusez le bas du dos contre le sol",
      "Maintenez la position en forme de banane"
    ],
    vigilance: [
      "Le bas du dos doit rester plaqué au sol",
      "Commencez avec les bras le long du corps si trop difficile"
    ],
    muscles: { principaux: ["Abdominaux"], secondaires: ["Fléchisseurs de hanche"] }
  },
  'Skin the cat': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/1.jpg',
    execution: [
      "Suspendez-vous à la barre",
      "Amenez les pieds vers la barre en pliant les genoux",
      "Passez les pieds entre les bras et derrière vous",
      "Descendez en position German hang puis remontez"
    ],
    vigilance: [
      "Mouvement de mobilité des épaules",
      "Allez-y progressivement pour la descente"
    ],
    muscles: { principaux: ["Dorsaux", "Abdominaux"], secondaires: ["Deltoïdes", "Biceps"] }
  },
  'Front lever raises': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/1.jpg',
    execution: [
      "Suspendez-vous à la barre",
      "Corps gainé, montez les jambes tendues vers l'horizontal",
      "Tirez avec les dorsaux pour amener les hanches vers la barre",
      "Redescendez de façon contrôlée"
    ],
    vigilance: [
      "Commencez avec les genoux pliés (tuck front lever)",
      "Progression : tuck → advanced tuck → straddle → full"
    ],
    muscles: { principaux: ["Dorsaux", "Abdominaux"], secondaires: ["Biceps", "Avant-bras"] }
  },
  'Back lever': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/1.jpg',
    execution: [
      "Depuis un skin the cat, descendez en position horizontale",
      "Corps face vers le sol, bras tendus derrière",
      "Maintenez la position",
      "Remontez via le skin the cat"
    ],
    vigilance: [
      "Commencez avec les genoux pliés (tuck back lever)",
      "Très intense pour les biceps et épaules"
    ],
    muscles: { principaux: ["Biceps", "Deltoïdes antérieurs"], secondaires: ["Dorsaux", "Core"] }
  },
  'Nordic curl': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Floor_Glute-Ham_Raise/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Floor_Glute-Ham_Raise/1.jpg',
    execution: [
      "À genoux, pieds bloqués sous un support",
      "Corps droit des genoux aux épaules",
      "Descendez lentement vers le sol en contrôlant",
      "Poussez avec les mains au sol pour remonter (assisté)"
    ],
    vigilance: [
      "Exercice très intense pour les ischio-jambiers",
      "Descendez aussi lentement que possible"
    ],
    muscles: { principaux: ["Ischio-jambiers"], secondaires: ["Fessiers", "Mollets"] }
  },
  'Dragon flag': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Lying_Leg_Raise/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Lying_Leg_Raise/1.jpg',
    execution: [
      "Allongé sur un banc, agrippez-vous derrière la tête",
      "Soulevez tout le corps à la verticale (seules les épaules touchent)",
      "Descendez lentement en gardant le corps droit",
      "Remontez sans toucher le banc avec les fesses"
    ],
    vigilance: [
      "Commencez avec les genoux pliés",
      "Exercice avancé de Bruce Lee"
    ],
    muscles: { principaux: ["Abdominaux"], secondaires: ["Dorsaux", "Fléchisseurs de hanche"] }
  },
  'Handstand hold': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Handstand_Push-Ups/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Handstand_Push-Ups/1.jpg',
    execution: [
      "Face au mur, montez en appui renversé",
      "Mains largeur d'épaules, doigts écartés",
      "Corps gainé, talons contre le mur",
      "Maintenez la position"
    ],
    vigilance: [
      "Commencez face au mur (plus facile à sortir)",
      "Poussez fort dans les épaules"
    ],
    muscles: { principaux: ["Deltoïdes", "Trapèzes"], secondaires: ["Triceps", "Core"] }
  },
  'Planche lean': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/1.jpg',
    execution: [
      "Position de planche haute (haut de pompe)",
      "Penchez-vous en avant en gardant les bras tendus",
      "Les épaules dépassent largement les mains",
      "Maintenez la position"
    ],
    vigilance: [
      "Progression vers la planche",
      "Augmentez le lean progressivement"
    ],
    muscles: { principaux: ["Deltoïdes antérieurs"], secondaires: ["Pectoraux", "Core", "Biceps"] }
  },
  'Dips aux anneaux': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/1.jpg',
    execution: [
      "En appui sur les anneaux, bras tendus",
      "Tournez les anneaux vers l'extérieur (RTO) en haut",
      "Descendez en fléchissant les coudes jusqu'à 90°",
      "Poussez pour remonter"
    ],
    vigilance: [
      "Beaucoup plus difficile que les dips classiques",
      "Stabilisez d'abord le support en haut avant de descendre"
    ],
    muscles: { principaux: ["Triceps", "Pectoraux"], secondaires: ["Deltoïdes", "Core"] }
  },
  'Support aux anneaux': {
    image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/0.jpg',
    image2: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/1.jpg',
    execution: [
      "Montez en appui sur les anneaux, bras tendus",
      "Stabilisez-vous sans bouger",
      "Tournez progressivement les anneaux vers l'extérieur (RTO)",
      "Maintenez la position"
    ],
    vigilance: [
      "Fondation de tous les mouvements aux anneaux",
      "30 secondes RTO = prêt pour les dips aux anneaux"
    ],
    muscles: { principaux: ["Triceps", "Deltoïdes"], secondaires: ["Core", "Avant-bras"] }
  }
};

// Fonction utilitaire pour trouver les détails d'un exercice
export const findExerciseDetails = (exerciseName) => {
  // Cherche d'abord une correspondance exacte
  if (EXERCISE_DETAILS[exerciseName]) {
    return EXERCISE_DETAILS[exerciseName];
  }

  // Sinon, essaye sans les préfixes/suffixes courants
  const baseName = exerciseName
    .replace(' lestées', '')
    .replace(' lestés', '')
    .replace(' lourd', '')
    .replace(' haltère', '')
    .replace(' barre', '')
    .replace(' élastique', '');

  if (EXERCISE_DETAILS[baseName]) {
    return EXERCISE_DETAILS[baseName];
  }

  // Cherche une correspondance partielle
  const keys = Object.keys(EXERCISE_DETAILS);
  const matchingKey = keys.find(key =>
    exerciseName.toLowerCase().includes(key.toLowerCase()) ||
    key.toLowerCase().includes(exerciseName.toLowerCase())
  );

  if (matchingKey) {
    return EXERCISE_DETAILS[matchingKey];
  }

  return null;
};
