import {IonPage, IonHeader, IonContent} from "@ionic/react";
import React from "react";
import Footer from "../components/Footer";

const Chatbot: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="page-container" fullscreen>
                <div className="main-content">
                    <div className="hero">
                        <p>[Funcionalidad del Chatbot]</p>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </IonContent>
        </IonPage>
    );
};

export default Chatbot;