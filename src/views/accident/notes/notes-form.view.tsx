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

export default function NotesForm() {
	const context = useContext(AccidentFormContext);
	const [preset] = useIonAlert();
	const [notes, setNotes] = useState(context.accident.notes);
	const history = useHistory();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color='light'>
					<IonButtons slot='start'>
						<IonBackButton defaultHref={routes.default}></IonBackButton>
					</IonButtons>
					<IonTitle>Notas</IonTitle>
					<IonButtons slot='end'>
						<IonButton
							color='primary'
							onClick={() => {
								let temp = context.accident;
								temp.notes = notes;
								context.setAccident(temp);
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
						<IonLabel position='stacked'>Notas del accidente</IonLabel>
						<IonTextarea
							placeholder="Inserta las notas del accidente"
							rows={5}
							value={notes}
							onIonChange={(e) => setNotes(e.detail.value!)}></IonTextarea>
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
											{ text: 'Ok', handler: (d) => setNotes('') },
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
