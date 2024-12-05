import React from "react";

import "../../styles/MultiItemCard.css";

// Componente principal
const MultiItemCard = ({ mainTitle, items }) => {
  return (
    <div className="banner1 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      {/* Título principal */}
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">
        {mainTitle}
      </h1>

      {/* Contenedor de tarjetas */}
      <div className="max-w-6xl w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <h5 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="text-lg mb-2 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
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

// Exportar componente
export default MultiItemCard;
