import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Tab1: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                TAB 1
            </IonContent>
        </IonPage>
    );
};

export default Tab1;