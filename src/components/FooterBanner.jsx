import React from "react";
import { FaLocationArrow, FaHeart, FaStar } from "react-icons/fa";

import "../styles/FooterBanner.css";

// Componente principal
const cardData = {
  mainTitle: "Tu Pedido Incluye",
  items: [
    {
      icon: <FaLocationArrow className="w-12 h-12 text-black" />,
      title: "Envío a domicilio",
      description:
        "Las entregas se realizan siempre que las ordenes se han ingresado antes de las 3pm. Las ordenes recibidas después de ese horario se coordinarán para el siguiente día.",
    },
    {
      icon: <FaHeart className="w-12 h-12 text-red-700" />,
      title: "Nota personalizada",
      description:
        "Se incluye en tu bouquet o arreglo una tarjeta impresa con tus palabras",
    },
    {
      icon: <FaStar className="w-12 h-12 text-black" />,
      title: "Garantía de calidad",
      description:
        "Con cada pedido, incluimos un manual sobre el cuidado de las flores para que duren el mayor tiempo posible.",
    },
  ],
};

const FooterBanner = ({ mainTitle, items }) => {
  return (
    <div className="footbanner bg-gray-100 dark:bg-gray-900 py-16">
      {/* Título principal */}
      <h1 className="footbanner text-3xl md:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">
        {mainTitle}
      </h1>

      {/* Contenedor de tarjetas */}
      <div className="max-w-screen-lg mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-lg p-6 shadow-lg dark:bg-gray-700 transition-all hover:shadow-xl hover:scale-105"
            >
              {/* Icono centrado */}
              <div className="mb-4 flex justify-center items-center">
                {item.icon}
              </div>
              {/* Título y Descripción */}
              <h5 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
              {/* Precio */}
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Usar el componente en tu aplicación principal
const App = () => {
  return <FooterBanner mainTitle={cardData.mainTitle} items={cardData.items} />;
};

export default App;
