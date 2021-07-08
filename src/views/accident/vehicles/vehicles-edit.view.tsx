import Vehicle from 'models/vehicle.model';
import React, { useContext } from 'react';
import VehiclesForm from './vehicles-form.view';
import AccidentFormContext from 'contexts/accident-form.context';

export default function VehiclesEdit() {
	const context = useContext(AccidentFormContext);

	const submitForm = (item: Vehicle) => {
		let temp = {...context.accident};
    let index = temp.vehicles.findIndex(x => x.id === item.id);
    temp.vehicles[index] = item;
		context.setAccident(temp);
	};

	return (
		<VehiclesForm
			title='Editar vehiculo'
			vehicle={context.vehicle}
			submitForm={submitForm}
		/>
	);
}
