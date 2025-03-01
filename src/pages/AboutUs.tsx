import { IonPage, IonContent } from "@ionic/react";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Íconos de GitHub y LinkedIn
import "./AboutUs.css";

// Definir la interfaz para los miembros del equipo
interface TeamMember {
    name: string;
    role: string;
    master: string;
    github: string;
    linkedin: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Carlos López Muñoz",
        role: "Desarrollador de IA y Big Data",
        master: "Inteligencia Artificial y Big Data",
        github: "#",
        linkedin: "#",
    },
    {
        name: "Adrián Perogil Fernández",
        role: "Desarrollador de IA y Big Data",
        master: "Inteligencia Artificial y Big Data",
        github: "#",
        linkedin: "#",
    },
    {
        name: "Alejandro Fernández Barrionuevo",
        role: "Desarrollador de IA y Big Data",
        master: "Inteligencia Artificial y Big Data",
        github: "#",
        linkedin: "#",
    },
];

const AboutUs: React.FC = () => {

    return (
        <IonPage>
            <IonContent className="page-container" fullscreen>
                <div className="main-content-about">
                    <div className="hero">
                        <h2>Equipo del Proyecto</h2>
                    </div>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div className="team-member" key={index}>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                                <p>{member.master}</p>
                                <div className="social-links">
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default AboutUs;