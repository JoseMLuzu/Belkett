import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import BackgroundImage from "/banners/bannerPrincipal-transformed.jpeg";

import "../styles/Home.css";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Bouquets",
      image: "/bouquets/bouquet1.png",
      link: "/bouquets",
    },
    {
      id: 2,
      name: "Arreglos Florales",
      image: "/arreglos/arreglos1.png",
      link: "/arreglos-florales",
    },
    {
      id: 3,
      name: "Cajas Florales",
      image: "/CajasFlorales/cajas1.png",
      link: "/cajas-florales",
    },
    {
      id: 4,
      name: "Floreros",
      image: "/floreros/floreros1.png",
      link: "/floreros",
    },
    {
      id: 5,
      name: "Ramos de Novia y Corsage",
      image: "/novia/novia1.png",
      link: "/ramos-de-novia",
    },
    {
      id: 6,
      name: "Plantas",
      image: "/plantas/plantas1.png",
      link: "/plantas",
    },
    {
      id: 7,
      name: "Accesorios",
      image: "/accesorios/accesorios1.png",
      link: "/accesorios",
    },
  ];

  const words = [
    "Amor",
    "Unión",
    "Belleza",
    "Arte",
    "Vida",
    "Historia",
    "Paz",
    "Gozo",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Cambiar la palabra cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [words.length]);

  return (
    <div>
      <section
        className="jumbo bg-center bg-no-repeat bg-gray-400 bg-blend-multiply"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 ">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            <img className="imgb" src="/Belkett_logo-no-fondo.png" /> es{" "}
            <br></br>
            <motion.span
              key={currentWordIndex} // Cambiar key para reiniciar la animación
              initial={{ opacity: 0, y: 50 }} // Animación de entrada
              animate={{ opacity: 1, y: 0 }} // Animación activa
              exit={{ opacity: 0, y: -50 }} // Animación de salida
              transition={{ duration: 0.8 }} // Duración de la animación
              className="textcolor"
            >
              {words[currentWordIndex]}
            </motion.span>
          </h1>
        </div>
      </section>

      {/* Sección de introducción */}
      <motion.div
        className="fo text1 text-left mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className=" fo mb-8 text-4xl font-serif text-gray-900 dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img className="h-16" src="/logo-largo.png " alt="logo de Belkett" />
          <hr></hr>
        </motion.h1>
        <motion.p
          className="fo pa1 mb-3 text-lg text-gray-800 dark:text-gray-400 leading-relaxed"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          En Belkett Flower Shop, transformamos las flores en emociones. Somos
          una floristería comprometida con la excelencia, especializada en la
          creación de arreglos florales para toda ocasión, diseñados para
          transmitir los sentimientos más especiales en los momentos más
          significativos.
        </motion.p>
        <motion.p
          className="fo pa1 text-lg text-gray-800 dark:text-gray-400 leading-relaxed"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <br></br>
          Además, en Belkett nos enorgullece ofrecer un servicio cálido y
          oportuno, entendiendo la importancia de cada entrega como un gesto de
          amor, gratitud o celebración. Estamos disponibles los 365 días del
          año, listos para acompañar a nuestros clientes en cada reencuentro,
          sorpresa y ocasión especial.
        </motion.p>
      </motion.div>

      {/* Sección de productos */}
      <div className="fo container mx-auto p-4 pt-10">
        <motion.h1
          className="fo mb-8 text-4xl font-serif font-bold  text-gray-900 dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          NUESTROS PRODUCTOS
        </motion.h1>
        <div className="fo zoom-container2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="fo w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
              <Link to={product.link}>
                <motion.img
                  className="fo p-8 rounded-t-lg"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
              <div className="px-5 pb-5">
                <Link to={product.link}>
                  <motion.h5
                    className="fo text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {product.name}
                  </motion.h5>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sección de socios estratégicos */}
      <motion.div
        className="bgPorque text1 text-left mt-10 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className=" fo mb-10 text-3xl font-serif textPorque"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          ¿POR QUÉ ELEGIR A BELKETT FLOWER SHOP COMO SU SOCIO COMERCIAL?{" "}
          <i className="text-white fa-solid fa-handshake"></i>
        </motion.h1>
        <motion.p
          className="mb-3 text-lg text-white dark:text-gray-400 leading-relaxed"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          En Belkett Flower Shop somos una empresa con más de 15 años de
          experiencia en el mercado de flores y regalos, comprometida con
          valores sólidos como la responsabilidad, la lealtad y la honestidad.
          Nos enorgullece construir relaciones comerciales basadas en la
          confianza y la transparencia, siempre manteniendo una comunicación
          abierta y efectiva con nuestros socios para asegurar que cada proyecto
          fluya sin contratiempos.
        </motion.p>
        <br></br>
        <motion.p
          className="mb-3 text-lg text-white dark:text-gray-400 leading-relaxed"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestro compromiso con la calidad es inquebrantable. Nos esforzamos
          por ofrecer productos de la más alta calidad, seleccionados
          cuidadosamente para satisfacer las expectativas de nuestros clientes.
          Este enfoque nos ha permitido construir una sólida reputación,
          evidenciada en la satisfacción constante de nuestros clientes y la
          ausencia de quejas sobre nuestros productos o servicios.
        </motion.p>
        <br></br>
        <motion.p
          className="mb-3 text-lg text-white dark:text-gray-400 leading-relaxed"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Además, en Belkett valoramos la mejora continua. Nos mantenemos en
          constante aprendizaje y evolución, adaptándonos a las tendencias del
          mercado y las necesidades de nuestros socios comerciales. Nuestro
          objetivo es no solo cumplir, sino superar las expectativas de quienes
          confían en nosotros. Elegir a Belkett Flower Shop significa contar con
          un socio comprometido, confiable y proactivo, listo para aportar valor
          y contribuir al éxito de sus proyectos.
        </motion.p>
      </motion.div>

      {/* Sección de equipo de trabajo */}
      <motion.div
        className="text1 text-left mt-10 px-6 sm:px-12 lg:px-20 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="mb-8 text-4xl font-serif font-bold text-center text-gray-900 dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          SOCIOS ESTRATÉGICOS{" "}
          <i className="fa-solid fa-arrow-trend-up text-[#d4af37] ml-2"></i>
          <div className="mt-2 h-1 w-24 bg-[#d4af37] mx-auto"></div>
        </motion.h1>
        <motion.p
          className="mb-6 text-lg text-justify text-gray-800 dark:text-gray-400 leading-relaxed"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          En Belkett Flower Shop, creemos que el éxito es el resultado de un
          trabajo en equipo sólido, tanto dentro como fuera de nuestra empresa.
          Por eso, contamos con una red de socios estratégicos que comparten
          nuestro compromiso con la excelencia, la innovación y la satisfacción
          del cliente.
        </motion.p>
        <motion.ul
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.li
            className="flex items-start space-x-3 transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <i className="text-green-500 fas fa-spa text-xl mt-1"></i>
            <div>
              <strong className="text-lg text-gray-900 dark:text-white">
                Productores de flores premium:
              </strong>
              <p className="text-gray-800 dark:text-gray-400 leading-relaxed">
                Trabajamos con plantaciones reconocidas internacionalmente por
                su calidad, garantizando que nuestras flores sean frescas,
                duraderas y visualmente impecables.
              </p>
            </div>
          </motion.li>
          <motion.li
            className="flex items-start space-x-3 transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <i className="text-red-500 fas fa-gift text-xl mt-1"></i>
            <div>
              <strong className="text-lg text-gray-900 dark:text-white">
                Proveedores de complementos:
              </strong>
              <p className="text-gray-800 dark:text-gray-400 leading-relaxed">
                Colaboramos con marcas líderes en chocolates, vinos, peluches y
                otros detalles que enriquecen nuestra oferta y aseguran una
                experiencia completa para nuestros clientes.
              </p>
            </div>
          </motion.li>
          <motion.li
            className="flex items-start space-x-3 transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <i className="text-yellow-400 fas fa-truck text-xl mt-1"></i>
            <div>
              <strong className="text-lg text-gray-900 dark:text-white">
                Empresas de logística:
              </strong>
              <p className="text-gray-800 dark:text-gray-400 leading-relaxed">
                Nos aliamos con socios confiables para garantizar entregas
                rápidas y seguras, manteniendo la frescura y el cuidado de
                nuestros productos.
              </p>
            </div>
          </motion.li>
          <motion.li
            className="flex items-start space-x-3 transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <i className="text-indigo-500 fas fa-paint-brush text-xl mt-1"></i>
            <div>
              <strong className="text-lg text-gray-900 dark:text-white">
                Decoradores y diseñadores florales:
              </strong>
              <p className="text-gray-800 dark:text-gray-400 leading-relaxed">
                Contamos con expertos en diseño floral que aportan creatividad e
                innovación a cada uno de nuestros arreglos, haciéndolos únicos y
                memorables.
              </p>
            </div>
          </motion.li>
        </motion.ul>
        <motion.p
          className="mt-6 text-lg text-justify text-gray-800 dark:text-gray-400 leading-relaxed"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Estas alianzas no solo nos permiten ofrecer productos y servicios de
          la más alta calidad, sino también mantenernos a la vanguardia en
          tendencias y necesidades del mercado. Agradecemos a cada uno de
          nuestros socios por ser parte de la familia Belkett y ayudarnos a
          crear momentos inolvidables para nuestros clientes.
        </motion.p>
      </motion.div>

      {/* Sección de equipo de trabajo */}
      <motion.div
        className="bgPorque text1 text-left mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="mb-10 text-3xl font-serif textPorque"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          NUESTRO EQUIPO DE TRABAJO{" "}
          <i className="text-white fa-solid fa-people-group"></i>
        </motion.h1>

        <motion.p
          className="mb-3 text-lg text-white dark:text-gray-400 leading-relaxed"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          En Belkett Flower Shop, nuestro talento humano es uno de los pilares
          fundamentales de nuestro éxito. Cada miembro de nuestro equipo
          desempeña un rol específico y vital, contribuyendo con su experiencia
          y especialización en sus respectivas áreas. A continuación,
          presentamos a los equipos que hacen posible nuestra operación diaria:
        </motion.p>

        {/* Equipo de Floristería */}
        <motion.div
          className="mt-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-extrabold text-white mb-2">
            · Equipo de Floristería
          </h2>
          <p className="text-lg text-white dark:text-gray-400 leading-relaxed">
            Son los artistas detrás de la elaboración de todos nuestros
            productos a base de flores frescas, incluyendo arreglos, bouquets y
            cajas florales. Su dedicación y creatividad aseguran que cada diseño
            cumpla con los más altos estándares de calidad y belleza.
          </p>
        </motion.div>

        {/* Equipo Administrativo */}
        <motion.div
          className="mt-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-extrabold text-white  mb-2">
            · Equipo Administrativo
          </h2>
          <p className="text-lg text-white dark:text-gray-400 leading-relaxed">
            Este equipo es responsable de la operatividad general de la empresa.
            Gestionan procesos internos, logística, finanzas y aseguran que todo
            funcione de manera eficiente y ordenada.
          </p>
        </motion.div>

        {/* Equipo de Publicidad y Marketing */}
        <motion.div
          className="mt-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-extrabold text-white mb-2">
            · Equipo de Publicidad y Marketing
          </h2>
          <p className="text-lg text-white dark:text-gray-400 leading-relaxed">
            Encargados de dar a conocer nuestra marca y productos. Diseñan
            campañas estratégicas, manejan nuestras redes sociales y se aseguran
            de que el mensaje de Belkett llegue a nuestros clientes de manera
            efectiva y atractiva.
          </p>
        </motion.div>

        {/* Equipo de Ventas */}
        <motion.div
          className="mt-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            · Equipo de Ventas
          </h2>
          <p className="text-lg text-white dark:text-gray-400 leading-relaxed">
            Este grupo es el rostro directo de Belkett con nuestros clientes. Se
            encargan de brindar una atención personalizada, asesorar en la
            selección de productos y garantizar una experiencia de compra
            excepcional.
          </p>
        </motion.div>

        {/* Filosofía de trabajo */}
        <motion.p
          className="mt-6 text-lg text-white dark:text-gray-400 leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Aunque cada equipo tiene un rol específico, en Belkett fomentamos un
          ambiente de colaboración donde todos aportan su experiencia, ideas y
          apoyo cuando es necesario. Nos preocupamos por el desarrollo personal
          y profesional de cada colaborador, brindándoles la libertad de tomar
          iniciativas, proponer mejoras y desempeñar sus funciones con autonomía
          dentro de los lineamientos establecidos.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;
