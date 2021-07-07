export default {
  default: '/',
  home: '/home',
  accident: {
    list: '/accident/list',
    create: '/accident/create',
    edit: '/accident/edit',
    location: {
      form: '/accident/location'
    },
    notes: {
      form: '/accident/notes'
    },
    vehicles: {
      list: '/accident/vehicles/list',
      create: '/accident/vehicles/create',
      edit: '/accident/vehicles/edit',
      passengers: {
        list: '/accident/vehicles/passengers/list',
        create: '/accident/vehicles/passengers/create',
        edit: '/accident/vehicles/passengers/edit',
      },
      driver: {
        form: '/accident/vehicles/driver'
      },
      licensePlate: {
        form: '/accident/vehicles/license-plate'
      }
    }
  }
}