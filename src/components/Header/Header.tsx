import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import './Header.css';

interface HeaderProps{
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) =>{
    return(
        <IonHeader>
            <IonToolbar>
            <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;