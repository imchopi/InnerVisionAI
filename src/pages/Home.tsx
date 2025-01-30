import React, { useEffect, useRef } from 'react';
import {IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import {cameraOutline} from "ionicons/icons";

const Home: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: 'environment' } // Usa la cámara trasera
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error al acceder a la cámara:', error);
            }
        };

        startCamera();
    }, []);

    return (
        <IonPage>
            <IonHeader className="mainHeader">
                <IonToolbar style={{ paddingTop: 'env(safe-area-inset-top)' }}>
                    <IonTitle>IVAI - Camera</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="video-container">
                    <video ref={videoRef} autoPlay playsInline></video>
                    <IonButton className="camera-button" shape="round">
                        <IonIcon icon={cameraOutline}/>
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
