import { IonButton, IonTitle } from "@ionic/react";
import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <IonTitle className="logo">InnerVisionAI</IonTitle>
      <div className="nav-buttons">
        <IonButton className="nav-button" routerLink="/home">
          Inicio
        </IonButton>
        <IonButton className="nav-button" routerLink="/model">
          Modelo
        </IonButton>
        <IonButton className="nav-button" routerLink="/aboutus">
          Sobre nosotros
        </IonButton>
        <IonButton className="nav-button" routerLink="/chatbot">
          Chatbot
        </IonButton>
      </div>
    </div>
  );
};

export default Navbar;