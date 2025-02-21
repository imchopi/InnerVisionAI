import React, { useEffect, useRef } from 'react';
import { io } from "socket.io-client"; // Importa WebSockets
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Model.css';
import { Capacitor } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';

// Función para ajustar la barra de estado en dispositivos nativos
const fixStatusBar = async () => {
    if (Capacitor.isNativePlatform()) {
        await StatusBar.setOverlaysWebView({ overlay: true });
    }
};
fixStatusBar();


// Conexión al backend con WebSockets
const socket = io("http://localhost:5000"); // Cambia a HTTPS en producción

const Model: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Detectar si es un dispositivo móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Iniciar la cámara
    useEffect(() => {
        const startCamera = async () => {
            try {
                const constraints = {
                    video: {
                        facingMode: 'environment', // Usar la cámara trasera
                        width: isMobile ? { ideal: window.innerWidth } : { ideal: 640 }, // Ajustar resolución según el dispositivo
                        height: isMobile ? { ideal: window.innerHeight } : { ideal: 480 }
                    }
                };

                const stream = await navigator.mediaDevices.getUserMedia(constraints);

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.onloadedmetadata = () => {
                        videoRef.current?.play().catch(err => console.error("Error al reproducir video:", err));
                        // Llamar a sendFramesToServer después de que el video esté listo
                        sendFramesToServer();
                    };
                }
            } catch (error) {
                console.error('Error al acceder a la cámara:', error);
            }
        };

        startCamera();
    }, [isMobile]);

    // Enviar frames al servidor
    const sendFramesToServer = () => {
        const video = videoRef.current;
        if (!video) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const sendFrame = () => {
            if (!ctx || !video) return;

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(blob => {
                if (blob) {
                    blob.arrayBuffer().then(buffer => {
                        socket.emit("frame", { image: buffer });
                    });
                }
            }, 'image/jpeg');

            // Limitar la tasa de frames a 10 FPS (100ms por frame)
            setTimeout(sendFrame, 1000);
        };

        sendFrame();
    };

    // Recibir detecciones del backend y dibujar en el canvas
    useEffect(() => {
        socket.on("detections", (detections) => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            const video = videoRef.current;

            if (!canvas || !ctx || !video) return;

            // Asegurarse de que el canvas tenga las mismas dimensiones que el video
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Limpiar el canvas antes de dibujar las nuevas detecciones
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dibujar las detecciones en el canvas
            detections.forEach((detection: { bbox: [number, number, number, number]; class: string; confidence: number }) => {
                const [x, y, width, height] = detection.bbox;
                ctx.strokeStyle = "#00FF00";
                ctx.lineWidth = 2;
                ctx.strokeRect(x, y, width - x, height - y); // Ajustar el ancho y alto

                ctx.fillStyle = "#00FF00";
                ctx.font = "12px Arial";
                ctx.fillText(`${detection.class} ${detection.confidence.toFixed(2)}`, x, y - 5);
            });
        });

        return () => {
            socket.off("detections");
        };
    }, []);

    return (
        <IonPage>
            <IonHeader className="mainHeader">
                <IonToolbar style={{ paddingTop: 'env(safe-area-inset-top)' }}>
                    <IonTitle>IVAI - Camera</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="video-container">
                    <video ref={videoRef} autoPlay playsInline></video>
                    <canvas ref={canvasRef} className="overlay"></canvas>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Model;