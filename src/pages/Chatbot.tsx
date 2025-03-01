import { IonPage, IonContent } from "@ionic/react";
import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState([
        { role: "bot", content: "¡Hola! Soy tu asistente virtual. Pregúntame sobre lo que sea acerca de InnerVisionAI." }
    ]);
    const [input, setInput] = useState("");

    // Permitir tanto localhost como la URL de producción
    const API_URL = window.location.hostname === "localhost" 
        ? "http://localhost:5000" 
        : "https://innervisionai.netlify.app"

    const formatResponse = (response: string) => {
        return response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/\d+\. /g, '<br>• ');
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages([...messages, userMessage]);

        try {
            // Usar la URL de la API dinámicamente
            const response = await axios.post(`${API_URL}/chat`, {
                message: input,
            });

            const formattedContent = formatResponse(response.data.response);
            const botMessage = { role: "bot", content: formattedContent };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error("Error al enviar el mensaje al chatbot:", error);
        }

        setInput("");
    };

    return (
        <IonPage>
            <IonContent className="page-container" fullscreen>
                <div className="main-content-chatbot">
                    {/* Título del chatbot */}
                    <h2>Chatbot de InnerVisionAI</h2>

                    {/* Contenedor de mensajes */}
                    <div className="chat-container">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.role}`}>
                                {msg.role === "bot" ? (
                                    <div dangerouslySetInnerHTML={{ __html: msg.content }} />
                                ) : (
                                    msg.content
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Input y botón de enviar */}
                    <div className="input-container">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escribe tu mensaje..."
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button className="send-button" onClick={sendMessage}>Enviar</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Chatbot;