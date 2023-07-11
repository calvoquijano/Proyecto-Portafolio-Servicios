import React from "react";
import AlgunosTrabajos from "./AlgunosTrabajos/AlgunosTrabajos";
import SobreMi from "./SobreMi/SobreMi";
import stylesHome from "./Home.module.css"


const Home = () => {
  return (
    <div className={stylesHome.container}>
      <SobreMi />
      <AlgunosTrabajos />
    </div>
  );
};

export default Home;
