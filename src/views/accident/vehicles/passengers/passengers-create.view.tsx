import Vehicle from 'models/vehicle.model';
import React, { useContext } from 'react';
import AccidentFormContext from 'contexts/accident-form.context';
import { nanoid } from 'nanoid';
import Passenger from 'models/passenger.model';
import PassengersForm from './passengers-form.view';

export default function PassengersCreate() {
	const context = useContext(AccidentFormContext);

	const submitForm = (item: Passenger) => {
		item.id = nanoid();
		let temp = {...context.vehicle};
		temp.passengers.push(item);
		context.setVehicle(temp);
	};

	return (
		<PassengersForm
			title='Agregar pasajero'
			passenger={new Passenger()}
			submitForm={submitForm}
		/>
	);
}
