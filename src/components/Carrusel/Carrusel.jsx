import "./Carrusel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { Fade } from "react-awesome-reveal";

export const Carrusel = () => {
  return (
    <>
      <div className="aparecer bg-white py-5">
        <div className="container ">
          <span className="bg-warning text-dark px-2 rounded-0 ">Galeria</span>
          <h3 className="fw-bold fs-1">Momentos Sel Agropauny</h3>
          <p>
            En Sel Agropauny, no solo vendemos maquinaria agrícola de calidad,
            sino que también ofrecemos una gama completa de servicios para
            asegurar que su Pauny siempre funcione al máximo rendimiento.
          </p>
        </div>
        <div
          id="screenshots"
          className="container  d-flex flex-column align-items-center justify-content-center"
          style={{
            minHeight: "90vh",
          }}
        >
          <Swiper
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2500, // Delay between transitions in ms
              disableOnInteraction: false, // Continuar autoplay cuando se interactúa con los controles
              stopOnLastSlide: false, // Asegurarse de que no se detiene en la última diapositiva
              reverseDirection: false, // Para que el Swiper no cambie de dirección automáticamente
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 10,
              modifier: 3,
              slideShadows: true,
            }}
            initialSlide={1}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="swiper_container"
          >
            {[...Array(4)].map((_, index) => {
              return (
                <SwiperSlide key={index}>
                  <Fade>
                    <img
                      // src={"./" + (index + 1) + ".jpg"}
                      //   src="./fondo.jpg"
                      src={index % 2 == 0 ? "fondo.jpg" : "tractor1.jpg"}
                      width={"100%"}
                      style={{
                        height: "60vh",
                        // maxHeight: "90vh",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt={"imagen-slide " + (index + 1)}
                    />
                  </Fade>
                </SwiperSlide>
              );
            })}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="swiper-button-next slider-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};
