import {IonButton, IonContent, IonPage} from "@ionic/react";
import {useHistory} from "react-router";
import './Welcome.css';
import React from "react";


const Welcome: React.FC = () => {
    const history = useHistory(); // Hook para la navegación

    return (
        <IonPage>
            <IonContent fullscreen className="welcome-container">
                <div className="flex-container">
                    <img src="src/assets/default_logo.png" alt="Logo" className="logo"/>
                    <IonButton fill="outline" className="access-button" onClick={() => history.push('/home')}>
                        Acceder
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Welcome;