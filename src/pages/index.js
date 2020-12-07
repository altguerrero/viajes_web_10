import * as React from "react";

import Hero from "../components/Hero";
import Side from "../components/Side";
import TabImage from "../components/TabImage";
import Eperiencias from "../components/Experiencias";
import Contact from "../components/Contact";
import Banner from "../components/Banner";
import Footer from "../components/Footer"

import { Map, Calendar, Route } from "../components/Icons";
import { useStaticQuery, graphql } from "gatsby";

// data
const links = [
  {
    text: "Destinos",
    url: "#",
  },
  {
    text: "Planes",
    url: "#",
  },
  {
    text: "Contacto",
    url: "#",
  },
];

// markup
const IndexPage = () => {
  return (
    <>
      <header className="h-16 w-full bg-white  opacity-75 fixed top-0 z-40 shadow">
        <div className="container flex">
          <div className="text-yellow-500 w-40 flex h-16 items-center justify-center">
            Logo
          </div>
          <nav className="navigation h-16 flex items-center">
            <ul className="flex">
              {links.map((link) => (
                <li className="text-lg mr-8 uppercase">
                  <a>{link.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <Hero></Hero>
      <Side></Side>

      {/*Section 1  */}
      <section className="container">
        <div className="h-24 w-1 bg-primary-light mx-auto mb-12"></div>
        <div className="text-center mb-12">
          <h2 className="leading-6 text-lg text-secondary-light font-semibold">
            Reserva tu viaje
          </h2>
          <p className="leading-6 text-2xl text-secondary-light font-bold">
            Y vive la experiencia
          </p>
          <p className="leading-6 text-2xl text-primary-light font-bold">
            de recorrer el mundo
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 w-2/3 mx-auto">
          <div className="flex flex-col items-center">
            <Map wh="text-secondary-normal w-16 h-16 mb-8" />
            <p className="text-base text-center text-secondary-normal">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Calendar wh="text-secondary-normal w-16 h-16 mb-8" />
            <p className="text-base text-center text-secondary-normal">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Route wh="text-secondary-normal w-16 h-16 mb-8" />
            <p className="text-base text-center text-secondary-normal">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="container mt-12">
        <div className="h-24 w-1 bg-primary-light mx-auto mb-12"></div>
        <div className="w-2/3 mx-auto mb-12">
          <div className="text-left mb-12">
            <h2 className="leading-6 text-lg text-secondary-light font-semibold">
              Elige tu
            </h2>
            <p className="leading-6 text-2xl text-primary-light font-bold">
              Destino
            </p>
          </div>
          <p className="text-center text-base text-secondary-normal">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          </p>
        </div>

        <TabImage></TabImage>
      </section>

      {/* Section 3 */}
      {/* Section 2 */}
      <section className="container mt-12">
        <div className="h-24 w-1 bg-primary-light mx-auto mb-12"></div>
        <div className="w-2/3 mx-auto mb-12">
          <div className="text-center mb-12">
            <h2 className="leading-6 text-lg text-secondary-light font-semibold">
              Elige el tipo de
            </h2>
            <p className="leading-6 text-2xl text-secondary-light font-bold">
              experiencia
            </p>
            <p className="leading-6 text-2xl text-primary-light font-bold">
              que quieres vivir
            </p>
          </div>
          <p className="text-center text-base text-secondary-normal">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          </p>
        </div>
      </section>

      <Eperiencias />
      <Contact />
      <Banner />
      <Footer />
    </>
  );
};

export default IndexPage;
