import React from 'react';
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
} from '@ionic/react';
import routes from 'constants/routes';

export default function AccidentForm() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color='light'>
					<IonButtons slot='start'>
						<IonBackButton defaultHref={routes.default}></IonBackButton>
					</IonButtons>
					<IonTitle>Reportar accidente</IonTitle>
					<IonButtons slot='end'>
						<IonButton color='primary'>
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
            <IonIcon slot="start" icon="time-outline"></IonIcon>
						<IonLabel slot='start'>Hora</IonLabel>
						<IonText color="medium" slot='end'>{new Date().toLocaleTimeString()}</IonText>
					</IonItem>

					{/* Date field */}
					<IonItem>
            <IonIcon slot="start" icon="calendar-outline"></IonIcon>
						<IonLabel slot='start'>Fecha</IonLabel>
						<IonText color="medium" slot='end'>{new Date().toLocaleDateString()}</IonText>
					</IonItem>

					<IonListHeader color='light'>Basico</IonListHeader>

					{/* Find my location field */}
					<IonItem>
						<IonText slot='start'>Encontrar mi ubicacion?</IonText>
						<IonToggle slot='end' checked={false}></IonToggle>
					</IonItem>

					{/* Location field */}
					<IonItem button>
            <IonIcon slot="start" icon="location-outline"></IonIcon>
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
          <IonIcon slot="start" icon="grid-outline"></IonIcon>
						<IonLabel>Tipo de accidente</IonLabel>
						<IonSelect placeholder='Selecciona'>
							<IonSelectOption value='female'>Female</IonSelectOption>
							<IonSelectOption value='male'>Male</IonSelectOption>
						</IonSelect>
					</IonItem>

					{/* Notes field */}
					<IonItem button>
            <IonIcon slot="start" icon="text-outline"></IonIcon>
						<IonLabel slot='start'>
							<div>
								<span>Notas</span>
								<br />
								<small style={{ color: '#aaa' }}>Vacio</small>
							</div>
						</IonLabel>
						<IonIcon
							slot='end'
							icon='chevron-forward-outline'
							color='medium'></IonIcon>
					</IonItem>

					{/* Severity Scale field */}
					<IonItem>
          <IonIcon slot="start" icon="flame-outline"></IonIcon>
						<IonLabel>Escala de gravedad</IonLabel>
						<IonSelect placeholder='Selecciona'>
							<IonSelectOption value='female'>Female</IonSelectOption>
							<IonSelectOption value='male'>Male</IonSelectOption>
						</IonSelect>
					</IonItem>

					<IonListHeader color='light'>Involucrados</IonListHeader>

					{/* Police field */}
					<IonItem>
          <IonIcon slot="start" icon="shield-half-outline"></IonIcon>
						<IonLabel slot='start'>Policia</IonLabel>
						<IonToggle slot='end' checked={true}></IonToggle>
					</IonItem>

					{/* 911 field */}
					<IonItem>
            <IonIcon slot="start" icon="medkit-outline"></IonIcon>
						<IonLabel slot='start'>911</IonLabel>
						<IonToggle slot='end' checked={true}></IonToggle>
					</IonItem>

					{/* MOPC field */}
					<IonItem>
          <IonIcon slot="start" icon="construct-outline"></IonIcon>
						<IonLabel slot='start'>MOPC</IonLabel>
						<IonToggle slot='end' checked={true}></IonToggle>
					</IonItem>

					<IonListHeader color='light'>Colecciones</IonListHeader>

					{/* Vehicles field */}
					<IonItem button routerLink={routes.accident.vehicles.list}>
          <IonIcon slot="start" icon="car-outline"></IonIcon>
						<IonLabel slot='start'>Vehiculos</IonLabel>
						<IonChip color='primary' slot='end'>
							0
						</IonChip>
						<IonIcon
							slot='end'
							icon='chevron-forward-outline'
							color='medium'></IonIcon>
					</IonItem>

					{/* Photos field */}
					<IonItem button>
          <IonIcon slot="start" icon="images-outline"></IonIcon>
						<IonLabel slot='start'>Fotos</IonLabel>
						<IonChip color='primary' slot='end'>
							0
						</IonChip>
						<IonIcon
							slot='end'
							icon='chevron-forward-outline'
							color='medium'></IonIcon>
					</IonItem>

					{/* Actions field */}
					<IonItem>
						<IonButtons>
							<IonButton color='danger'>Reiniciar</IonButton>
						</IonButtons>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	);
}
