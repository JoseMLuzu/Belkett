import React from "react";
import Jumbotron from "../../components/ui/jumbotron";
import MultiItemCard from "../../components/ui/MultiItemCard";

import "../../styles/Bouquetes.css";

const Bouquets = () => {
  const products = [
    {
      id: 1,
      name: "Solamente Tu",
      image: "/bouquets/bouquet1.png",
    },
    {
      id: 2,
      name: "Amor Eterno",
      image: "/bouquets/bouquet2.png",
    },
    {
      id: 3,
      name: "Pacto de Amor",
      image: "/bouquets/bouquet3.png",
    },
    {
      id: 4,
      name: "Lo Intentamos",
      image: "/bouquets/bouquet4.png",
    },
    {
      id: 5,
      name: "Detalles",
      image: "/bouquets/bouquet5.png",
    },
    {
      id: 6,
      name: "Volver Junto A Ti",
      image: "/bouquets/bouquet6.jpg",
    },
    {
      id: 7,
      name: "Cómo Le Digo",
      image: "/bouquets/bouquet7.jpg",
    },
    {
      id: 8,
      name: "Voy a Vos",
      image: "/bouquets/bouquets8.jpg",
    },
    {
      id: 9,
      name: "Rayando el Sol",
      image: "/bouquets/bouquets9.jpg",
    },
    {
      id: 10,
      name: "Esa niña",
      image: "/bouquets/bouquets10.jpg",
    },
    {
      id: 11,
      name: "Si Tú Me Dices Ven",
      image: "/bouquets/bouquets11.jpg",
    },
    {
      id: 12,
      name: "EL Amor",
      image: "/bouquets/bouquets12.jpg",
    },
    {
      id: 13,
      name: "Para Que No Me Olvides",
      image: "/bouquets/bouquets13.jpg",
    },
    {
      id: 14,
      name: "El Destino",
      image: "/bouquets/bouquets16.jpg",
    },
    {
      id: 15,
      name: "Contra Viento Y Marea",
      image: "/bouquets/bouquets15.jpg",
    },
  ];

  const cardData = {
    mainTitle: "Elige Tu Bouquet",
    items: [
      {
        title: "Básico",
        description: "Cantidad de tallos 40",
        price: "$30",
      },
      {
        title: "Estándar",
        description: "Cantidad de tallos 70",
        price: "$45",
      },
      {
        title: "Premiun",
        description: "Cantidad de tallos 100.",
        price: "$60",
      },
    ],
  };

  return (
    <div>
      <Jumbotron
        title="Bouquets"
        backgroundImage="/banners/black-plain-concrete-textured.png"
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
