import React from "react";
import Jumbotron from "../../components/ui/jumbotron";
import MultiItemCard from "../../components/ui/MultiItemCard";

import "../../styles/Bouquetes.css";

const RamosDeNovia = () => {
  const products = [
    {
      id: 1,
      name: "Eres Mía",
      image: "/novia/novia3.png",
      price: 12,
    },
    {
      id: 2,
      name: "Que Me Alcance La Vida",
      image: "/novia/novia1.png",
      price: 55,
    },
    {
      id: 3,
      name: "La Incondicional",
      image: "/novia/novia2.png",
      price: 55,
    },
    {
      id: 4,
      name: "Por Ti Me Casaré",
      image: "/novia/novia4.png",
      price: 55,
    },
  ];

  return (
    <div>
      <Jumbotron
        title="Ramos de Novia y Corsage"
        backgroundImage="/banners/paper-1074131.jpg"
      />

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a className="zoom-container">
                <img
                  className="p-8 rounded-t-lg"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="px-5 pb-5">
                <a>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className=" text-gray-600 dark:text-white">
                    ${product.price}
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

export default RamosDeNovia;
