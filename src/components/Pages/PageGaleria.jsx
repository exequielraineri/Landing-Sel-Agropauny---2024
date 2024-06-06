import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { Carrusel } from "../Carrusel/Carrusel";

export const PageGaleria = () => {
  return (
    <Parallax
      pages={3}
      style={{
        top: 0,
        left: 0,
      }}
    >
      <ParallaxLayer factor={1.2} offset={0} speed={-0.2}>
        <img
          className="aparecer-fondo"
          style={{
            zIndex: "-4",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.6,
          }}
          src="/fondo.jpg"
          alt="Background"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.7} speed={0.3}>
        <Carrusel></Carrusel>
      </ParallaxLayer>
    </Parallax>
  );
};
