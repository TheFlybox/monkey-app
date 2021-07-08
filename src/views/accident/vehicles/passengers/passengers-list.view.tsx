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
import Passenger from 'models/passenger.model';

export default function PassengersList() {
	const context = useContext(AccidentFormContext);
	const [preset] = useIonAlert();
	const [passenger, setPassenger] = useState(context.accident.vehicles);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color='light'>
					<IonButtons slot='start'>
						<IonBackButton defaultHref={routes.default}></IonBackButton>
					</IonButtons>
					<IonTitle>Lista de pasajeros</IonTitle>
					<IonButtons slot='end'>
						<IonButton
							routerLink={routes.accident.vehicles.passengers.create}
							onClick={() => {
								context.setPassenger(new Passenger());
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
				{context.vehicle.passengers.length === 0 ? <EmptyList /> : null}
				<IonList lines='full'>
					{context.vehicle.passengers.map((x, i) => {
						return (
							<IonItemSliding key={i}>
								<IonItem
									button
									routerLink={routes.accident.vehicles.edit}
									onClick={() => {
										context.setPassenger(x);
									}}>
									<IonText slot='start' style={{ padding: '0.7rem 0rem' }}>
										<span>
											{x.firstName} {x.lastName} ({x.sex})
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
														context.deletePassenger(x);
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
