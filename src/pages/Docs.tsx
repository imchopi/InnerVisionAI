import {IonContent, IonPage} from "@ionic/react";
import React from "react";
import Footer from "../components/Footer";

const Docs: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="page-container" fullscreen>
                <div className="main-content">
                    <div className="hero">
                        <p>[Documentación acerca del proyecto]</p>
                    </div>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default Docs;