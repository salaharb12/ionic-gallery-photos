import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { checkmarkCircleOutline, logIn, personCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('DoRegister');

    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'dark'}>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/' />
                    </IonButtons>
                    <IonTitle>Create account </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent class='ion-padding'>
                <IonGrid fixed>
                    <IonRow class='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                            <IonCard>
                                <div className='ion-text-center ion-padding'>

                                </div>
                                <IonCardContent>
                                    <form onSubmit={doRegister}>
                                        <IonInput fill='outline' labelPlacement='floating' label='email' type='email' placeholder='put your email here' />
                                        <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password' placeholder='put your password here' />

                                        <IonButton color={'secondary'} type='submit' expand='block' className='ion-margin-top'>
                                            Create account
                                            <IonIcon icon={checkmarkCircleOutline} slot='end' />
                                        </IonButton>
                                    </form>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Register;