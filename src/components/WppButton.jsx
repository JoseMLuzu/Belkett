import React from "react";
import "../styles/WppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "5930998474689"; // Número de teléfono con código de país
  const message = "Hola, me gustaría mas información sobre"; // Mensaje predefinido

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <i className="fab fa-whatsapp"></i> {/* Usa el ícono de WhatsApp */}
    </a>
  );
};

export default WhatsAppButton;
