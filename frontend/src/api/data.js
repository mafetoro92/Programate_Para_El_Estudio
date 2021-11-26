export const ITEMS = [
    {
        name: "Dashboard",
        icon: "fas fa-border-all",
        id: 1,
        items: [],
        pathname: "/",
    },
    {
        name: "Aspirantes",
        icon: "far fa-user",
        id: 2,
        items: [],
        pathname: "/aspirantes",
    },
    {
        name: "Inscripción",
        icon: "far fa-id-card",
        id: 3,
        items: [
            {
                name: "Resultados",
                pathname: "/resultsInscription",
            },
            {
                name: "Calificación de la carta de motivación",
                pathname: "/motivationLetter",
            },
            {
                name: "Parametrización",
                pathname: "/parameterization",
            },
        ],
    },
    {
        name: "Citación",
        icon: "fas fa-map-marker-alt",
        id: 4,
        items: [
            {
                name: "Consolidado Postulantes",
                pathname: "/",
            },
            {
                name: "Dias de Entrevista",
                pathname: "/",
            },
        ],
    },
    {
        name: "Prueba Técnica",
        icon: "fas fa-laptop-code",
        id: 5,
        items: [
            {
                name: "Administrar Pruebas Técnicas",
                pathname: "/prueba",
            },
            {
                name: "Calificar Pruebas Tecnicas",
                pathname: "/calificar",
            },
        ],
    },
    {
        name: "Selección",
        icon: "fas fa-vote-yea",
        id: 6,
        items: [
            {
                name: "Resultados",
                pathname: "/",
            },
        ],
    },
];

export const ITEMS_ASPIRANTS = [
    {
        name: "Dashboard de progreso",
        icon: "fas fa-border-all",
        items: [],
        pathname: "/",
        id: 7,
    },
    {
        name: "Formulario de inscripción",
        icon: "fas fa-bullhorn",
        items: [],
        pathname: "/inscripcion",
        id: 8,
    },
    {
        name: "Agenda de Entrevista y assessment",
        icon: "fas fa-map-marker-alt",
        items: [],
        pathname: "/entrevista",
        id: 9,
    },
    {
        name: "Prueba Técnica",
        icon: "fas fa-laptop-code",
        items: [],
        pathname: "/aspirante",
        id: 10,
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
];