import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} InnerVision. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
