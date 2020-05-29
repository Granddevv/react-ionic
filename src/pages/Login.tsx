import React from 'react';
import {
    IonContent,
    IonPage,
    IonImg,
    IonText,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import '../styles/login.css';

const Login: React.FC<RouteComponentProps> = (props) => {
    return (
        <IonPage>
            <IonContent class="login-header">
                <IonImg src="assets/images/logo.png" class="ion-padding" />
                <IonText color="warning" class="ion-text-center">
                    <h1 className="login-header-hello">Hello!</h1>
                </IonText>
                <IonText color="dark" class="ion-text-center">
                    <h1 className="login-header-desc">Let's login and review your loan info...</h1>
                </IonText>
            </IonContent>
            <IonContent class="login-container">
                <form className="login-form">
                    <div className="login-form-item">
                        <IonLabel class="login-form-item-label ion-text-wrap">Email</IonLabel>
                        <IonInput class="login-form-item-input" type="text" name="title" placeholder="Enter Your Email"></IonInput>
                    </div>
                    <div className="login-form-item">
                        <IonLabel class="login-form-item-label">Password</IonLabel>
                        <IonInput class="login-form-item-input" type="password" name="description" placeholder="Enter Your Password"></IonInput>
                    </div>
                    <IonButton class="login-form-button" onClick={() => props.history.push('/main/home')}>
                        <span>Login</span>
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Login;
