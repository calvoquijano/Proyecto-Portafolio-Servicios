import React from "react";
import Categorias from "./Categorias/Categorias";
import SobreMi from "./SobreMi/SobreMi";
import stylesHome from "./Home.module.css"


const Home = () => {
  return (
    <div className={stylesHome.container}>
      <SobreMi />
      <Categorias />
    </div>
  );
};

export default Home;
