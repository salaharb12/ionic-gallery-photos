import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Settings from './Settings';
import { homeOutline, logOutOutline, newspaperOutline } from 'ionicons/icons';

const Menu: React.FC = () => {
    const paths = [
        { name: 'Home', url: '/app/list', icon: homeOutline },
        { name: 'Settings', url: '/app/settings', icon: newspaperOutline }
    ]
    return (
        <IonPage>
            <IonMenu contentId='main'>
                <IonHeader>
                    <IonToolbar color={'tertiary'}>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    {paths.map((item, index) =>
                        <IonMenuToggle key={index} autoHide={false}>
                            <IonItem detail={false} routerLink={item.url} routerDirection='none'>{item.name}
                                <IonIcon icon={item.icon} slot='start' />
                            </IonItem>
                        </IonMenuToggle>
                    )}
                    <IonMenuToggle autoHide={false}>
                        <IonItem detail={false} routerLink='/' routerDirection='none'>Logout
                            <IonIcon icon={logOutOutline} slot='start' />
                        </IonItem>
                    </IonMenuToggle>
                </IonContent>
            </IonMenu>
            <IonRouterOutlet id='main'>
                <Route exact path='/app/list' component={List} />
                <Route path='/app/settings' component={Settings} />
                <Route exact path='/app' component={Settings} >
                    <Redirect to='/app/list' />
                </Route>
            </IonRouterOutlet>
        </IonPage>
    );
};

export default Menu;