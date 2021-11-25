export const ITEMS = [
    {
        name: "Dashboard",
        icon: "fas fa-border-all",
        items: [],
        path: "/",
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
                path: "/inscripcion",
            },
            {
                name: "Calificación de la carta de motivación",
                path: "/cartamotivacion",
            },
            {
                name: "Parametrización",
                path: "/parametrizacion",
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
                path: "/prueba",
            },
            {
                name: "Calificar Pruebas Tecnicas",
                path: "/calificar",
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
