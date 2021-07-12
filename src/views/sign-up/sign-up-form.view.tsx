import React, { useRef } from 'react';
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
	IonSlides,
	IonSlide,
	useIonLoading,
	IonListHeader,
	IonDatetime,
	IonSelect,
	IonSelectOption,
	IonGrid,
	IonRow,
	IonCol,
} from '@ionic/react';
import routes from 'constants/routes';

export default function SignUpForm() {
	const slideOpts = {
		initialSlide: 1,
		speed: 400,
	};
	const [present] = useIonLoading();
	const slideRef = useRef<HTMLIonSlidesElement>();

	return (
		<IonPage>
			<IonContent color='light'>
				<IonSlides pager={true} options={slideOpts} ref={slideRef as any}>
					<IonSlide>
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
										Registro de nuevos usuarios
									</h4>
								</div>
							</div>
							<div className='ion-padding'>
								<IonItem className='shadow'>
									<IonIcon icon='card-outline' slot='start'></IonIcon>
									<IonLabel position='floating'>Ingresa tu cedula</IonLabel>
									<IonInput type='text' placeholder='123-456789-2'></IonInput>
								</IonItem>
							</div>
							<div className='ion-padding'>
								<IonButton
									color='primary'
									expand='block'
									fill='solid'
									size='large'
									onClick={() => {
										present({
											duration: 3000,
											message: 'Cargando...',
											spinner: 'circular',
											onDidDismiss: () => slideRef!.current!.slideNext(),
										});
									}}>
									Siguiente
									<IonIcon
										size='small'
										icon='chevron-forward-outline'
										slot='end'></IonIcon>
								</IonButton>
								<br />
								<br />
								<div className='ion-text-center ion-padding-bottom'>
									<span>¿Ya tienes una cuenta?</span>
								</div>
								<IonButton
									routerLink={routes.login.form}
									color='primary'
									expand='block'
									fill='outline'
									size='large'>
									Inicia sesion
								</IonButton>
							</div>
						</div>
					</IonSlide>
					<IonSlide>
						<div className='content'>
							<div className='ion-padding'>
								<IonListHeader color='medium'>
									Informacion de usuario
								</IonListHeader>
								<br />
								<IonItem className='shadow'>
									<IonIcon icon='text-outline' slot='start'></IonIcon>
									<IonLabel position='floating'>Nombre</IonLabel>
									<IonInput type='text' placeholder='Ej.: John'></IonInput>
								</IonItem>
								<br />
								<IonItem className='shadow'>
									<IonIcon icon='text-outline' slot='start'></IonIcon>
									<IonLabel position='floating'>Apellido</IonLabel>
									<IonInput type='text' placeholder='Ej.: Smith'></IonInput>
								</IonItem>
								<br />
								<IonItem className='shadow'>
									<IonIcon icon='calendar-outline' slot='start'></IonIcon>
									<IonLabel>Fecha de nacimiento</IonLabel>
									<IonDatetime
										displayFormat='MMMM DD YYYY'
										placeholder=''></IonDatetime>
								</IonItem>
								<br />
								<IonItem className='shadow'>
									<IonIcon icon='male-female-outline' slot='start'></IonIcon>
									<IonLabel>Sexo</IonLabel>
									<IonSelect placeholder='Selecciona'>
										<IonSelectOption value='female'>Femenino</IonSelectOption>
										<IonSelectOption value='male'>Masculino</IonSelectOption>
									</IonSelect>
								</IonItem>
								<br />
								<IonListHeader color='medium'>Cuenta</IonListHeader>
								<br />
								<IonItem className='shadow'>
									<IonIcon icon='mail-outline' slot='start'></IonIcon>
									<IonLabel position='floating'>Correo electronico</IonLabel>
									<IonInput
										type='email'
										placeholder='Ej.: test@test.com'></IonInput>
								</IonItem>
								<br />
								<IonItem className='shadow'>
									<IonIcon icon='lock-closed-outline' slot='start'></IonIcon>
									<IonLabel position='floating'>Contraseña</IonLabel>
									<IonInput
										type='password'
										placeholder='Ej.: 12345678'></IonInput>
								</IonItem>
								<br />
								<IonItem className='shadow'>
									<IonIcon icon='lock-closed-outline' slot='start'></IonIcon>
									<IonLabel position='floating'>Confirmar contraseña</IonLabel>
									<IonInput
										type='password'
										placeholder='Ej.: 12345678'></IonInput>
								</IonItem>
							</div>
							<IonGrid>
								<IonRow>
									<IonCol>
										<IonButton
											expand='block'
											fill='outline'
                      size="default"
											onClick={() => {
												slideRef!.current!.slidePrev();
											}}>
											<IonIcon
                        slot="start"
												icon='chevron-back-outline'
												size='small'></IonIcon>
											Atras
										</IonButton>
									</IonCol>
									<IonCol>
										<IonButton expand='block' fill='solid' size="default">
											Finalizar
											<IonIcon
												icon='checkmark-done-outline'
												size='small'
                        slot="end"></IonIcon>
										</IonButton>
									</IonCol>
								</IonRow>
							</IonGrid>
							<br />
						</div>
					</IonSlide>
				</IonSlides>
			</IonContent>
		</IonPage>
	);
}
