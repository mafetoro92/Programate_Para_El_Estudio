export const ITEMS = [
    {
        name: "Dashboard",
        icon: "fas fa-border-all",
        id: 1,
        items: [],
        pathname: "/dasboard",
    },
    {
        name: "Convocatoria",
        icon: "far fa-user",
        id: 2,
        items: [],
        path: "/convocatoria",
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
                pathname: "/dasboard",
            },
            {
                name: "Dias de Entrevista",
                pathname: "/dia-de-entrevista",
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
                pathname: "/dasboard",
            },
        ],
    },
];

export const ITEMS_ASPIRANTS = [
    {
        name: "Dashboard de progreso",
        icon: "fas fa-border-all",
        items: [],
        pathname: "/dashboardAspirant",
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

const pruebas1 = [
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
