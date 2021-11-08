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
        path: "/resultados",
      },
      {
        name: "Calificación",
        path: "/calificación",
      },
      {
        name: "Parametrización",
        path: "/parametrización",
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
        path: "/consolidado",
      },
      {
        name: "Dias de Entrevista",
        path: "/dias",
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
        path: "/administrar",
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
        path: "/resultados",
      },
    ],
  },
];
