import './Home.css';
import React from "react";
import { IonContent, IonPage } from '@ionic/react';
import { IoLogoGithub } from "react-icons/io5"; // Importa el ícono de GitHub

const Home: React.FC = () => {
  return (
    <IonPage className='home-page'>
      <IonContent className="page-container" fullscreen>
        <div className="main-content">
          <div className="hero">
            <h1>Proyecto InnerVisionAI</h1>
            <p>Descubre el futuro de la inteligencia artificial aplicada a la visión.</p>
          </div>
          <div className="github-links">
            <a
              href="https://github.com/imchopi/InnerVisionAI"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <IoLogoGithub size={200} /> {/* Ícono de GitHub */}
              <span>Web</span>
            </a>
            <a
              href="https://github.com/imchopi/API_InnerVisionAI"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <IoLogoGithub size={200} /> {/* Ícono de GitHub */}
              <span>API</span>
            </a>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;