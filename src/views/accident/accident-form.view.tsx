import React, { useState } from 'react';
import {
	IonPage,
	IonToolbar,
	IonTitle,
	IonBackButton,
	IonButtons,
	IonHeader,
	IonContent,
	IonList,
	IonItem,
	IonLabel,
	IonText,
	IonToggle,
	IonIcon,
	IonListHeader,
	IonSelect,
	IonSelectOption,
	IonChip,
	IonButton,
	useIonAlert,
	useIonViewDidLeave
} from '@ionic/react';
import routes from 'constants/routes';
import Accident from 'models/accident.model';
import { useEffect, useContext } from 'react';
import AccidentFormContext from 'contexts/accident-form.context';
import { useHistory } from 'react-router';
import DigitalClock from 'components/digital-clock/digital-clock.component';

export interface AccidentFormProps {
	title: string;
	accident: Accident;
}

export default function AccidentForm(props: AccidentFormProps) {
	const [accident, setAccident] = useState(props.accident);
	const [preset] = useIonAlert();
	const context = useContext(AccidentFormContext);
	const history = useHistory();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color='light'>
					<IonButtons slot='start'>
						<IonButton onClick={()=> {
							preset({
								header: "Volver atras",
								message: "Estas seguro?",
								buttons: [
									'Cancelar',
									{ text: 'Ok', handler: (d) => history.goBack() },
								],
								onDidDismiss: (e) => console.log('did dismiss'),
							})
						}}>
							<IonIcon slot="icon-only" style={{fontSize: "24px"}} icon="arrow-back"></IonIcon>
						</IonButton>
					</IonButtons>
					<IonTitle>{props.title}</IonTitle>
					<IonButtons slot='end'>
						<IonButton color='primary' onClick={()=> {
							context.setAccident(accident);
						}}>
							Listo
							<IonIcon slot='start' icon='checkmark-done-outline'></IonIcon>
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList lines='full'>
					{/* Time field */}
					<IonItem>
						<IonIcon slot='start' icon='time-outline'></IonIcon>
						<IonLabel slot='start'>Hora</IonLabel>
						<IonText color='medium' slot='end'>
							<DigitalClock />
						</IonText>
					</IonItem>

					{/* Date field */}
					<IonItem>
						<IonIcon slot='start' icon='calendar-outline'></IonIcon>
						<IonLabel slot='start'>Fecha</IonLabel>
						<IonText color='medium' slot='end'>
							{new Date().toLocaleDateString()}
						</IonText>
					</IonItem>

					<IonListHeader color='light'>Basico</IonListHeader>

					{/* Find my location field */}
					<IonItem>
						<IonText slot='start'>Encontrar mi ubicacion?</IonText>
						<IonToggle slot='end' checked={false}></IonToggle>
					</IonItem>

					{/* Location field */}
					<IonItem button>
						<IonIcon slot='start' icon='location-outline'></IonIcon>
						<IonLabel slot='start'>
							<div>
								<span>Ubicacion</span>
								<br />
								<small style={{ color: '#aaa' }}>Vacio</small>
							</div>
						</IonLabel>
						<IonIcon
							slot='end'
							icon='chevron-forward-outline'
							color='medium'></IonIcon>
					</IonItem>

					{/* Accident type field */}
					<IonItem>
						<IonIcon slot='start' icon='grid-outline'></IonIcon>
						<IonLabel>Tipo de accidente</IonLabel>
						<IonSelect placeholder='Selecciona'>
							<IonSelectOption value='Choque'>Choque</IonSelectOption>
							<IonSelectOption value='Atropello'>Atropello</IonSelectOption>
							<IonSelectOption value='Caida de ocupante'>Caida de ocupante</IonSelectOption>
							<IonSelectOption value='Volcamiento'>Volcamiento</IonSelectOption>
							<IonSelectOption value='Incendio'>Incendio</IonSelectOption>
							<IonSelectOption value='Otros'>Otros</IonSelectOption>
						</IonSelect>
					</IonItem>

					{/* Notes field */}
					<IonItem button routerLink={routes.accident.notes.form}>
						<IonIcon slot='start' icon='text-outline'></IonIcon>
						<IonLabel slot='start'>
							<div>
								<span>Notas</span>
								<br />
								<small style={{ color: '#aaa' }}>
									<IonLabel style={{padding: "0.32rem 0rem 0.2rem"}}>
										{accident.notes || 'Vacio'}
									</IonLabel>
								</small>
							</div>
						</IonLabel>
						<IonIcon
							slot='end'
							icon='chevron-forward-outline'
							color='medium'></IonIcon>
					</IonItem>

					{/* Severity Scale field */}
					<IonItem>
						<IonIcon slot='start' icon='flame-outline'></IonIcon>
						<IonLabel>Escala de gravedad</IonLabel>
						<IonSelect placeholder='Selecciona'>
							<IonSelectOption value='Solo daños materiales'>Solo daños materiales</IonSelectOption>
							<IonSelectOption value='Con heridos'>Con heridos</IonSelectOption>
							<IonSelectOption value='Con muertos'>Con muertos</IonSelectOption>
						</IonSelect>
					</IonItem>

					<IonListHeader color='light'>Involucrados</IonListHeader>

					{/* Police field */}
					<IonItem>
						<IonIcon slot='start' icon='shield-half-outline'></IonIcon>
						<IonLabel slot='start'>Policia</IonLabel>
						<IonToggle slot='end' checked={accident.involve_police} onIonChange={(e)=> {
							setAccident({...accident, involve_police: e.detail.checked})
						}}></IonToggle>
					</IonItem>

					{/* 911 field */}
					<IonItem>
						<IonIcon slot='start' icon='medkit-outline'></IonIcon>
						<IonLabel slot='start'>911</IonLabel>
						<IonToggle slot='end' checked={accident.involve_911} onIonChange={(e)=> {
							setAccident({...accident, involve_911: e.detail.checked})
						}}></IonToggle>
					</IonItem>

					{/* MOPC field */}
					<IonItem>
						<IonIcon slot='start' icon='construct-outline'></IonIcon>
						<IonLabel slot='start'>MOPC</IonLabel>
						<IonToggle slot='end' checked={accident.involve_mopc} onIonChange={(e)=> {
							setAccident({...accident, involve_mopc: e.detail.checked})
						}}></IonToggle>
					</IonItem>

					<IonListHeader color='light'>Colecciones</IonListHeader>

					{/* Vehicles field */}
					<IonItem button routerLink={routes.accident.vehicles.list}>
						<IonIcon slot='start' icon='car-outline'></IonIcon>
						<IonLabel slot='start'>Vehiculos</IonLabel>
						<IonChip color='primary' slot='end'>
							{context.accident.vehicles.length}
						</IonChip>
						<IonIcon
							slot='end'
							icon='chevron-forward-outline'
							color='medium'></IonIcon>
					</IonItem>

					{/* Photos field */}
					<IonItem button>
						<IonIcon slot='start' icon='images-outline'></IonIcon>
						<IonLabel slot='start'>Fotos</IonLabel>
						<IonChip color='primary' slot='end'>
							{context.accident.photos.length}
						</IonChip>
						<IonIcon
							slot='end'
							icon='chevron-forward-outline'
							color='medium'></IonIcon>
					</IonItem>

					{/* Actions field */}
					<IonItem>
						<IonButtons>
							<IonButton color='danger' onClick={()=>{
								preset({
									header: "Reiniciar",
									message: "Estas seguro?",
									buttons: [
										'Cancelar',
										{ text: 'Ok', handler: (d) => setAccident(new Accident()) },
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
}
