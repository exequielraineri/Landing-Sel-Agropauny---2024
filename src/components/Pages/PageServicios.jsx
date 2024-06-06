import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { Servicios } from "../Servicios/Servicios";

export const PageServicios = () => {
  const isMobile = window.innerWidth < 1000;
  return (
    <Parallax pages={2.8} style={{ top: 0, left: 0 }}>
      {/* Background Image Layer */}
      <ParallaxLayer factor={2} offset={0} speed={-0.2}>
        <img
          className="aparecer-fondo "
          style={{
            zIndex: "0",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "center",
          }}
          src="./tractor1.jpg"
          alt="Background"
        />
        <div className="img-fondo"></div>
      </ParallaxLayer>
      <ParallaxLayer factor={isMobile ? 1.5 : 1.3} offset={0.7} speed={0.2}>
        <div
          className="py-5 aparecer"
          style={
            {
              // maxWidth: "1200px",
              // minHeight: isMobile ? "200vh" : "200vh",
            }
          }
        >
          <Servicios />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};
