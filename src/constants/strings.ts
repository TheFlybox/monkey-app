import routes from "./routes";

const menuItems = [
  { text: 'Publicar', icon: 'add-outline', url: routes.accident.create },
  { text: 'Resumen', icon: 'location-outline', url: '' },
  { text: 'Accidentes', icon: 'car-outline', url: '' },
  { text: 'Notificaciones', icon: 'notifications-outline', url: '' },
  { text: 'Reportes', icon: 'stats-chart-outline', url: '' },
  { text: 'Informaciones', icon: 'information-circle-outline', url: '' },
  { text: 'Mi Cuenta', icon: 'person-outline', url: '' },
  { text: 'Configuracion', icon: 'settings-outline', url: '' },
  { text: 'Ayuda', icon: 'help-outline', url: '' },
  { text: 'Consejos', icon: 'bulb-outline', url: '' },
  { text: 'Reseñas', icon: 'thumbs-up-outline', url: '' },
  { text: 'Cerrar sesion', icon: 'log-out-outline', url: '' }
];

export { menuItems }