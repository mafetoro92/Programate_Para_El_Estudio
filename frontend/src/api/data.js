export const ITEMS = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
    {
        name: "Dashboard",
        icon: "fas fa-border-all",
        items: [],
        path: "/",
    },
    {
        name: "Aspirantes",
        icon: "far fa-user",
        id: 3,
        items: [],
        path: "/aspirantes",
    },
    {
        name: "Inscripción",
        icon: "far fa-id-card",
        id: 4,
        items: [
            {
                name: "Resultados",
                path: "/resultsInscription",
            },
            {
                name: "Calificación de la carta de motivación",
                path: "/motivationLetter",
            },
            {
                name: "Parametrización",
                path: "/parameterization",
            },
        ],
    },
    {
        name: "Citación",
        icon: "fas fa-map-marker-alt",
        id: 5,
        items: [
            {
                name: "Consolidado Postulantes",
                path: "/",
            },
            {
                name: "Dias de Entrevista",
                path: "/",
            },
        ],
    },
    {
        name: "Prueba Técnica",
        icon: "fas fa-laptop-code",
        id: 6,
        items: [
            {
                name: "Administrar Pruebas Técnicas",
                path: "/administertechnicaltest",
            },
            {
                name: "Calificar Pruebas Tecnicas",
                path: "/qualifytechnicaltest",
            },
        ],
    },
    {
        name: "Selección",
        icon: "fas fa-vote-yea",
        id: 7,
        items: [
            {
                name: "Resultados",
                path: "/",
            },
        ],
    },
];

export const ITEMS_ASPIRANTS = [
    {
        name: "Dashboard de progreso",
        icon: "fas fa-border-all",
        items: [],
<<<<<<< HEAD
=======
  {
    name: "Dashboard",
    icon: "fas fa-border-all",
    items: [],
    path: "/",
  },
  {
    name: "Citación",
    icon: "fas fa-map-marker-alt",
    id: 5,
    items: [
      {
        name: "Consolidado Postulantes",
        path: "/",
      },
      {
        name: "Dias de Entrevista",
        path: "/",
      },
    ],
  },
  {
    name: "Prueba Técnica",
    icon: "fas fa-laptop-code",
    id: 6,
    items: [
      {
        name: "Administrar Pruebas Técnicas",
        path: "/",
      },
      {
        name: "Calificar Pruebas Tecnicas",
>>>>>>> 1d55c4409c00b2f957f5bf3bc1cee8c1c9a1d555
=======
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
        path: "/",
        id: 8,
    },
    {
        name: "Formulario de inscripción",
        icon: "fas fa-bullhorn",
        items: [],
        path: "/inscripción",
        id: 9,
    },
    {
        name: "Agenda de Entrevista y assessment",
        icon: "fas fa-map-marker-alt",
        items: [],
        path: "/entrevista",
        id: 10,
    },
    {
        name: "Prueba Técnica",
        icon: "fas fa-laptop-code",
        items: [],
        path: "/aspirante",
        id: 11,
    },
];

/*const pruebas1 = [
      {
          user_id: 1,
          userFullName: "Pablo",
          htmlScore: 23,
          cssScore: 25,
          javascriptScore: 27,
          pythonScore: 34,
          Score: 28,
          soloLearnScore: 28,
          personalProfileScore: 28,
          motivationScore: 28,
          finalScore: 23,
      },
      
  ];
  */

export const PROFILE_SOLOLEARN = [
    {
        user_id: 1,
        userFullName: "Pablo",
        htmlScore: 50,
        cssScore: 25,
        javascriptScore: 27,
        pythonScore: 34,
        Score: 28,
        soloLearnScore: 28,
        personalProfileScore: 28,
        motivationScore: 28,
        finalScore: 23,
    },
];

<<<<<<< HEAD
<<<<<<< HEAD
export const pruebas1 = [
=======
export const ITEMS_ASPIRANTS = [
    {
        name: "Dashboard de progreso",
        icon: "fas fa-border-all",
        items: [],
        path: "/",
        id: 8,
    },
    {
        name: "Formulario de inscripción",
        icon: "fas fa-bullhorn",
        items: [],
        path: "/inscripción",
        id: 9,
    },
    {
        name: "Agenda de Entrevista y assessment",
        icon: "fas fa-map-marker-alt",
        items: [],
        path: "/entrevista",
        id: 10,
    },
    {
        name: "Prueba Técnica",
        icon: "fas fa-laptop-code",
        items: [],
        path: "/aspirante",
        id: 11,
    },
];

/*const pruebas1 = [
>>>>>>> 1d55c4409c00b2f957f5bf3bc1cee8c1c9a1d555
=======
export const pruebas1 = [
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
    {
        user_id: 1,
        userFullName: "Pablo",
        htmlScore: 23,
        cssScore: 25,
        javascriptScore: 27,
        pythonScore: 34,
        Score: 28,
        soloLearnScore: 28,
        personalProfileScore: 28,
        motivationScore: 28,
        finalScore: 23,
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
];

export const CONVOCATORY = [
    {
        id: "618af60371d0ac754e708e31",
        name: "Programate",
        initialDate: "",
        finalDate: "",
        program: "Goyn",
        maxQuotas: 23,
        initialBootcampDate: "",
        finalBootcampDate: "",
        parameterization: {
            personalProfile: 20,
            sololearn: 234567,
            motivationLetter: 2345,
        },
        residenceCountry: "",
        residencyDepartment: "",
        maxAge: 18,
        maxSocioeconomicStratus: 4,
        test: {},
        usersRegisted: ["618e8a293dbcd0c5c40124dc"],
        test: {},
        status: true,
    },
    {
        id: "618c39993a9cca7088b85e05",
        name: "Programate 2.0",
        initialDate: "",
        finalDate: "",
        program: "Regional",
        maxQuotas: 50,
        initialBootcampDate: "",
        finalBootcampDate: "",
        parameterization: {
            personalProfile: 20,
            sololearn: 234567,
            motivationLetter: 2345,
        },
        residenceCountry: "",
        residencyDepartment: "",
        maxAge: 18,
        maxSocioeconomicStratus: 3,
        test: {},
        usersRegisted: [
            "618c352d3ad3f3933bfb3b59",
            "618e8a293dbcd0c5c40124dc",
            "6189bb71cf8fc583a3800001",
            "618e8a413dbcd0c5c40124dd",
            "618e8a4f3dbcd0c5c40124de",
        ],
        test: {},
        status: true,
    },
<<<<<<< HEAD
=======
    
];
*/

export const PROFILE_SOLOLEARN = [
    {
        user_id: 1,
        userFullName: "Pablo",
        htmlScore: 50,
        cssScore: 25,
        javascriptScore: 27,
        pythonScore: 34,
        Score: 28,
        soloLearnScore: 28,
        personalProfileScore: 28,
        motivationScore: 28,
        finalScore: 23,
    },
];

export const pruebas1 = [
  {
      user_id: 1,
      userFullName: "Pablo",
      htmlScore: 23,
      cssScore: 25,
      javascriptScore: 27,
      pythonScore: 34,
      Score: 28,
      soloLearnScore: 28,
      personalProfileScore: 28,
      motivationScore: 28,
      finalScore: 23,
  }
>>>>>>> 1d55c4409c00b2f957f5bf3bc1cee8c1c9a1d555
];

=======
];
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
