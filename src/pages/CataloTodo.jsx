import React, { useState } from "react";

const CataTodo = () => {
  const [sortOption, setSortOption] = useState("low-to-high");

  const products = [
    {
      id: 1,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "/docs/images/products/apple-watch.png",
      price: 599,
    },
    {
      id: 2,
      name: "Samsung Galaxy Watch 5 Pro",
      image: "/docs/images/products/galaxy-watch.png",
      price: 499,
    },
    {
      id: 3,
      name: "Fitbit Versa 3 Health and Fitness Smartwatch",
      image: "/docs/images/products/fitbit-versa.png",
      price: 199,
    },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "low-to-high") return a.price - b.price;
    if (sortOption === "high-to-low") return b.price - a.price;
    if (sortOption === "alphabetical") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <select
          className="p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:text-white"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="low-to-high">Precio: Menor a Mayor</option>
          <option value="high-to-low">Precio: Mayor a Menor</option>
          <option value="alphabetical">Orden Alfabético</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
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
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CataTodo;
