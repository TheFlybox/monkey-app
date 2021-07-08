export default class VehicleService{

  getMakes(){
    return [
      "Toyota",
      "Honda",
      "Nissan",
      "Hyundai",
      "BMW",
      "Jeep",
      "Ford"
    ]
  }

  getModels(){
    return [
      "Corolla",
      "Civic",
      "Pathfinder",
      "Sonata",
      "Cherokee",
      "Focus",
      "Accord"
    ]
  }

  getColors(){
    return [
      "Azul",
      "Amarillo",
      "Verde",
      "Rojo",
      "Morado",
      "Blanco",
      "Negro",
      "Purpura",
      "Rosado",
      "Naranja",
      "Gris"
    ]
  }

  getYears(){
    let res = [] as number[];
    for(let i = 1995; i<=2021; i++){
      res.push(i);
    }
    return res;
  }

  getVehicleStatus(){
    return [
      "Daños menores",
      "Daños visibles"
    ]
  }
}