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
import driver from 'models/driver.model';
import AccidentFormContext from 'contexts/accident-form.context';
import Driver from 'models/driver.model';

const DriversForm = () => {
  const context = useContext(AccidentFormContext);
	const [driver, setDriver] = useState(context.vehicle.driver);
	const history = useHistory();
  const [preset] = useIonAlert();

	useEffect(() => {
		console.log(driver);
	}, [driver]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color='light'>
					<IonButtons slot='start'>
						<IonBackButton
							defaultHref={routes.default}
							icon='close-outline'></IonBackButton>
					</IonButtons>
					<IonTitle>Conductor del vehiculo</IonTitle>
					<IonButtons slot='end'>
						<IonButton
							color='primary'
							onClick={() => {
								let temp = {...context.vehicle};
                temp.driver = driver;
                context.setVehicle(temp);
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
							value={driver.firstName}
							type='text'
							placeholder='Inserta el nombre'
							onIonChange={(e) =>
								setDriver({ ...driver, firstName: e.detail.value! })
							}></IonInput>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='text-outline' slot='start' />
						<IonLabel position='floating'>Apellido</IonLabel>
						<IonInput
							value={driver.lastName}
							type='text'
							placeholder='Inserta el apellido'
              onIonChange={(e) =>
								setDriver({ ...driver, lastName: e.detail.value! })
							}></IonInput>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='male-female-outline' slot='start' />
						<IonLabel>Sexo</IonLabel>
						<IonSelect
							value={driver.sex}
							placeholder='Selecciona'
							onIonChange={(e) =>
								setDriver({ ...driver, sex: e.detail.value })
							}>
							<IonSelectOption value='female'>Femenino</IonSelectOption>
							<IonSelectOption value='male'>Masculino</IonSelectOption>
						</IonSelect>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='calendar-outline' slot='start' />
						<IonLabel>Fecha de nacimiento</IonLabel>
						<IonDatetime
							value={driver.birthdate}
							displayFormat='MMM DD YYYY'
							placeholder='Selecciona'
							onIonChange={(e) =>
								setDriver({ ...driver, birthdate: e.detail.value! })
							}></IonDatetime>
					</IonItem>
					<IonItem>
						<IonIcon color='medium' icon='flame-outline' slot='start' />
						<IonLabel>Estado del conductor</IonLabel>
						<IonSelect
							value={driver.status}
							placeholder='Selecciona'
							onIonChange={(e) =>
								setDriver({ ...driver, status: e.detail.value })
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
							value={driver.idcard}
							type='text'
							placeholder='Inserta la cedula'
              onIonChange={(e) =>
								setDriver({ ...driver, idcard: e.detail.value! })
							}></IonInput>
					</IonItem>
          <IonItem>
						<IonIcon color='medium' icon='text-outline' slot='start' />
						<IonLabel position='floating'>Licencia de conducir</IonLabel>
						<IonInput
							value={driver.driverLicense}
							type='text'
							placeholder='Inserta el nombre'
							onIonChange={(e) =>
								setDriver({ ...driver, driverLicense: e.detail.value! })
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
										{ text: 'Ok', handler: (d) => setDriver(new Driver()) },
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

export default DriversForm;
