import { Fade } from "react-awesome-reveal";
import "./Hero.css";
import { Button } from "@mui/material";
export const Hero = () => {
  return (
    <div
      style={{
        zIndex: "4",
        // minHeight: "90vh",
        // maxWidth: "900px",
      }}
      className="aparecer container py-5 justify-content-center d-flex flex-column align-items-start"
    >
      <Fade duration={500}>
        <h1 className="text-white border-start ps-2 fw-bold d-flex flex-column justify-content-end">
          <span
            style={{
              fontSize: ".7em",
            }}
          >
            Potencia y Confiabilidad
          </span>
          <span
            style={{
              fontSize: ".7em",
            }}
          >
            en el Campo con
          </span>
          <span
            style={{
              color: "rgba(255,222,0,.9)",
              fontSize: "1.3em",
            }}
          >
            Tractores Pauny
          </span>
        </h1>
      </Fade>
      <Fade duration={1500}>
        <p
          className="col-md-8 col-12 text-white text-opacity-75"
          style={{
            fontSize: ".9em",
          }}
        >
          En Sel Agropauny, te ofrecemos la mejor maquinaria agrícola, repuestos
          originales y servicios especializados para maximizar tu productividad.
        </p>
      </Fade>
      <Fade duration={1000} delay={500}>
        <div className="d-flex gap-3">
          {/* <Button variant="outlined">Ver Tractores</Button> */}
          <Button
            href="#formulario"
            variant="contained"
            style={{
              backgroundColor: "rgba(255,222,0,.9)",
              color: "#000",
            }}
          >
            Contáctanos
          </Button>
        </div>
      </Fade>
    </div>
  );
};
