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
import AccidentForm from 'views/accident/accident-form.view';
import VehicleList from 'views/accident/vehicles/vehicles-list.view';

function Main() {
	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path={routes.home} component={Home} exact={true} />
					<Route path={routes.accident.create} component={AccidentForm} exact={true} />
					<Route path={routes.accident.vehicles.list} component={VehicleList} exact={true} />
					<Redirect exact from={routes.default} to={routes.home} />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
}

ReactDOM.render(<Main />, document.querySelector('#root'));
