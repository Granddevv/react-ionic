import React from 'react';
import { IonContent, IonIcon } from '@ionic/react';
import './style.scss';

type Props = {
  icon: Object,
  size: String,
};

export const CircleItem: React.FC<Props> = ({ icon, size }) => (
  <>
    <div className={`circle-item ${size}`}>
      <IonIcon icon={icon} />
    </div>
  </>
);