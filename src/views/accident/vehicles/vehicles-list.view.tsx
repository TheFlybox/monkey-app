import React, { useContext, useState, useEffect } from 'react';
import {
	IonPage,
	IonContent,
	IonToolbar,
	IonTitle,
	IonBackButton,
	IonHeader,
	IonButtons,
	IonButton,
	IonIcon,
	IonList,
	IonItem,
	IonLabel,
	IonText,
	IonItemSliding,
	IonItemOptions,
	IonItemOption,
	useIonAlert
} from '@ionic/react';
import EmptyList from 'components/empty-list/empty-list.component';
import routes from 'constants/routes';
import AccidentFormContext from 'contexts/accident-form.context';
import Vehicle from 'models/vehicle.model';

export default function VehicleList() {
	const context = useContext(AccidentFormContext);
	const [preset] = useIonAlert();
	const [vehicles, setVehicles] = useState(context.accident.vehicles);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color='light'>
					<IonButtons slot='start'>
						<IonBackButton defaultHref={routes.default}></IonBackButton>
					</IonButtons>
					<IonTitle>Lista de vehiculos</IonTitle>
					<IonButtons slot='end'>
						<IonButton
							routerLink={routes.accident.vehicles.create}
							onClick={() => {
								context.setVehicle(new Vehicle());
							}}>
							<IonIcon
								color='primary'
								size='large'
								icon='add-outline'></IonIcon>
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				{vehicles.length === 0 ? <EmptyList /> : null}
				<IonList lines='full'>
					{vehicles.map((x, i) => {
						return (
							<IonItemSliding key={i}>
								<IonItem
									button
									routerLink={routes.accident.vehicles.edit}
									onClick={() => {
										context.setVehicle(x);
									}}>
									<IonText slot='start' style={{ padding: '0.7rem 0rem' }}>
										<span>
											{x.make} {x.model} ({x.color})
										</span>
										<br />
										<small style={{ color: '#aaa' }}>ID: {x.id}</small>
									</IonText>
									<IonIcon
										slot='end'
										icon='chevron-forward-outline'
										color='medium'></IonIcon>
								</IonItem>
								<IonItemOptions side='end'>
									<IonItemOption
										color='danger'
										onClick={() => {
											preset({
												header: "Borrar vehiculo",
												message: "Estas seguro?",
												buttons: [
													'Cancelar',
													{ text: 'Ok', handler: (d) => {
														context.deleteVehicle(x);
													} }
												]
											})
										}}>
										Borrar
									</IonItemOption>
								</IonItemOptions>
							</IonItemSliding>
						);
					})}
				</IonList>
			</IonContent>
		</IonPage>
	);
}
