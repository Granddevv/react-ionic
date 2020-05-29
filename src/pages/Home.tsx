import {
  IonContent,
  IonPage,
  IonMenu,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonMenuButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import React, { useState } from 'react';
import { home, settings, calculator, document, folder, clipboard, arrowForward } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import { CircleItem } from '../components/CircleItem/CircleItem';
import axios from 'axios';
import '../styles/home.scss';

const Home: React.FC<RouteComponentProps> = (props) => {

  const [name, setName] = useState('')
  const [nmls, setNmls] = useState('')
  const [photo, setPhoto] = useState('')
  const [loading, setLoading] = useState(true)

  axios.get('https://lhp-forms.lenderhomepage.com/api/code-challenge/loan-officers/1')
    .then(function (response) {
      // handle success
      const { data } = response
      setName(`${data.firstname} ${data.lastname}`)
      setNmls(data.nmls)
      setPhoto(data.avatar_url)
      setLoading(false)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setLoading(false)
    })


  return (
    <IonPage>
      <IonMenu side="start" content-id="main-content" class="home-menu">
        <IonHeader>
          <IonToolbar >
            <IonTitle class="ion-text-center">Navigation</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="home-menu-content">
          <div className="menu-container">
            <IonList>
              <IonItem>
                <IonIcon icon={home} class="ion-margin-end"></IonIcon>
                <IonLabel>My Loan Status</IonLabel>
                <IonIcon slot="end" icon={arrowForward}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={clipboard} class="ion-margin-end"></IonIcon>
                <IonLabel>Loan Application</IonLabel>
                <IonIcon slot="end" icon={arrowForward}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={document} class="ion-margin-end"></IonIcon>
                <IonLabel>Documents</IonLabel>
                <IonIcon slot="end" icon={arrowForward}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={home} class="ion-margin-end"></IonIcon>
                <IonLabel>Messages</IonLabel>
                <IonIcon slot="end" icon={arrowForward}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={home} class="ion-margin-end"></IonIcon>
                <IonLabel>Mortgage Tools</IonLabel>
                <IonIcon slot="end" icon={arrowForward}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={calculator} class="ion-margin-end"></IonIcon>
                <IonLabel>Calculators</IonLabel>
                <IonIcon slot="end" icon={arrowForward}></IonIcon>
              </IonItem>
              <IonItem>
                <IonIcon icon={home} class="ion-margin-end"></IonIcon>
                <IonLabel>My Loan Team</IonLabel>
                <IonIcon slot="end" icon={arrowForward}></IonIcon>
              </IonItem>
            </IonList>
          </div>
        </IonContent>
      </IonMenu>

      <div className="home-page" id="main-content">
        <IonHeader>
          <div className="home-page-header">
            <IonButton slot="start" class="home-page-header-menu">
              <IonMenuButton></IonMenuButton>
            </IonButton>
            <IonImg src="assets/images/logo-home.png" class="ion-text-center" />
            <IonIcon icon={settings} class="home-page-header-setting"></IonIcon>
          </div>
        </IonHeader>
        {loading && <span>Loading</span>}
        {!loading &&
          <>
            <div className="home-page-container">
              <span className="user-name">{name}</span>
              <span className="user-id">{`NMLS: #${nmls}`}</span>
              <div className="user-img">
                <IonImg src={photo} />
              </div>
            </div>
            <div className="home-page-circle">
              <IonGrid>
                <IonRow>
                  <IonCol size="3">
                    <CircleItem icon={calculator} size="sm" />
                  </IonCol>
                  <IonCol size="3" offset="6">
                    <CircleItem icon={calculator} size="sm" />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <CircleItem icon={calculator} size="md" />
                  </IonCol>
                  <IonCol>
                    <CircleItem icon={folder} size="md" />
                  </IonCol>
                </IonRow>
                <IonRow class="home-page-circle-big">
                  <IonCol>
                    <CircleItem icon={clipboard} size="lg" />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
            <div className="home-page-step">
              <span className="home-page-step-title">Next Step:</span>
              <div className="step-img">
                <IonImg src="assets/images/img-step.png" />
              </div>
              <span className="home-page-step-desc">Upload Documents</span>
            </div>
          </>
        }
      </div>
    </IonPage>
  );
};

export default Home;