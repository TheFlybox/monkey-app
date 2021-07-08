import React, { useContext } from 'react';
import PassengersForm from './passengers-form.view';
import AccidentFormContext from 'contexts/accident-form.context';
import Passenger from 'models/passenger.model';

export default function PassengersEdit() {
	const context = useContext(AccidentFormContext);

	const submitForm = (item: Passenger) => {
		let temp = {...context.vehicle};
    let index = temp.passengers.findIndex(x => x.id === item.id);
    temp.passengers[index] = item;
		context.setVehicle(temp);
	};

	return (
		<PassengersForm
			title='Editar pasajero'
			passenger={context.passenger}
			submitForm={submitForm}
		/>
	);
}
