import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/react';
import React from 'react';
import { home, stats, flash } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route } from 'react-router-dom';
import Home from './Home';
import '../styles/main.css';

const Main: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path='/main/home' component={Home} exact />
        <Route path='/main/calculate' component={Home} exact />
        <Route path='/main/application' component={Home} exact />
        <Redirect from="/main" to="/main/home" />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/main/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="calculate" href="/main/calculate">
          <IonIcon icon={stats} />
          <IonLabel>Calculate</IonLabel>
        </IonTabButton>
        <IonTabButton tab="application" href="/main/application">
          <IonIcon icon={flash} />
          <IonLabel>Application</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Main;