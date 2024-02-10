import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';


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

/* Theme variables */
import './theme/variables.css';


import Login from './pages/Login/Login';
import Signup from './pages/Inscription/Signup';
import Profile from './pages/Inscription/Profile';
import Page from './pages/Page';
import Menu from './components/Menu';
import New from './pages/Voiture/New';
import Achat from './pages/Voiture/Achat';
import Annonce from './pages/Voiture/Annonce';
import Favorie from './pages/Voiture/Favorie';
import ModificationP from './pages/Profile/ModificationP';
import ModificationA from './pages/Voiture/ModificationA';
import AfficheP from './pages/Profile/AfficheP';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/login" component={Login} exact={true} />
            <Route path="/signup" component={Signup} exact={true} />
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/page" component={Page} exact={true} />
            <Route path="/menu" component={Menu} exact={true} />
            <Route path="/new" component={New} exact={true} />
            <Route path="/annonce" component={Annonce} exact={true} />
            <Route path="/favorie" component={Favorie} exact={true} />
            <Route path="/achat" component={Achat} exact={true} />
            <Route path="/modifiProfile" component={ModificationP} exact={true} />
            <Route path="/modifiAnnonce" component={ModificationA} exact={true} />
            <Route path="/afficheP" component={AfficheP} exact={true} />

            <Route path="/" exact={true}>
                <Redirect to="/login" />
            </Route>
            <Route path="/affciheP" exact={true}>
                <Redirect to="/afficheP" />
            </Route>
            
            
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
