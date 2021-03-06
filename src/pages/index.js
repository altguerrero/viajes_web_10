import * as React from "react";

import Hero from "../components/Hero";
import Side from "../components/Side";
import Info from "../components/Info";
import Gallery from "../components/Gallery";

import Eperiencias from "../components/Experiencias";
import Contact from "../components/Contact";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import { Link, animateScroll as scroll } from "react-scroll";

// data
const links = [
  {
    text: "Destinos",
    url: "destinos",
  },
  {
    text: "Planes",
    url: "planes",
  },
  {
    text: "Contacto",
    url: "contacto",
  },
];

// markup
const IndexPage = () => {
  return (
    <>
      <header className="h-16 w-full bg-white  opacity-75 fixed top-0 z-40 shadow">
        <div className="container flex">
          <div className="text-primary-light px-4 text-sm sm:text-lg sm:w-40 font-bold flex h-16 items-center justify-center">
            <Link className="cursor-pointer transition-all duration-200 hover:opacity-75" offset={-100} to="inicio">Logo</Link>
          </div>
          <nav className="navigation w-full sm:w-auto h-16 flex items-center">
            <ul className="flex">
              {links.map((link) => (
                <li className="text-sm sm:text-lg mr-4 sm:mr-8 uppercase">
                  <Link
                    className="cursor-pointer transition duration-200 py-4 text-secondary-normal hover:text-primary-light"
                    offset={-100}
                    to={link.url}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <Hero></Hero>
      <Side></Side>
      <Info></Info>
      <Gallery></Gallery>
      <Eperiencias />
      <Contact />
      <Banner />
      <Footer />
    </>
  );
};

export default IndexPage;
