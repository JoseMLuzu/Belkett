import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import WhatsAppButton from "./components/WppButton";

import Home from "./pages/Home";
import Nosotros from "./pages/Historia";
import Contacto from "./pages/Contacto";
//import CataloTodo from "./pages/CataloTodo";
import Bouquets from "./pages/categorias/Bouquets";
import ArreglosFlorales from "./pages/categorias/ArreglosFlorales";
import CajasFlorales from "./pages/categorias/CajasFlorales";
import Floreros from "./pages/categorias/Floreros";
import RamosDeNovia from "./pages/categorias/RamosDeNovia";
import Plantas from "./pages/categorias/Plantas";
import Accesorios from "./pages/categorias/Accesorios";
import ScrollToTop from "./components/ScroolToTop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/bouquets" element={<Bouquets />} />
          <Route path="/arreglos-florales" element={<ArreglosFlorales />} />
          <Route path="/cajas-florales" element={<CajasFlorales />} />
          <Route path="/floreros" element={<Floreros />} />
          <Route path="/ramos-de-novia" element={<RamosDeNovia />} />
          <Route path="/plantas" element={<Plantas />} />
          <Route path="/accesorios" element={<Accesorios />} />
        </Routes>
        <WhatsAppButton />
        <ConditionalFooterBanner />
        <Footer />
        <ScrollToTop />
      </Router>
    </>
  );
}

// Componente condicional para FooterBanner
function ConditionalFooterBanner() {
  const location = useLocation();
  const excludedPaths = ["/nosotros", "/contacto", "/"];

  return !excludedPaths.includes(location.pathname) ? <FooterBanner /> : null;
}

export default App;
