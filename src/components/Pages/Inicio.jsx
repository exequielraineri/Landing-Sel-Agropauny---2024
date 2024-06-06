import React from "react";
import { Hero } from "../Hero/Hero";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Button, TextField } from "@mui/material";
import { Fade } from "react-awesome-reveal";
export const Inicio = () => {
  return (
    <div>
      <Parallax
        pages={2.5}
        style={{
          top: 0,
          left: 0,
        }}
      >
        <ParallaxLayer factor={1.2} offset={0} speed={-0.2}>
          <img
            className="aparecer-fondo"
            style={{
              zIndex: "0",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              objectPosition: "top",
            }}
            loading="eager"
            src="./fondo.jpg"
            alt="Background"
          />
          <div className="img-fondo"></div>
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            zIndex: "4",
          }}
          offset={0.1}
          speed={1}
        >
          <Hero></Hero>
        </ParallaxLayer>
        <ParallaxLayer factor={1.5} offset={0.8} speed={0.6}>
          <div
            className=" aparecer container-fluid bg-light my-5 py-5 d-flex flex-column align-items-center"
            style={{
              position: "relative",
              minHeight: "200vh",
              clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
            }}
          >
            <div className="container ">
              <span className="bg-warning px-2 rounded-0 ">Rubro</span>
              <h3 className="fw-bold fs-1">Empresa de Maquinarias Agricolas</h3>
            </div>
            <p className="container ">
              Una empresa argentina líder en el rubro metalmecánico, reconocida
              por la producción de una completa gama de tractores de mediana y
              alta potencia, y de una sólida maquinaria vial. La fuerza que
              elige la mayoría para dar soluciones concretas al crecimiento y al
              desarrollo de tareas productivas -tanto agropecuarias como viales-
              en el país
            </p>
            <img
              className="container"
              src="/evento.jpg"
              width={"100%"}
              height={"300px"}
              style={{
                // maxWidth: "1000px",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={1.5} speed={1}>
          <div
            className="container-fluid bg-warning py-5 my-4 d-flex flex-column align-items-center"
            style={{
              minHeight: "200vh",
            }}
          >
            <div className="container ">
              <span className="bg-dark text-white px-2 rounded-0 ">
                Contacto
              </span>
              <h3 className="fw-bold fs-1">Estamos para vos!</h3>
            </div>
            <p className="container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate repudiandae mollitia animi cum odit recusandae
              blanditiis autem officiis illum exercitationem!
            </p>
            <div className="d-flex bg-light p-3 gap-3 container">
              <form className="col-12 col-md-8">
                <Fade cascade damping={0.1}>
                  <TextField
                    className="col-12"
                    variant="filled"
                    label="Nombre y Apellido"
                    type="text"
                  />
                  <TextField
                    className="col-12  mt-3"
                    variant="filled"
                    label="Localidad"
                    type="text"
                  />
                  <TextField
                    className="col-12  mt-3"
                    variant="filled"
                    label="Teléfono"
                    type="tel"
                  />
                  <TextField
                    className="col-12  mt-3"
                    variant="filled"
                    label="Email"
                    type="email"
                  />
                  <TextField
                    className="col-12  mt-3"
                    multiline
                    rows={4}
                    variant="filled"
                    label="Mensaje"
                    type="text"
                  />
                  <Button
                    className="mt-3 col-4 float-end"
                    style={
                      {
                        // width: "100%",
                      }
                    }
                    variant="contained"
                  >
                    Enviar
                  </Button>
                </Fade>
              </form>

              <div>
                <img
                  src="/tractor1.jpg"
                  width={"100%"}
                  height={"100%"}
                  className="col-12"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.39}
          style={{
            zIndex: "0",
          }}
          speed={0.8}
        >
          <div className="container aparecer">
            <img
              className="float-end"
              src="./evo.png"
              width={"100%"}
              style={{
                maxWidth: "500px",
              }}
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
