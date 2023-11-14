var screeners = {
      type: jsPsychSurvey,
      pages: [
        [
          {
            type: 'text',
            prompt: 'Age (in years)',
            name: 'Age',
            required: true,
          },
          {
            type: 'multi-choice',
            options: ['Male', 'Female', 'Non-binary / third gender', ' Prefer not to say'],
            option_reorder: 'random',
            prompt: 'What gender do you identify as?',
            name: 'Gender_Identity',
            required: true,
          },
          {
            type: 'multi-choice',
            options: ['Yes', 'No'],
            option_reorder: 'none',
            prompt: 'Have you been diagnosed with Dyslexia, Dyspraxia or ADHD, or aware of having any related literacy difficulties?',
            name: 'Neuro_Issues',
            required: true,
          },
          {
          type: 'multi-choice',
            options: ['Yes', 'No'],
            option_reorder: 'none',
            prompt: 'Do you have normal or corrected-to-normal vision? (i.e. You can see colour normally, and if you need glasses, you are wearing them or contact lenses)',
            name: 'Vision_Issues',
            required: true,
          },
          {
          type: 'multi-choice',
            options: ['Yes', 'No'],
            option_reorder: 'none',
            prompt: 'Do you currently reside in the United States?',
            name: 'US_Location',
            required: true,
          },
          {
          type: 'multi-choice',
            options: ['Yes', 'No'],
            option_reorder: 'none',
            prompt: 'Do you have any reading related disorders?',
            name: 'Reading_Issues',
            required: true,
          },
          {
          type: 'multi-choice',
            options: ['Yes', 'No'],
            option_reorder: 'none',
            prompt: 'Are you fluent in English?',
            name: 'English',
            required: true,
          },
          {
          type: 'multi-choice',
            options: ['Yes', 'No'],
            option_reorder: 'none',
            prompt: 'Have you ever been diagnosed with mild cognitive impairment or dementia?',
            name: 'Cog_Issues',
            required: true,
          },
          {
          type: 'multi-choice',
            options: ['Yes', 'No'],
            option_reorder: 'none',
            prompt: 'Do you have any diagnosed mental health condition that is uncontrolled (by medication or intervention) and which has a significant impact on your daily life / activities?',
            name: 'Health_Issues',
            required: true,
          },
          {
          type: 'multi-choice',
            options: ['Yes', 'No'],
            option_reorder: 'none',
            prompt: "Have you ever had an injury to the head that's caused you to be knocked out for a period of time (e.g., from a fall, blow to the head, road traffic accident)?",
            name: 'Head_Issues',
            required: true,
          },
        ]
      ],
      button_label_finish: 'Continue',
      preamble: 'Please carefully read and respond to the following questions:',
      autocomplete: true,                
    };