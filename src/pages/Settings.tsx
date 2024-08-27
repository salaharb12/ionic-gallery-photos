import { IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import { atCircleOutline, triangle } from 'ionicons/icons';

const Settings: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonTabs>
                <IonTabBar slot='bottom'>
                    <IonTabButton tab='tab1' href='/app/settings/tab1'>
                        <IonIcon icon={atCircleOutline} />
                        <IonLabel>Tab 1</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab='tab2' href='/app/settings/tab2'>
                        <IonIcon icon={triangle} />
                        <IonLabel>Tab 2</IonLabel>
                    </IonTabButton>
                </IonTabBar>
                <IonRouterOutlet>
                    <Route path='/app/settings/tab1' component={Tab1} />
                    <Route path='/app/settings/tab2' component={Tab2} />
                    <Route exact path='/app/settings'>
                        <Redirect to='/app/settings/tab1' />
                    </Route>
                </IonRouterOutlet>
            </IonTabs>
        </IonPage>
    );
};

export default Settings;