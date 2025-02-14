import { IonButton, IonTitle } from "@ionic/react";
import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <IonTitle className="logo">InnerVision</IonTitle>
            <div className="nav-buttons">
                <IonButton className="nav-button" routerLink="/">Inicio</IonButton>
                <IonButton className="nav-button" routerLink="/aboutus">Sobre nosotros</IonButton>
                <IonButton className="nav-button" routerLink="/chatbot">Chatbot</IonButton>
                <IonButton className="nav-button" routerLink="/docs">Docs</IonButton>
            </div>
        </div>
    );
};

export default Navbar;
