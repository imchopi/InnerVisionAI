import {IonPage, IonHeader, IonContent} from "@ionic/react";
import React, {useState} from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./Chatbot.css";

const Chatbot: React.FC = () => {
    // Estado para almacenar los mensajes del chat
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    // Estado para manejar el texto del input del usuario
    const [input, setInput] = useState("");

    // Función para manejar el envío de mensajes al chatbot
    const sendMessage = async () => {
        if (!input.trim()) return; // No enviar si el input está vacío

        // Agregar el mensaje del usuario a la lista de mensajes
        const userMessage = { role: "user", content: input };
        setMessages([...messages, userMessage]);

        try{
            // Enviar el mensaje al backend (servidor en Node.js)
            const response = await axios.post("http://localhost:5000/chat", {
                message: input,
            });

            // Agregar la respuesta del chatbot a la lista de mensajes
            const botMessage = { role: "bot", content: response.data.response };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error){
            console.error("Error al enviar el mensaje al chatbot:", error);
        }

        // Limpiar el input del usuario después de enviar el mensaje
        setInput("");
    };

    return (
        <IonPage>
            <IonContent className="page-container" fullscreen>
                <div className="main-content">
                    {/* Título del chatbot */}
                    <h2>Chatbot</h2>

                    {/* Contenedor donde se mostrarán los mensajes */}
                    <div className="chat-container">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.role}`}>
                                {msg.content}
                            </div>
                        ))}
                    </div>

                    <div className="input-container">
                        {/*Input y botón para enviar mensajes*/}
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escribe tu mensaje..."
                        />
                        <button onClick={sendMessage}>Enviar</button>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </IonContent>
        </IonPage>
    );
};

export default Chatbot;