import React from "react";
import { motion } from "framer-motion";
import Jumbotron from "../components/ui/jumbotron";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Bouquets",
      image: "/docs/images/products/apple-watch.png",
    },
    {
      id: 2,
      name: "Arreglos Florales",
      image: "/docs/images/products/galaxy-watch.png",
    },
    {
      id: 3,
      name: "Cajas Florales",
      image: "/docs/images/products/fitbit-versa.png",
    },
    {
      id: 4,
      name: "Floreros",
      image: "/docs/images/products/fitbit-versa.png",
    },
    {
      id: 5,
      name: "Ramos de Novia y Corsage",
      image: "/docs/images/products/fitbit-versa.png",
    },
    {
      id: 6,
      name: "Plantas",
      image: "/docs/images/products/plant.png",
    },
    {
      id: 7,
      name: "Accesorios",
      image: "/docs/images/products/accessories.png",
    },
  ];

  return (
    <div>
      <Jumbotron />

      {/* Sección de introducción */}
      <motion.div
        className="text-left mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="mb-8 text-4xl font-serif text-gray-900 dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          BELKETT
        </motion.h1>
        <motion.p
          className="mb-3 text-lg text-gray-800 dark:text-gray-400 leading-relaxed"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          En Belkett Flower Shop, transformamos las flores en emociones...
        </motion.p>
        <motion.p
          className="text-lg text-gray-800 dark:text-gray-400 leading-relaxed"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Además, en Belkett nos enorgullece ofrecer un servicio cálido y
          oportuno...
        </motion.p>
      </motion.div>

      {/* Sección de productos */}
      <div className="container mx-auto p-4 pt-10">
        <motion.h1
          className="pb-10 text-3xl font-serif text-gray-900 dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Nuestros productos
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="#">
                <motion.img
                  className="p-8 rounded-t-lg"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <motion.h5
                    className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {product.name}
                  </motion.h5>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sección de por que elegir */}
      <motion.div
        className="text-left mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="mb-8 text-3xl font-serif text-gray-900 dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          ¿POR QUÉ ELEGIR A BELKETT FLOWER SHOP COMO SU SOCIO COMERCIAL?
        </motion.h1>
        <motion.p
          className="mb-3 text-lg text-gray-800 dark:text-gray-400 leading-relaxed"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          En Belkett Flower Shop somos una empresa con más de 15 años de
          experiencia...
        </motion.p>
        <motion.p
          className="mb-3 text-lg text-gray-800 dark:text-gray-400 leading-relaxed"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestro compromiso con la calidad es inquebrantable...
        </motion.p>
      </motion.div>

      {/* Sección de socios comerciales */}
      <motion.div
        className="text-left mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="mb-8 text-3xl font-serif text-gray-900 dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          SOCIOS ESTRATÉGICOS
        </motion.h1>
        <motion.p
          className="mb-3 text-lg text-gray-800 dark:text-gray-400 leading-relaxed"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          En Belkett Flower Shop, creemos que el éxito es el resultado...
        </motion.p>
        <motion.ul
          className="mb-3 max-w-md space-y-1 text-gray-800 list-disc list-inside dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.blockquote
            className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <li className="mb-3">
              Productores de flores premium: Trabajamos con plantaciones...
            </li>
            <li className="mb-3">
              Proveedores de complementos: Colaboramos con marcas...
            </li>
            <li className="mb-3">
              Decoradores y diseñadores florales: Contamos con expertos...
            </li>
            <li className="mb-3">
              Empresas de logística: Nos aliamos con socios confiables...
            </li>
          </motion.blockquote>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Home;
