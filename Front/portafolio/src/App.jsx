import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import Footer from "./Components/Layouts/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import Experiencia from "./Components/Pages/Experiencia/Experiencia";
import Habilidades from "./Components/Pages/Habilidades/Habilidades";
import Servicios from "./Components/Pages/Servicios/Servicios";
import Trabajo from "./Components/Pages/Trabajo/Trabajo";
import NotFound from "./Components/Pages/NotFound/NotFound";




function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route element={<Footer />}>
            <Route path="/" element={<Home />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/trabajo" element={<Trabajo />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
