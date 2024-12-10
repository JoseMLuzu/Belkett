import React from "react";
import Jumbotron from "../../components/ui/jumbotron";

import "../../styles/Bouquetes.css";

const ArreglosFlorales = () => {
  const products = [
    {
      id: 1,
      name: "Otra Oportunidad",
      image: "/arreglos/arreglos1.png",
      price: 45,
    },
    {
      id: 2,
      name: "Desde Que Te Vi",
      image: "/arreglos/arreglos2.png",
      price: 45,
    },
    {
      id: 3,
      name: "Perfecta",
      image: "/arreglos/arreglos3.png",
      price: 45,
    },
    {
      id: 4,
      name: "Curiosidad",
      image: "/arreglos/arreglos4.png",
      price: 38,
    },
    {
      id: 5,
      name: "Abracadabra",
      image: "/arreglos/arreglos5.jpg",
      price: 45,
    },
  ];

  return (
    <div>
      <Jumbotron
        title="Arreglos Florales"
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

export default ArreglosFlorales;
