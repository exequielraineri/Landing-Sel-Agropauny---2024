import React from "react";
import "./Servicios.css";
import {
  Fa500Px,
  FaAcquisitionsIncorporated,
  FaArrowCircleRight,
  FaArrowCircleUp,
  FaCalculator,
} from "react-icons/fa";
export const Servicios = () => {
  const servicios = [
    {
      title: "Mantenimiento Preventivo",
      desc: "Prolonga la vida útil de tu tractor Pauny con nuestros programas de mantenimiento preventivo. Nuestros técnicos especializados realizan inspecciones regulares y ajustan cada componente para evitar averías y mantener tu equipo en óptimas condiciones.",
      benf: [
        {
          title: "Prevención de Averías",
          desc: "Detecta y soluciona problemas antes de que se conviertan en reparaciones costosas.",
        },
        {
          title: "Mayor Durabilidad",
          desc: "Extiende la vida útil de tu maquinaria con cuidados regulares.",
        },
        {
          title: "Eficiencia Operativa",
          desc: "Mantén tu tractor funcionando con el máximo rendimiento.",
        },
      ],
    },
    {
      title: "Reparaciones Especializadas",
      desc: "Confía en nuestro equipo de expertos para realizar cualquier tipo de reparación en tu tractor Pauny. Utilizamos repuestos originales y técnicas avanzadas para garantizar que tu maquinaria vuelva a estar operativa en el menor tiempo posible.",
      benf: [
        {
          title: "Repuestos Originales",
          desc: "Garantía de calidad y compatibilidad con tu equipo.",
        },
        {
          title: "Servicio Rápido",
          desc: "Minimiza el tiempo de inactividad de tu maquinaria.",
        },
      ],
    },
    {
      title: "Asesoramiento Técnico",
      desc: "Nuestro equipo de especialistas está a tu disposición para ofrecerte asesoramiento técnico personalizado. Ya sea que necesites ayuda con la elección del equipo adecuado, ajustes técnicos o soluciones específicas para tus necesidades agrícolas, estamos aquí para ayudarte.",
      benf: [
        {
          title: "Experiencia y Conocimiento",
          desc: "Asesoramiento basado en años de experiencia y conocimientos profundos del sector agrícola.",
        },
        {
          title: "Soluciones Personalizadas",
          desc: "Respuestas y soluciones adaptadas a las necesidades particulares de tu operación.",
        },
        {
          title: "Soporte Continuo",
          desc: "Asistencia técnica disponible siempre que la necesites.",
        },
      ],
    },
  ];
  return (
    <div
      className=" bg-opacity-75 container-fluid py-5 "
      style={{
        backgroundColor: "rgba(255,255,255,.9)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container ">
        <span className="bg-warning text-dark px-2 rounded-0 ">Servicios</span>
        <h3 className="fw-bold fs-1">Servicios Especializados</h3>
        <p>
          En Sel Agropauny, no solo vendemos maquinaria agrícola de calidad,
          sino que también ofrecemos una gama completa de servicios para
          asegurar que su Pauny siempre funcione al máximo rendimiento.
        </p>
      </div>
      <section className="d-flex mx-auto justify-content-start gap-5 container flex-wrap">
        {servicios.map((serv, index) => {
          return (
            <article key={index} className="col-12 rounded-1 ">
              <h6 className="fw-bold border-bottom border-warning p-1 rounded-1">
                <FaArrowCircleRight className="me-2" />
                {serv.title}
              </h6>
              <p
                style={{
                  fontSize: ".9em",
                }}
              >
                {serv.desc}
              </p>
              <ul
                style={{
                  fontSize: ".9em",
                }}
              >
                {serv.benf.map((ben, index) => {
                  return (
                    <li key={index}>
                      <b>{ben.title}: </b>
                      {ben.desc}
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </section>
    </div>
  );
};
