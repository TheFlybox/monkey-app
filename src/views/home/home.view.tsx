import React from 'react';
import {
	IonPage,
	IonToolbar,
	IonButtons,
	IonButton,
	IonTitle,
	IonHeader,
	IonBackButton,
	IonContent,
	IonIcon,
} from '@ionic/react';
import { menuItems } from 'constants/strings';

export default function Home() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonButtons className='grid'>
					{menuItems.map((x, i) => {
						return (
							<IonButton className='grid-item' key={i} routerLink={x.url}>
								<div>
									<IonIcon color='primary' icon={x.icon}></IonIcon>
									<span>{x.text}</span>
								</div>
							</IonButton>
						);
					})}
				</IonButtons>
			</IonContent>
		</IonPage>
	);
}
