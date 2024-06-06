import React from "react";
import { Routes, Route } from "react-router-dom";
import { Hero } from "../Hero/Hero";
import { Servicios } from "../Servicios/Servicios";
import { Nosotros } from "../Nosotros/Nosotros";
import { Inicio } from "../Pages/Inicio";
import { PageServicios } from "../Pages/PageServicios";
import { PageNosotros } from "../Pages/PageNosotros";
import { PageGaleria } from "../Pages/PageGaleria";
export const Rutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio></Inicio>}></Route>
      <Route
        path="/servicios"
        element={<PageServicios></PageServicios>}
      ></Route>
      <Route path="/nosotros" element={<PageNosotros></PageNosotros>}></Route>
      <Route path="/galeria" element={<PageGaleria></PageGaleria>}></Route>
    </Routes>
  );
};
