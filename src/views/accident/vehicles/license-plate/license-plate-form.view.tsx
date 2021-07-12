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
	useIonAlert,
	IonTextarea,
} from '@ionic/react';
import routes from 'constants/routes';
import AccidentFormContext from 'contexts/accident-form.context';
import { useHistory } from 'react-router';

export default function LicensePlateForm() {
	const context = useContext(AccidentFormContext);
	const [preset] = useIonAlert();
	const [license, setLicense] = useState(context.vehicle.licensePlate);
	const history = useHistory();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color='light'>
					<IonButtons slot='start'>
						<IonBackButton defaultHref={routes.default}></IonBackButton>
					</IonButtons>
					<IonTitle>Matricula</IonTitle>
					<IonButtons slot='end'>
						<IonButton
							color='primary'
							onClick={() => {
								let temp = context.vehicle;
								temp.licensePlate = license;
								context.setVehicle(temp);
								history.goBack();
							}}>
							Listo
							<IonIcon
								slot='start'
								icon='checkmark-done'></IonIcon>
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList lines='full'>
					<IonItem>
						<IonLabel position='stacked'>Matricula del accidente</IonLabel>
						<IonTextarea
							placeholder="Inserta la matricula del vehiculo"
							rows={5}
							value={license}
							onIonChange={(e) => setLicense(e.detail.value!)}></IonTextarea>
					</IonItem>
					<IonItem>
						<IonButtons>
							<IonButton
								color='danger'
								onClick={() => {
									preset({
										header: 'Limpiar',
										message: 'Estas seguro?',
										buttons: [
											'Cancelar',
											{ text: 'Ok', handler: (d) => setLicense('') },
										],
										onDidDismiss: (e) => console.log('did dismiss'),
									});
								}}>
								Limpiar
							</IonButton>
						</IonButtons>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	);
}
