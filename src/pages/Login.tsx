import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import { logIn, personCircleOutline, videocam, videocamOffOutline, watchOutline } from 'ionicons/icons';
import logo from '../assets/shopping-cart-svgrepo-com.svg'
import { useEffect, useState } from 'react';
import Intro from '../components/IntroSeen';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'into-seen'

const Login: React.FC = () => {
    const [introSeen, setIntroSeen] = useState(true);
    const router = useIonRouter();
    const [present, dismiss] = useIonLoading();
    useEffect(() => {
        const checkStorage = async () => {
            Preferences.get({ key: INTRO_KEY })
                .then(seen => {
                    console.log('file look seen', seen);
                    setIntroSeen(seen.value === 'true')
                })
                .catch(error => {
                    console.log(error);

                });
        }
        checkStorage();
    }, [])
    const DoLogin = async (event: any) => {
        event.preventDefault();
        await present('Login...');
        setTimeout(async () => {
            dismiss();
            router.push('/app', 'root');
        }, 2000)
    }

    const finishIntro = async () => {
        setIntroSeen(true);
        Preferences.set({ key: INTRO_KEY, value: 'true' })

    }
    const wathInroAgain = () => {
        setIntroSeen(false);
        Preferences.remove({ key: INTRO_KEY });
    }
    return (
        <>
            {!introSeen ? (
                <Intro onFinish={finishIntro} />
            ) : (

                <IonPage>
                    <IonHeader>
                        <IonToolbar color={'dark'}>
                            <IonTitle>LOGIN </IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent class='ion-padding'>
                        <IonGrid fixed>
                            <IonRow class='ion-justify-content-center'>
                                <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                    <div className='ion-text-center ion-padding'>
                                        <img src={logo} alt='logo' width={'40%'} />
                                    </div>
                                </IonCol>
                            </IonRow>
                            <IonRow class='ion-justify-content-center'>
                                <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                    <IonCard>
                                        <IonCardContent>
                                            <form onSubmit={DoLogin}>
                                                <IonInput fill='outline' labelPlacement='floating' label='email' type='email' placeholder='put your email here' />
                                                <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password' placeholder='put your password here' />
                                                <IonButton type='submit' expand='block' className='ion-margin-top'>
                                                    Login
                                                    <IonIcon icon={logIn} slot='end' />
                                                </IonButton>
                                                <IonButton routerLink='/register' color={'secondary'} type='button' expand='block' className='ion-margin-top'>
                                                    Create account
                                                    <IonIcon icon={personCircleOutline} slot='end' />
                                                </IonButton>
                                                <IonButton onClick={wathInroAgain} size='small' expand='block' fill='clear' className='ion-margin-top'>
                                                    Watch intro again
                                                    <IonIcon icon={videocam} slot='end' />
                                                </IonButton>
                                            </form>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>

                    </IonContent>
                </IonPage>)}
        </>
    );
};

export default Login;