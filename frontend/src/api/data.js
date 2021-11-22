export const ITEMS = [
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
    },
];

export const CONVOCATORY = [
    {
        id: 1,
        name: "convocatoria1",
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
        usersRegisted: [],
        test: {},
        status: true,
    },
    {
        id: 2,
        name: "convocatoria2",
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
        usersRegisted: [],
        test: {},
        status: true,
    },
];
