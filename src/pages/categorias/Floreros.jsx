import React from "react";
import Jumbotron from "../../components/ui/jumbotron";
import MultiItemCard from "../../components/ui/MultiItemCard";

import "../../styles/Bouquetes.css";

const Floreros = () => {
  const products = [
    {
      id: 1,
      name: "Imagina",
      image: "/floreros/floreros1.png",
      price: 24,
    },
    {
      id: 2,
      name: "Bella",
      image: "/floreros/floreros2.png",
      price: "24",
    },
    {
      id: 3,
      name: "Nadie Como Tú",
      image: "/floreros/floreros3.png",
      price: 24,
    },
    {
      id: 4,
      name: "40 y 42",
      image: "/floreros/floreros4.png",
      price: 42,
    },
    {
      id: 5,
      name: "Mi Primer Dia Sin Ti",
      image: "/floreros/floreros5.png",
      price: 75,
    },
    {
      id: 5,
      name: "Si Supieras",
      image: "/floreros/floreros6.jpg",
      price: 35,
    },
  ];

  return (
    <div>
      <Jumbotron
        title="Floreros"
        backgroundImage="/banners/black-plain-concrete-textured.png"
      />

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

export default Floreros;
