import React from "react";
import Jumbotron from "../../components/ui/jumbotron";
import MultiItemCard from "../../components/ui/MultiItemCard";

import "../../styles/Bouquetes.css";

const Bouquets = () => {
  const products = [
    {
      id: 1,
      name: "Solamente Tu",
      image: "/public/bouquets/bouquet1.png",
    },
    {
      id: 2,
      name: "Amor Eterno",
      image: "/public/bouquets/bouquet2.png",
    },
    {
      id: 3,
      name: "Pacto de Amor",
      image: "/public/bouquets/bouquet3.png",
    },
    {
      id: 4,
      name: "Lo Intentamos",
      image: "/public/bouquets/bouquet4.png",
    },
    {
      id: 4,
      name: "Detalles",
      image: "/public/bouquets/bouquet5.png",
    },
  ];

  const cardData = {
    mainTitle: "Elige Tu Bouquet",
    items: [
      {
        title: "Pequeño",
        description: "Cantidad de tallos 40",
        price: "$30",
      },
      {
        title: "Mediano",
        description: "Cantidad de tallos 70",
        price: "$45",
      },
      {
        title: "Romantic Rose Box",
        description: "Cantidad de tallos 100.",
        price: "$60",
      },
    ],
  };

  return (
    <div>
      <Jumbotron
        title="Bouquets"
        backgroundImage="/public/banners/paper-1074131.jpg"
      />
      <MultiItemCard mainTitle={cardData.mainTitle} items={cardData.items} />
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
                    {product.price}
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

export default Bouquets;
