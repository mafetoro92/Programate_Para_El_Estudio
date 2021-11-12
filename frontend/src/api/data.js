export const ITEMS = [
    {
        name: "Dashboard",
        icon: "fas fa-border-all",
        items: [],
        path: "/",
        id: 1,
    },
    {
        name: "Convocatoria",
        icon: "fas fa-bullhorn",
        items: [],
        path: "/convocatoria",
        id: 2,
    },
    {
        name: "Aspirantes",
        icon: "far fa-user",
        items: [],
        path: "/aspirantes",
        id: 3,
    },
    {
        name: "Inscripción",
        icon: "far fa-address-card",
        id: 4,
        items: [
            {
                name: "Resultados",
                path: "/",
            },
            {
                name: "Calificación",
                path: "/",
            },
            {
                name: "Parametrización",
                path: "/",
            },
        ],
    },
    {
        name: "Citación",
        icon: "fas fa-search-location",
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
                path: "/prueba-tecnica/administrar-prueba-tecnica",
            },
            {
                name: "Calificar Pruebas Tecnicas",
                path: "/prueba-tecnica/calificar-prueba-tecnica",
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
    path: "/formulario/inscripción",
    id: 9,
  },
  {
    name: "Agenda de Entrevista y assessment",
    icon: "fas fa-search-location",
    items: [],
    path: "/agenda/entrevista",
    id: 10,
  },
  {
    name: "Prueba Técnica",
    icon: "fas fa-laptop-code",
    items: [],
    path: "/prueba/aspirante",
    id: 11,
  },
];
