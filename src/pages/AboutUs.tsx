import { IonPage, IonContent, IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon } from "@ionic/react";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Íconos de GitHub y LinkedIn
import { arrowBack } from "ionicons/icons"; // Ícono de flecha para volver atrás
import "./AboutUs.css";

const teamMembers = [
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
    const [selectedMember, setSelectedMember] = useState(null); // Estado para el miembro seleccionado
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

    // Función para abrir el modal con la información del miembro
    const openModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMember(null);
    };

    return (
        <IonPage>
            <IonContent className="page-container" fullscreen>
                <div className="main-content-about">
                    <div className="hero">
                        <h2>Equipo del Proyecto</h2>
                    </div>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div className="team-member" key={index} onClick={() => openModal(member)}>
                                <h3>{member.name}</h3>
                                <p>
                                    {member.role}
                                </p>
                                <p>
                                    {member.master}
                                </p>
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