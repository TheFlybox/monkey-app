import React, { useContext } from 'react';
import AccidentFormContext from 'contexts/accident-form.context';
import { useState } from 'react';
import Accident from 'models/accident.model';
import Vehicle from 'models/vehicle.model';
import Passenger from 'models/passenger.model';

export default function AccidentFormContainer(props: any){
  const [accident, setAccident] = useState(new Accident());
  const [vehicle, setVehicle] = useState(new Vehicle());
  const [passenger, setPassenger] = useState(new Passenger());

  const deleteVehicle = (item: Vehicle) => {
    let temp = {...accident};
    let index = temp.vehicles.findIndex(x => x.id === item.id);
    temp.vehicles.splice(index, 1);
    setAccident(temp);
  }

  const deletePassenger = (item: Passenger) => {
    let temp = {...vehicle};
    let index = temp.passengers.findIndex(x => x.id === item.id);
    temp.passengers.splice(index, 1);
    setVehicle(temp);
  }

  return(
    <AccidentFormContext.Provider value={{
      accident: accident,
      vehicle: vehicle,
      passenger: passenger,
      setAccident: setAccident,
      setVehicle: setVehicle,
      setPassenger: setPassenger,
      deleteVehicle: deleteVehicle,
      deletePassenger: deletePassenger
    }}>
      {props.children}
    </AccidentFormContext.Provider>
  )
}