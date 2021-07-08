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
	IonInput,
	IonDatetime,
  useIonAlert,
} from '@ionic/react';
import routes from 'constants/routes';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Passenger from 'models/passenger.model';

export interface VehicleFormPageProps {
	title: string;
	passenger: Passenger;
	submitForm: (item: Passenger) => void;
}

const PassengersForm = (props: VehicleFormPageProps) => {
	const [passenger, setPassenger] = useState(props.passenger);
	const history = useHistory();
  const [preset] = useIonAlert();

	useEffect(() => {
		console.log(passenger);
	}, [passenger]);

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
								props.submitForm(passenger);
								history.goBack();
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
						<IonIcon color='medium' icon='text-outline' slot='start' />
						<IonLabel position='floating'>Nombre</IonLabel>
						<IonInput
							value={passenger.firstName}
							type='text'
							placeholder='Inserta el nombre'
							onIonChange={(e) =>
								setPassenger({ ...passenger, firstName: e.detail.value! })
							}></IonInput>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='text-outline' slot='start' />
						<IonLabel position='floating'>Apellido</IonLabel>
						<IonInput
							value={passenger.lastName}
							type='text'
							placeholder='Inserta el apellido'
              onIonChange={(e) =>
								setPassenger({ ...passenger, lastName: e.detail.value! })
							}></IonInput>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='male-female-outline' slot='start' />
						<IonLabel>Sexo</IonLabel>
						<IonSelect
							value={passenger.sex}
							placeholder='Selecciona'
							onIonChange={(e) =>
								setPassenger({ ...passenger, sex: e.detail.value })
							}>
							<IonSelectOption value='female'>Femenino</IonSelectOption>
							<IonSelectOption value='male'>Masculino</IonSelectOption>
						</IonSelect>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='calendar-outline' slot='start' />
						<IonLabel>Fecha de nacimiento</IonLabel>
						<IonDatetime
							value={passenger.birthdate}
							displayFormat='MMM DD YYYY'
							placeholder='Selecciona'
							onIonChange={(e) =>
								setPassenger({ ...passenger, birthdate: e.detail.value! })
							}></IonDatetime>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='flame-outline' slot='start' />
						<IonLabel>Estado del pasajero</IonLabel>
						<IonSelect
							value={passenger.status}
							placeholder='Selecciona'
							onIonChange={(e) =>
								setPassenger({ ...passenger, status: e.detail.value })
							}>
							<IonSelectOption value='Sin heridas'>Sin heridas</IonSelectOption>
							<IonSelectOption value='Con heridas'>Con heridas</IonSelectOption>
							<IonSelectOption value='Muerto'>Muerto</IonSelectOption>
						</IonSelect>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='id-card-outline' slot='start' />
						<IonLabel position='floating'>Cedula</IonLabel>
						<IonInput
							value={passenger.idcard}
							type='text'
							placeholder='Inserta la cedula'
              onIonChange={(e) =>
								setPassenger({ ...passenger, idcard: e.detail.value! })
							}></IonInput>
					</IonItem>
					<IonItem>
						<IonButtons slot='start'>
            <IonButton color='danger' onClick={()=>{
								preset({
									header: "Reiniciar",
									message: "Estas seguro?",
									buttons: [
										'Cancelar',
										{ text: 'Ok', handler: (d) => setPassenger(new Passenger()) },
									],
									onDidDismiss: (e) => console.log('did dismiss'),
								})
							}}>Reiniciar</IonButton>
						</IonButtons>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default PassengersForm;
