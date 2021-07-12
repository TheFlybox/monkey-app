import React from 'react';
import {
	IonPage,
	IonContent,
	IonList,
	IonItem,
	IonInput,
	IonIcon,
	IonText,
	IonLabel,
	IonButton,
	IonRouterLink
} from '@ionic/react';
import routes from 'constants/routes';

export default function LoginForm() {
	return (
		<IonPage>
			<IonContent color='light' className='login-content'>
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
						<h1 style={{ fontSize: 32, fontWeight: 700}}>
							SISTRANT
						</h1>
						<h4 style={{ fontSize: 18, fontWeight: 400, color: '#888' }}>
							Para comenzar por favor iniciar sesion
						</h4>
					</div>
				</div>
				<div className='ion-padding'>
					<IonItem className='shadow'>
						<IonIcon icon='mail-outline' slot='start'></IonIcon>
						<IonLabel position='floating'>Correo electronico</IonLabel>
						<IonInput type='text' placeholder='test@test.com'></IonInput>
					</IonItem>
					<IonItem className='shadow'>
						<IonIcon icon='lock-closed-outline' slot='start'></IonIcon>
						<IonLabel position='floating'>Contraseña</IonLabel>
						<IonInput type='password' placeholder='••••••••'></IonInput>
					</IonItem>
					<div className='ion-padding-top'>
						<IonRouterLink routerLink={routes.forgotPassword.form}>
							¿Has olvidado tu contraseña?
						</IonRouterLink>
					</div>
				</div>
				<div className='ion-padding'>
					<IonButton color='primary' expand='block' fill='solid' size='large'>
						Iniciar sesion
					</IonButton>
					<br />
					<br />
					<div className='ion-text-center ion-padding-bottom'>
						<span>¿No tienes una cuenta?</span>
					</div>
					<IonButton routerLink={routes.signUp.form} color='primary' expand='block' fill='outline' size='large'>
						Registrate
					</IonButton>
				</div>
			</IonContent>
		</IonPage>
	);
}
