import './Home.css';
import React from "react";
import Footer from "../components/Footer";
import { IonContent, IonPage } from '@ionic/react';

const Home: React.FC = () => {
  return (
      <IonPage>
          <IonContent className="page-container" fullscreen>
              <div className="main-content">
                  <div className="hero">
                      <h1>Bienvenidos a InnerVision</h1>
                      <p>Descubre el futuro de la inteligencia artificial aplicada a la visión.</p>
                  </div>
              </div>
              <Footer />
          </IonContent>
      </IonPage>
  );
};

export default Home;
