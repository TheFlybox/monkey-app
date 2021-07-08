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
import { useEffect, useContext } from 'react';
import AccidentFormContext from 'contexts/accident-form.context';
import Accident from 'models/accident.model';

export default function Home() {

	const context = useContext(AccidentFormContext);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color="light">
					<IonTitle>Inicio</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonButtons className='grid'>
					{menuItems.map((x, i) => {
						return (
							<IonButton className='grid-item' key={i} routerLink={x.url} onClick={()=>{
								if(x.text === "Publicar"){
									context.setAccident(new Accident())
								}
							}}>
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
