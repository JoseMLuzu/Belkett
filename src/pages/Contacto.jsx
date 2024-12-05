import React from "react";
import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import "../styles/Contacto.css";
const Contacto = () => {
  return (
    <div className="contacto bg-gradient-to-b from-gray-100 to-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Contáctanos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Información de Contacto */}
          <div className="bgcontacto shadow-xl rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 border-b-2 pb-2">
              Información de Contacto
            </h3>
            <ul className="space-y-6">
              <li className="mrg">
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Teléfono
                </h4>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 text-lg">
                    (+593) 998474689
                  </span>
                </div>
              </li>
              <li className="mrg">
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Correo Electrónico
                </h4>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 text-lg">
                    mgaguilars@gmail.com
                  </span>
                </div>
              </li>
              <li className="">
                <h4 className="text-xl font-bold text-gray-800 mb-6">
                  Nuestras Redes Sociales
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FaFacebook className="text-blue-600 text-xl" />
                    <a
                      href="https://www.facebook.com/people/Belkett/100091549671261/?mibextid=kFxxJD&rdid=NCp6xsYTWB35Yt6C&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DUME7JHe4%2F%3Fmibextid%3DkFxxJD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text--600 hover:underline text-lg"
                    >
                      Facebook
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaTiktok className="text-black text-xl" />
                    <a
                      href="https://www.tiktok.com/@belkett_flowershop?_t=ZM-8rtaGALOt0C&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black hover:underline text-lg"
                    >
                      TikTok
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaInstagram className="text-red-700 text-xl" />
                    <a
                      href="https://www.instagram.com/belkett_flowershop/?igsh=MTRjeHFybHF0dWFxeA%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-600 hover:underline text-lg"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Mapas y Direcciones */}
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 border-b-2 pb-2">
              Ubicaciones
            </h3>

            <div className="mb-8">
              <h4 className="text-xl  font-bold text-gray-800 mb-6">
                Sucursal Principal
              </h4>
              <p className="text-gray-600 mb-3">
                Nuevo Aeropuerto Internacional Mariscal Sucre de Quito, Hall
                Público Arribo Internacional, Quito, Ecuador
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8089431497265!2d-78.36314332424973!3d-0.12422173546163787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58db4352baa87%3A0x2f9f7623e0894b8b!2sAeropuerto%20Internacional%20Mariscal%20Sucre!5e0!3m2!1ses!2sec!4v1733265835500!5m2!1ses!2sec"
                className="w-full h-80 rounded-lg border-2"
                allowFullScreen=""
                loading="lazy"
                title="Mapa Oficina Principal"
              ></iframe>
            </div>

            <div>
              <h4 className="text-xl  font-bold text-gray-800 mb-6">
                Oficinas
              </h4>
              <p className="text-gray-600 mb-3">
                Francisco Miranda y Nicolas Lopez, Quito, Ecuador
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4883.734745006609!2d-78.49443823749878!3d-0.14881757578192822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59befe3cd2875%3A0xae716e1f474f727!2sBelkett%20Flower%20Shop!5e0!3m2!1ses!2sec!4v1733265687851!5m2!1ses!2sec"
                className="w-full h-80 rounded-lg border-2"
                allowFullScreen=""
                loading="lazy"
                title="Mapa Sucursal"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
