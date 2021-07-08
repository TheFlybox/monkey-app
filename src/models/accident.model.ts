import Photo from "./photo.model";
import Vehicle from "./vehicle.model";
import Location from "./location.model";

export default class Accident{
  id: string = '';
  time: string = '';
  date: string = '';
  location: Location = new Location();
  accidentType: string = '';
  notes: string = '';
  severityScale: string = '';
  involve_police: boolean = true;
  involve_911: boolean = true;
  involve_mopc: boolean = true;
  vehicles: Vehicle[] = [];
  photos: Photo[] = [];
}