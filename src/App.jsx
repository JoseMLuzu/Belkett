import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/wppButton";

import Home from "./pages/Home";
import Historia from "./pages/Historia";
import CataloTodo from "./pages/CataloTodo";
import Bouquets from "./pages/categorias/Bouquets";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/todo" element={<CataloTodo />} />
          <Route path="/bouquets" element={<Bouquets />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;
