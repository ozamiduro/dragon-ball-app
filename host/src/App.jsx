import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "mf_navbar/Navbar";

import NotFound from "./pages/NotFound";

import "./index.scss";

import Loader from "./components/Loader";
import { Error } from "./components/Error";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PersonajesPage = lazy(() => import("./pages/PersonajesPage"));
const DetallePersonajePage = lazy(() => import("./pages/DetallePersonajePage"));
const DetallePlanetPage = lazy(() => import("./pages/DetallePlanetPage"));

const App = () => (
  <BrowserRouter>
    <Navbar />

    <div className="mx-20 mt-10">
      <Routes>
        <Route
          path="/"
          element={
            <Error>
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            </Error>
          }
        />

        <Route
          path="/personajes"
          element={
            <Error>
              <Suspense fallback={<Loader />}>
                <PersonajesPage />
              </Suspense>
            </Error>
          }
        />

        <Route
          path="/personajes/:name"
          element={
            <Error>
              <Suspense fallback={<Loader />}>
                <DetallePersonajePage />
              </Suspense>
            </Error>
          }
        />

        <Route
          path="/planet/:name"
          element={
            <Error>
              <Suspense fallback={<Loader />}>
                <DetallePlanetPage />
              </Suspense>
            </Error>
          }
        />

        <Route
          path="/about"
          element={
            <Error>
              <Suspense fallback={<Loader />}>
                <AboutPage />
              </Suspense>
            </Error>
          }
        />

        {/* Manejo de Rutas no agregadas */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
