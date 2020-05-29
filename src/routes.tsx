import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Main from './pages/Main';
import Login from './pages/Login';

const Routes: React.FC = () => {
  return (
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/main" component={Main} exact={true} />
          <Route path="/main/:id" component={Main} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
        </IonRouterOutlet>
      </IonReactRouter>
  );
};

export default Routes;