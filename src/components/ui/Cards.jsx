import React from "react";
import Jumbotron from "../../components/ui/jumbotron";
import MultiItemCard from "../../components/ui/MultiItemCard";

import "../../styles/Bouquetes.css";

const ArreglosFlorales = () => {
  const products = [
    {
      id: 1,
      name: "Rojo Carmesi",
      image: "/public/WhatsApp Image 2024-12-02 at 11.40.26 AM.jpeg",
      description: 599,
    },
    {
      id: 2,
      name: "Amor Eterno",
      image: "/public/4.png",
      description: "Rosas, Fucsias, Crisantemos, Astromelias",
    },
    {
      id: 3,
      name: "Sol de Verano",
      image: "/public/2.png",
      description: 199,
    },
  ];

  const cardData = {
    mainTitle: "Elige Tu Bouquet",
    items: [
      {
        title: "Orquidea",
        price: "$35",
      },
      {
        title: "Caja",
        price: "$65",
      },
      {
        title: "Bombonera de cristal",
        price: "$75",
      },
    ],
  };

  return (
    <div>
      <MultiItemCard mainTitle={cardData.mainTitle} items={cardData.items} />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" className="zoom-container">
                <img
                  className="p-8 rounded-t-lg"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className=" text-gray-600 dark:text-white">
                    <strong>Contiene:</strong> {product.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArreglosFlorales;
