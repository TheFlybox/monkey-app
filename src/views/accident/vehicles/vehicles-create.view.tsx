import Vehicle from 'models/vehicle.model';
import React, { useContext } from 'react';
import VehiclesForm from './vehicles-form.view';
import AccidentFormContext from 'contexts/accident-form.context';
import { nanoid } from 'nanoid';

export default function VehiclesCreate() {
	const context = useContext(AccidentFormContext);

	const submitForm = (item: Vehicle) => {
		item.id = nanoid();
		let temp = context.accident;
		temp.vehicles.push(item);
		context.setAccident(temp);
	};

	return (
		<VehiclesForm
			title='Agregar vehiculo'
			vehicle={new Vehicle()}
			submitForm={submitForm}
		/>
	);
}
