import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { Nosotros } from "../Nosotros/Nosotros";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const PageNosotros = () => {
  const valores = [
    {
      title: "Calidad",
      desc: "Ofrecemos productos de marcas líderes y servicios que garantizan el rendimiento y la durabilidad de tu maquinaria.",
    },
    {
      title: "Innovación",
      desc: "Nos mantenemos a la vanguardia de la tecnología agrícola para proporcionar soluciones eficientes y modernas.",
    },
    {
      title: "Servicio",
      desc: "Nuestro equipo de profesionales está siempre dispuesto a asesorarte y brindarte el soporte necesario para que tus operaciones agrícolas sean exitosas.",
    },
    {
      title: "Compromiso",
      desc: "Nos comprometemos con la satisfacción de nuestros clientes, trabajando de la mano contigo para superar cualquier desafío.",
    },
  ];

  return (
    <Parallax
      pages={2.7}
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
            objectPosition: "bottom",
            // opacity: 0.6,
          }}
          src="/evento.jpg"
          alt="Background"
        />
        <div className="img-fondo"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.7} speed={0.3}>
        <Nosotros></Nosotros>
      </ParallaxLayer>
      <ParallaxLayer offset={1.6} speed={0.4}>
        <div className="py-5 bg-warning">
          <div className="container ">
            <span className="bg-dark text-white px-2 rounded-0 ">Valores</span>
            <h3 className="fw-bold fs-1 ">Valores que Nos Definen</h3>
            <p>
              En Sel Agropauny, no solo vendemos maquinaria agrícola de calidad,
              sino que también ofrecemos una gama completa de servicios para
              asegurar que su Pauny siempre funcione al máximo rendimiento.
            </p>
            <p>
              Estamos aquí para ayudarte a impulsar tu productividad agrícola.
              Visítanos, llámanos o envíanos un mensaje para conocer más sobre
              cómo podemos colaborar contigo. En Sel Agropauny, tu éxito es
              nuestro objetivo.
            </p>
          </div>
          <section
            className="container gap-4"
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexBasis: "200px",
            }}
          >
            {valores.map((valor, index) => {
              return (
                <article key={index} className="p-3 shadow col-12 col-lg">
                  <h6 className="fw-bold d-flex align-items-center">
                    <FaArrowAltCircleRight className="me-2" />
                    {valor.title}
                  </h6>
                  <p
                    style={{
                      fontSize: ".9em",
                    }}
                  >
                    {valor.desc}
                  </p>
                </article>
              );
            })}
          </section>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};
