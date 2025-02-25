import {IonPage, IonHeader, IonContent} from "@ionic/react";
import React, {useState} from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./Chatbot.css";

const Chatbot: React.FC = () => {
    // Estado para almacenar los mensajes del chat
    const [messages, setMessages] = useState([
        { role: "bot", content: "¡Hola! Soy tu asistente virtual! Pregúntame sobre lo que sea acerca de InnerVisionAI." }
    ]);
    // Estado para manejar el texto del input del usuario
    const [input, setInput] = useState("");

    // Función para formatear la respuesta del chatbot
    const formatResponse = (response: string) => {
        return response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Negritas a etiquetas HTML
            .replace(/\n/g, '<br>') // Saltos de línea HTML
            .replace(/\d+\. /g, '<br>• '); // Números por viñetas
    };

    // Función para manejar el envío de mensajes al chatbot
    const sendMessage = async () => {
        if (!input.trim()) return; // No enviar si el input está vacío

        // Agregar el mensaje del usuario a la lista de mensajes
        const userMessage = { role: "user", content: input };
        setMessages([...messages, userMessage]);

        try{
            // Enviar el mensaje al backend (servidor en Node.js)
            const response = await axios.post("https://api-innervisionai.onrender.com/chat", {
                message: input,
            });

            // Formatear la respuesta del chatbot
            const formattedContent = formatResponse(response.data.response);
            // Agregar la respuesta del chatbot a la lista de mensajes
            const botMessage = { role: "bot", content: formattedContent };
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
                                {msg.role === "bot" ? (
                                    <div dangerouslySetInnerHTML={{ __html: msg.content }} />
                                ) : (
                                    msg.content
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Input y botón para enviar mensajes */}
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

                {/* Footer */}
                <Footer />
            </IonContent>
        </IonPage>
    );
};

export default Chatbot;