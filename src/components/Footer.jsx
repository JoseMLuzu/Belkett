import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src="/logo-largo.png" className="h-10" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://www.tiktok.com/@belkett_flowershop?_t=ZM-8rtaGALOt0C&_r=1"
                  className="hover:underline me-4 md:me-6"
                  target="_blank"
                >
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/belkett_flowershop/?igsh=MTRjeHFybHF0dWFxeA%3D%3D"
                  className="hover:underline me-4 md:me-6"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Belkett/100091549671261/?mibextid=kFxxJD&rdid=NCp6xsYTWB35Yt6C&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DUME7JHe4%2F%3Fmibextid%3DkFxxJD"
                  className="hover:underline me-4 md:me-6"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <Link to="/contacto" className="hover:underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <span className="">Belkett™</span>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
