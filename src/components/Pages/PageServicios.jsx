import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { Servicios } from "../Servicios/Servicios";

export const PageServicios = () => {
  const isMobile = window.innerWidth < 1000;
  return (
    <Parallax pages={isMobile ? 2.4 : 2} style={{ top: 0, left: 0 }}>
      {/* Background Image Layer */}
      <ParallaxLayer factor={2} offset={0} speed={-0.2}>
        <img
          className="aparecer-fondo"
          style={{
            zIndex: "-4",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.6,
          }}
          src="/tractor1.jpg"
          alt="Background"
        />
      </ParallaxLayer>
      <ParallaxLayer factor={isMobile ? 1.5 : 1.3} offset={0.7} speed={0.2}>
        <div
          className=" container-fluid py-5 aparecer"
          style={{
            maxWidth: "1200px",
            minHeight: isMobile ? "150vh" : "100vh",
          }}
        >
          <Servicios />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};
