from flask import Flask, request
from flask_socketio import SocketIO
import cv2
import numpy as np
from ultralytics import YOLO

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

model = YOLO("yolov8n.pt")

@socketio.on('frame')
def handle_frame(data):
    try:
        # Decodificar imagen desde base64
        image_bytes = np.frombuffer(data['image'], dtype=np.uint8)
        image = cv2.imdecode(image_bytes, cv2.IMREAD_COLOR)

        if image is None:
            print("Error al decodificar la imagen")
            return

        # Detectar objetos con YOLO
        results = model(image)

        detections = []
        for result in results:
            for box in result.boxes:
                xmin, ymin, xmax, ymax = map(int, box.xyxy[0])
                confidence = round(box.conf.item(), 2)
                class_id = int(box.cls.item())
                class_name = model.names.get(class_id, "Desconocido")

                detections.append({
                    "class": class_name,
                    "confidence": confidence,
                    "bbox": [xmin, ymin, xmax, ymax]
                })

        # Enviar detecciones al frontend
        socketio.emit('detections', detections)

    except Exception as e:
        print("Error procesando el frame:", str(e))


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)