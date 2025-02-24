import {IonPage, IonList, IonItem, IonLabel, IonContent, IonHeader} from "@ionic/react";
import React from "react";
import "./AboutUs.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
    {
        name: "Carlos López Muñoz",
        role: "___",
        master: "Inteligencia Artificial y Big Data",
        github: "#",
        linkedin: "#",
    },
    {
        name: "Adrián Perogil Fernández",
        role: "___",
        master: "Inteligencia Artificial y Big Data",
        github: "#",
        linkedin: "#",
    },
    {
        name: "Alejandro Fernández Barrionuevo",
        role: "___",
        master: "Inteligencia Artificial y Big Data",
        github: "#",
        linkedin: "#",
    },
];

const AboutUs: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="page-container" fullscreen>
                <div className="main-content">
                    <div className="hero">
                        <h2>Equipo del Proyecto</h2>
                        <IonList lines="none">
                            {teamMembers.map((member, index) => (
                                <IonItem className="item-member" key={index}>
                                    <IonLabel>
                                        <h3>{member.name}</h3>
                                        <p><strong>Puesto:</strong> {member.role}</p>
                                        <p><strong>Máster:</strong> {member.master}</p>
                                        <div className="social-links">
                                            <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                        </div>
                                    </IonLabel>
                                </IonItem>
                            ))}
                        </IonList>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </IonContent>
        </IonPage>
    );
};

export default AboutUs;
