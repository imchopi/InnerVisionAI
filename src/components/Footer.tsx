import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} InnerVisionAI. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="/home">Política de Privacidad</a>
        <a href="/home">Términos y Condiciones</a>
      </div>
    </footer>
  );
};

export default Footer;