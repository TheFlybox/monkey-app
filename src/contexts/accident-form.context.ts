import Accident from 'models/accident.model';
import Passenger from 'models/passenger.model';
import Vehicle from 'models/vehicle.model';
import { createContext } from 'react';

export interface AccidentFormContextProps{
  accident: Accident;
  vehicle: Vehicle;
  passenger: Passenger;
  setAccident: React.Dispatch<React.SetStateAction<Accident>>;
  setVehicle: React.Dispatch<React.SetStateAction<Vehicle>>;
  setPassenger: React.Dispatch<React.SetStateAction<Passenger>>;
  deleteVehicle: (item: Vehicle) => void;
  deletePassenger: (item: Passenger) => void;
}

const AccidentFormContext = createContext({} as AccidentFormContextProps);

export default AccidentFormContext;