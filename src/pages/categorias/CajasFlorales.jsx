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
      price: 28,
    },
    {
      id: 2,
      name: "No Te Aparte De Mí",
      image: "/CajasFlorales/cajas6.png",
      price: 28,
    },
    {
      id: 3,
      name: "Algo Contigo",
      image: "/CajasFlorales/cajas2.png",
      price: 45,
    },
    {
      id: 4,
      name: "Amiga Mía",
      image: "/CajasFlorales/cajas1.png",
      price: 65,
    },
    {
      id: 5,
      name: "Para Empezar",
      image: "/CajasFlorales/cajas3.png",
      price: 65,
    },
    {
      id: 6,
      name: "Nunca Es Suficiente",
      image: "/CajasFlorales/cajas4.png",
      price: 75,
    },
    {
      id: 7,
      name: "Otra Como Tú",
      image: "/CajasFlorales/cajas7.jpg",
      price: 65,
    },
    {
      id: 8,
      name: "Un Amor",
      image: "/CajasFlorales/cajas8.jpg",
      price: 65,
    },
    {
      id: 9,
      name: "Será Que Sí",
      image: "/CajasFlorales/cajas9.jpg",
      price: 65,
    },
  ];

  return (
    <div>
      <Jumbotron
        title="Cajas Florales"
        backgroundImage="/banners/black-plain-concrete-textured.png"
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
                    $ {product.price}
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
