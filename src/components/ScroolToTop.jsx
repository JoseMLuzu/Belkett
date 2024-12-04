import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Hace que el desplazamiento sea suave
    });
  }, [pathname]); // Se ejecuta cada vez que cambia el path

  return null;
};

export default ScrollToTop;
