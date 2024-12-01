import React from "react";
import "../styles/WppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "5930963717115"; // Número de teléfono con código de país
  const message = "Hola, me gustaría reservar una habitación"; // Mensaje predefinido

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
