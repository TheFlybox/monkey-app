import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Routes
import routes from 'constants/routes';

// Styles
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import 'assets/global.css';

// Views
import Home from 'views/home/home.view';
import AccidentCreate from 'views/accident/accident-create.view';
import AccidentEdit from 'views/accident/accident-edit.view';
import VehicleList from 'views/accident/vehicles/vehicles-list.view';
import VehiclesCreate from 'views/accident/vehicles/vehicles-create.view';
import VehiclesEdit from 'views/accident/vehicles/vehicles-edit.view';
import PassengersList from 'views/accident/vehicles/passengers/passengers-list.view';
import PassengersCreate from 'views/accident/vehicles/passengers/passengers-create.view';
import PassengersEdit from 'views/accident/vehicles/passengers/passengers-edit.view';
import NotesForm from 'views/accident/notes/notes-form.view';
import DriversForm from 'views/accident/vehicles/driver/driver-form.view';

// Containers
import AccidentFormContainer from 'containers/accident-form.container';

function Main() {
	return (
		<AccidentFormContainer>
			<IonApp>
				<IonReactRouter>
					<IonRouterOutlet>
						<Route path={routes.home} component={Home} exact={true} />
						<Route
							path={routes.accident.create}
							component={AccidentCreate}
							exact={true}
						/>
						<Route
							path={routes.accident.edit}
							component={AccidentEdit}
							exact={true}
						/>
						<Route
							path={routes.accident.vehicles.list}
							component={VehicleList}
							exact={true}
						/>
						<Route
							path={routes.accident.vehicles.create}
							component={VehiclesCreate}
							exact={true}
						/>
						<Route
							path={routes.accident.vehicles.edit}
							component={VehiclesEdit}
							exact={true}
						/>
						<Route
							path={routes.accident.vehicles.passengers.list}
							component={PassengersList}
							exact={true}
						/>
						<Route
							path={routes.accident.vehicles.passengers.create}
							component={PassengersCreate}
							exact={true}
						/>
						<Route
							path={routes.accident.vehicles.passengers.edit}
							component={PassengersEdit}
							exact={true}
						/>
						<Route
							path={routes.accident.notes.form}
							component={NotesForm}
							exact={true}
						/>
						<Route
							path={routes.accident.vehicles.driver.form}
							component={DriversForm}
							exact={true}
						/>

						<Redirect exact from={routes.default} to={routes.home} />
					</IonRouterOutlet>
				</IonReactRouter>
			</IonApp>
		</AccidentFormContainer>
	);
}

ReactDOM.render(<Main />, document.querySelector('#root'));
