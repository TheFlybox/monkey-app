import React from 'react';
import {
	IonPage,
	IonContent,
	IonToolbar,
	IonTitle,
	IonBackButton,
	IonHeader,
	IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';
import EmptyList from 'components/empty-list/empty-list.component';

export default function VehicleList() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/'></IonBackButton>
					</IonButtons>
					<IonTitle>Lista de vehiculos</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon color="primary" size="large" icon="add-outline"></IonIcon>
            </IonButton>
          </IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<EmptyList />
			</IonContent>
		</IonPage>
	);
}
