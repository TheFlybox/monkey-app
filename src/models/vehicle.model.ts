import Driver from "./driver.model";
import Passenger from "./passenger.model";

export default class Vehicle{
  id: string = '';
  make: string = '';
  model: string = '';
  color: string = '';
  year: string = '';
  status: string = '';
  licensePlate: string = '';
  driver: Driver = new Driver();
  passengers: Passenger[] = [];
}