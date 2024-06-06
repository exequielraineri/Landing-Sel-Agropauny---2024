import React from "react";

export const Nosotros = () => {
  return (
    <div className=" aparecer container-fluid bg-light py-5">
      <div className="container ">
        <span className="bg-warning text-dark px-2 rounded-0 ">
          Sobre Nosotros
        </span>
        <h3 className="fw-bold fs-1">Empresa Sel Agropauny</h3>
        <p>
          En Sel Agropauny, nos dedicamos a ofrecer soluciones integrales para
          el sector agrícola, proporcionando una amplia gama de tractores Pauny,
          repuestos de alta calidad y servicios especializados. Nuestra misión
          es apoyar a los agricultores en cada paso del camino, desde la
          adquisición de maquinaria confiable hasta el mantenimiento y
          reparación de sus equipos.
        </p>
        <div className="d-flex justify-content-center">
          <img
            src="/evento.jpg"
            width={"100%"}
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};
