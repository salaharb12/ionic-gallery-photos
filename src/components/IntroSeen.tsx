import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import svg1 from '../assets/person-holding-a-glass-of-milk-svgrepo-com.svg'
import svg2 from '../assets/person-sneezing-on-train-svgrepo-com.svg'
import svg3 from '../assets/person-who-explains-investment-svgrepo-com.svg'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css'
import './intro.css'
interface ContainerProps {
    onFinish: () => void;
}

const SwiperNextButton = ({children} : any) =>{
    const swiper = useSwiper();
    return (<IonButton onClick={()=> swiper.slideNext()}>{children}</IonButton>)
}

const Intro: React.FC<ContainerProps> = ({onFinish}) => {

    return (
        <Swiper>
            <SwiperSlide>
                <img src={svg1} alt='svg1' />
                <IonText>
                    <h1>Make a great start with mobile application</h1>
                </IonText>
                <SwiperNextButton>Next</SwiperNextButton>
            </SwiperSlide>
            <SwiperSlide>
                <img src={svg2} alt='svg2' />
                <IonText>
                    <h1>Make a great start with mobile application</h1>
                </IonText>
                <SwiperNextButton>Next</SwiperNextButton>
            </SwiperSlide>
            <SwiperSlide>
                <img src={svg3} alt='svg3' />
                <IonText>
                    <h1>Make a great start with mobile application</h1>
                </IonText>
                <IonButton onClick={()=> onFinish()}>Finish</IonButton>
            </SwiperSlide>
        </Swiper>
    );
};

export default Intro;