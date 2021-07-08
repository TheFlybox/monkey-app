import React, { useState, useContext } from 'react';
import {
	IonPage,
	IonContent,
	IonToolbar,
	IonTitle,
	IonButtons,
	IonBackButton,
	IonHeader,
	IonButton,
	IonIcon,
	IonList,
	IonItem,
	IonSelect,
	IonSelectOption,
	IonLabel,
	IonChip,
	useIonViewWillEnter,
	useIonToast,
} from '@ionic/react';
import EmptyList from 'components/empty-list/empty-list.component';
import routes from 'constants/routes';
import VehicleService from 'services/vehicle.service';
import Vehicle from 'models/vehicle.model';
import AccidentFormContext from 'contexts/accident-form.context';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

export interface VehicleFormPageProps {
	title: string;
	vehicle: Vehicle;
	submitForm: (item: Vehicle) => void;
}

const VehicleFormPage = (props: VehicleFormPageProps) => {
	const vehicleService = new VehicleService();
	const [vehicle, setVehicle] = useState(props.vehicle);
	const context = useContext(AccidentFormContext);
	const history = useHistory();

	useEffect(() => {
		console.log(vehicle);
	}, [vehicle]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color='light'>
					<IonButtons slot='start'>
						<IonBackButton
							defaultHref={routes.default}
							icon='close-outline'></IonBackButton>
					</IonButtons>
					<IonTitle>{props.title}</IonTitle>
					<IonButtons slot='end'>
						<IonButton
							color='primary'
							onClick={() => {
								props.submitForm(vehicle);
								history.go(-2);
								console.log(history);
							}}>
							Listo
							<IonIcon slot='start' icon='checkmark-done' />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList lines='full'>
					<IonItem>
						<IonIcon color='medium' icon='star-outline' slot='start' />
						<IonLabel>Marca</IonLabel>
						<IonSelect
							placeholder='Selecciona'
							value={vehicle.make}
							onIonChange={(e) =>
								setVehicle({ ...vehicle, make: e.detail.value })
							}>
							{vehicleService.getMakes().map((x, i) => {
								return (
									<IonSelectOption value={x} key={i}>
										{x}
									</IonSelectOption>
								);
							})}
						</IonSelect>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='star-half-outline' slot='start' />
						<IonLabel>Modelo</IonLabel>
						<IonSelect
							value={vehicle.model}
							placeholder='Selecciona'
							onIonChange={(e) =>
								setVehicle({ ...vehicle, model: e.detail.value })
							}>
							{vehicleService.getModels().map((x, i) => {
								return (
									<IonSelectOption value={x} key={i}>
										{x}
									</IonSelectOption>
								);
							})}
						</IonSelect>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='color-palette-outline' slot='start' />
						<IonLabel>Color</IonLabel>
						<IonSelect
							value={vehicle.color}
							placeholder='Selecciona'
							onIonChange={(e) =>
								setVehicle({ ...vehicle, color: e.detail.value })
							}>
							{vehicleService.getColors().map((x, i) => {
								return (
									<IonSelectOption value={x} key={i}>
										{x}
									</IonSelectOption>
								);
							})}
						</IonSelect>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='calendar-outline' slot='start' />
						<IonLabel>Año</IonLabel>
						<IonSelect
							value={vehicle.year}
							placeholder='Selecciona'
							onIonChange={(e) =>
								setVehicle({ ...vehicle, year: e.detail.value })
							}>
							{vehicleService.getYears().map((x, i) => {
								return (
									<IonSelectOption value={x} key={i}>
										{x}
									</IonSelectOption>
								);
							})}
						</IonSelect>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='pulse-outline' slot='start' />
						<IonLabel>Estado del vehiculo</IonLabel>
						<IonSelect
							value={vehicle.status}
							placeholder='Selecciona'
							onIonChange={(e) =>
								setVehicle({ ...vehicle, status: e.detail.value })
							}>
							{vehicleService.getVehicleStatus().map((x, i) => {
								return (
									<IonSelectOption value={x} key={i}>
										{x}
									</IonSelectOption>
								);
							})}
						</IonSelect>
					</IonItem>
					<IonItem
						button
						routerLink={routes.accident.vehicles.licensePlate.form}>
						<IonIcon color='medium' icon='card-outline' slot='start' />
						<IonLabel>
							<h2>Matricula del vehiculo</h2>
							<small style={{ color: '#999' }}>
								{vehicle.licensePlate || 'Vacio'}
							</small>
						</IonLabel>
						<IonIcon
							size='small'
							color='medium'
							slot='end'
							icon='chevron-forward'></IonIcon>
					</IonItem>
					<IonItem button routerLink={routes.accident.vehicles.passengers.list}>
						<IonIcon color='medium' icon='people-outline' slot='start' />
						<IonLabel>Pasajeros</IonLabel>
						<IonIcon
							slot='end'
							color='medium'
							size='small'
							icon='chevron-forward'
						/>
						<IonChip color='primary'>
							<IonLabel color='primary'>
								{context.vehicle.passengers.length}
							</IonLabel>
						</IonChip>
					</IonItem>
					<IonItem
						button
						routerLink={routes.accident.vehicles.driver.form}
						onClick={() => {
							context.setVehicle(vehicle);
						}}>
						<IonIcon color='medium' icon='person-outline' slot='start' />
						<IonLabel>
							<h2>Conductor</h2>
							<small style={{ color: '#999' }}>
								{vehicle.driver.firstName || 'Vacio'}
							</small>
						</IonLabel>
						<IonIcon
							size='small'
							color='medium'
							slot='end'
							icon='chevron-forward'></IonIcon>
					</IonItem>
					<IonItem>
						<IonButtons slot='start'>
							<IonButton color='danger'>Reiniciar</IonButton>
						</IonButtons>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default VehicleFormPage;
