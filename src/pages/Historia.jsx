import React from "react";
import { motion } from "framer-motion"; // Importamos motion

import "../styles/Nosotros.css";

const Historia = () => {
  return (
    <section className="nosotros bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-4">
        {/* Imagen con animación */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/banners/bannerNosotros.png"
            alt="Un ramo de flores, representando nuestra historia"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg"
          />
        </motion.div>

        {/* Texto elegante con animación */}
        <motion.div
          className="text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
          <p className="text-lg leading-relaxed mb-6">
            Belkett Flower Shop comenzó sus operaciones en 2005, gracias a la
            visión emprendedora de Marco y Gabriela, una pareja que identificó
            una oportunidad única en el mercado. Se dieron cuenta de que muchas
            personas deseaban expresar sus emociones y sentimientos a través de
            un detalle especial, pero a menudo no encontraban opciones
            accesibles y de calidad.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            A lo largo de los años, Belkett ha sido parte de innumerables
            historias emotivas: desde hijos que se reencuentran con sus madres
            después de años, parejas que celebran un amor a distancia, hasta
            abuelitas que conocen a sus nietos por primera vez. Estas vivencias
            son nuestro mayor motor y nos inspiran a seguir mejorando cada día.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Hoy, Belkett Flower Shop sigue creciendo, ofreciendo productos de
            alta calidad, diseñados con amor y dedicación, para que cada detalle
            cuente una historia inolvidable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Historia;
