import React from "react";
import Jumbotron from "../../components/ui/jumbotron";
import MultiItemCard from "../../components/ui/MultiItemCard";

import "../../styles/Bouquetes.css";

const CajasFlorales = () => {
  const products = [
    {
      id: 1,
      name: "Como Quisiera Decirte",
      image: "/CajasFlorales/cajas5.png",
      description: 28,
    },
    {
      id: 2,
      name: "No Te Aparte De Mí",
      image: "/CajasFlorales/cajas6.png",
      description: 28,
    },
    {
      id: 3,
      name: "Algo Contigo",
      image: "/CajasFlorales/cajas2.png",
      description: 45,
    },
    {
      id: 4,
      name: "Amiga Mía",
      image: "/CajasFlorales/cajas1.png",
      description: 65,
    },
    {
      id: 5,
      name: "Para Empezar",
      image: "/CajasFlorales/cajas3.png",
      description: 65,
    },
    {
      id: 6,
      name: "Nunca Es Suficiente",
      image: "/CajasFlorales/cajas4.png",
      description: 75,
    },
  ];

  return (
    <div>
      <Jumbotron
        title="Cajas Florales"
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
                    $ {product.description}
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

export default CajasFlorales;
