import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact , 
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs, 
  useIonToast
} from '@ionic/react';

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
import { Splash } from './components/Splash';
import { SignUp } from './components/Signup';
import { SignIn } from './components/Signin';
import { ForgotPassword } from './components/ForgotPassword';
import { PasswordReset } from './components/PasswordReset';

import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, homeOutline, walkOutline, addCircleOutline, heartOutline, personOutline, searchOutline} from 'ionicons/icons';
import Tab2 from './pages/Tab2/Tab2';
import Tab3 from './pages/Tab3/Tab3';
import Tab4 from './pages/Tab4/Tab4';
import Tab5 from './pages/Tab5/Tab5';
import Tab6 from './pages/Tab6/Tab6';
import { useState, useEffect } from 'react';
import { auth } from './config/firebase';
import { useHistory } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Dashboard from './pages/Dashboard';


setupIonicReact();


const App = () => {

  const [user, setUser] = useState(null);
  const [showToast] = useIonToast();

  const history = useHistory();

  onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    setUser(user);
    history.push('/tab2');
  } else {
    history.push('/signIn');
  }
  });

  return(
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/splash">
          <Splash />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn /> 
        </Route>
        <Route exact path="/forgotPassword">
          <ForgotPassword /> 
        </Route>
        <Route exact path="/passwordReset">
          <PasswordReset /> 
        </Route>
        <Route exact path="/">
          <Redirect to="/splash" />
        </Route>

        <IonTabs>
        <IonRouterOutlet>
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} exact={true}/>
          <Route path="/tab4" component={Tab4} exact={false}/>
          <Route path="/tab5" component={Tab5} exact={true}/>
          <Route path="/tab6" component={Tab6} exact={true}/>
          <Route path="/" render={() => <Redirect to="/tab2" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/dashboard">
            <IonIcon icon={walkOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={homeOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={searchOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={addCircleOutline} />
            <IonLabel></IonLabel>
          </IonTabButton> */}
          <IonTabButton tab="tab5" href="/tab5">
            <IonIcon icon={heartOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab6" href="/tab6">
            <IonIcon icon={personOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)};

export default App;
