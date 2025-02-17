import {
    IonButton,
    IonContent,
    IonIcon,
    IonInput,
    IonLabel,
    IonModal,
    IonPage,
    IonTitle
} from "@ionic/react";
import {useHistory} from "react-router";
import './Welcome.css';
import React, {useState} from "react";
import {chatbubbles, closeOutline, eyeOffOutline, eyeOutline, informationCircleOutline} from "ionicons/icons";


const Welcome: React.FC = () => {
    const history = useHistory(); // Hook para la navegación

    const [showPasswordLogin, setShowPasswordLogin] = useState(false);
    const [showPasswordRegister, setShowPasswordRegister] = useState(false);
    const [showConfirmPasswordRegister, setShowConfirmPasswordRegister] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <IonPage>
            <IonContent fullscreen className="welcome-container">
                <div className="icon-container">
                    <IonIcon icon={chatbubbles} className="info-icon"/>
                </div>
                <div className="flex-container">
                    <img src="src/assets/default_logo.png" alt="Logo" className="logo"/>
                    <div className="form-container">
                        <IonLabel className="form-label">Correo electrónico</IonLabel>
                        <IonInput type="email" className="form-input" fill="outline" placeholder="Ingresa tu correo" />
                        <IonLabel className="form-label">Contraseña</IonLabel>
                        <div className="password-container">
                            <IonInput
                                className="form-input password-input"
                                fill="outline"
                                type={showPasswordLogin ? "text" : "password"}
                                placeholder="Ingresa tu contraseña"
                            >
                                <IonIcon
                                    icon={showPasswordLogin ? eyeOffOutline : eyeOutline}
                                    className="password-toggle"
                                    onClick={() => setShowPasswordLogin(!showPasswordLogin)}
                                    slot="end"
                                />
                            </IonInput>
                        </div>
                        <IonButton fill="outline" className="access-button" onClick={() => history.push('/home')}>
                            Acceder
                        </IonButton>
                        <IonLabel
                            className="register-label"
                            onClick={() => setShowModal(true)}
                        >
                            ¿No tienes una cuenta? Regístrate
                        </IonLabel>
                    </div>
                </div>
                <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)} className="custom-modal">
                    <div className="modal-container">
                        <IonIcon icon={closeOutline} className="close-icon" onClick={() => setShowModal(false)} />
                        <IonTitle className="modal-title">Registro</IonTitle>
                        <div className="modal-content">
                            <IonLabel className="form-label">Correo electrónico</IonLabel>
                            <IonInput className="form-input" fill="outline" type="email" placeholder="Ingresa tu correo" />
                            <IonLabel className="form-label">Contraseña</IonLabel>
                            <IonInput className="form-input" fill="outline" type={showPasswordRegister ? "text" : "password"} placeholder="Ingresa tu contraseña" >
                                <IonIcon
                                    icon={showPasswordRegister ? eyeOffOutline : eyeOutline}
                                    className="password-toggle"
                                    onClick={() => setShowPasswordRegister(!showPasswordRegister)}
                                    slot="end"
                                />
                            </IonInput>
                            <IonLabel className="form-label">Confirmar Contraseña</IonLabel>
                            <IonInput className="form-input" fill="outline" type={showConfirmPasswordRegister ? "text" : "password"} placeholder="Confirma tu contraseña" >
                                <IonIcon
                                    icon={showConfirmPasswordRegister ? eyeOffOutline : eyeOutline}
                                    className="password-toggle"
                                    onClick={() => setShowConfirmPasswordRegister(!showConfirmPasswordRegister)}
                                    slot="end"
                                />
                            </IonInput>
                            <IonButton fill="outline" className="register-button">
                                Registrarse
                            </IonButton>
                        </div>
                    </div>
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default Welcome;