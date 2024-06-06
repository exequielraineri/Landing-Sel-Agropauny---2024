import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Hero } from "./components/Hero/Hero";
import { NavbarComponent } from "./components/Navbar/Navbar";
import "./App.css";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { Servicios } from "./components/Servicios/Servicios";
import { FaPlus } from "react-icons/fa";
import CountUp from "react-countup";
import { Rutes } from "./components/Rutas/Rutes";
import { Outlet } from "react-router-dom";
function App() {
  const parallaxRef = useRef(null);

  return (
    <div>
      {/* Imagen de fondo */}

      {/* Navbar */}
      <div style={{ position: "fixed", width: "100%", zIndex: "10" }}>
        <NavbarComponent />
      </div>
      <Rutes></Rutes>
      <Outlet></Outlet>
      {/* Parallax */}
      {/* <Parallax
        ref={parallaxRef}
        pages={4}
        config={{ damping: 0.4 }}
        style={{ top: "0", left: "0" }}
      >
        <ParallaxLayer factor={1.2} offset={0} speed={-0.1}>
          <img
            style={{
              zIndex: "-4",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              opacity: 0.6,
            }}
            src="/fondo.jpg"
            alt="Background"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.5}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.3}>
          <Servicios />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
          <Nosotros />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={1}></ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.8}></ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}></ParallaxLayer>
      </Parallax> */}
    </div>
  );
}

export default App;
