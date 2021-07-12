import React from 'react';
import {
	IonPage,
	IonContent,
	IonItem,
	IonInput,
	IonIcon,
	IonButton,
	useIonLoading,
	IonLabel,
	IonRouterLink
} from '@ionic/react';
import { useHistory } from 'react-router';

export default function ForgotPasswordForm() {
	const [present] = useIonLoading();
	const history = useHistory();

	return (
		<IonPage>
			<IonContent color='light'>
				<div className='content'>
					<img
						src='https://www.graphicsprings.com/filestorage/stencils/e53f8b7990e2dbdb16d6998b225cfcc7.png?width=500&height=500'
						alt=''
						style={{
							width: 200,
							height: 200,
							margin: '0 auto',
							display: 'block',
							objectFit: 'cover',
						}}
					/>
					<div className='ion-text-left ion-padding'>
						<div className='ion-text-center'>
							<h1 style={{ fontSize: 32, fontWeight: 700 }}>SISTRANT</h1>
							<h4 style={{ fontSize: 18, fontWeight: 400, color: '#888' }}>
								Asistente contraseña olvidada
							</h4>
						</div>
					</div>
					<div className='ion-padding'>
						<IonItem className='shadow'>
							<IonIcon icon='mail-outline' slot='start'></IonIcon>
							<IonLabel position='floating'>
								Ingresa tu correo electronico
							</IonLabel>
							<IonInput type='text' placeholder='123-456789-2'></IonInput>
						</IonItem>
					</div>
					<div className='ion-padding'>
						<IonButton color='primary' expand='block' fill='solid' size='large'>
							Siguiente
							<IonIcon
								size='small'
								icon='chevron-forward-outline'
								slot='end'></IonIcon>
						</IonButton>
						<br />
						<IonButton
							color='primary'
							expand='block'
							fill='outline'
							size='large'
							onClick={()=>{
								history.goBack()
							}}>
							Volver
							<IonIcon
								size='small'
								icon='chevron-back-outline'
								slot='start'></IonIcon>
						</IonButton>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
}
