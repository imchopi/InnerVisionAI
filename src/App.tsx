
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonHeader, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Model from "./pages/Model";
import AboutUs from './pages/AboutUs';
import Chatbot from './pages/Chatbot';
import Navbar from "./components/Navbar";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import React from "react";
import Footer from './components/Footer';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* Navbar global */}
      <IonHeader>
        <Navbar />
      </IonHeader>

      <IonRouterOutlet>
        {/* Define las rutas */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/model" component={Model} />
        <Route exact path="/chatbot" component={Chatbot} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Redirect exact from="/" to="/home" />
      </IonRouterOutlet>
      <Footer />
    </IonReactRouter>
  </IonApp>
);

export default App;
