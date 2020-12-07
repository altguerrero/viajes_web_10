import * as React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "../Icons";
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
const Footer = () => {
  return (
    <footer className="container relative">
      <div className="absolute top-0 left-0 z-50 w-full h-full bg-white pt-12">
        <div className="text-center text-5xl font-bold text-primary-light bg-white">
          Logo
        </div>
        <div className="w-full bg-white pt-12 pb-12 lg:pb-24">
          <div className="w-2/3 mx-auto grid md:grid-cols-3 gap-4 lg:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-secondary-normal text-center mb-4 md:mb-8">
                Hablemos
              </h3>
              <p className="text-secondary-normal text-xs text-center leading-relaxed	">
                The quick, brown fox jumps over a lazy dog. DJs flock by when
                MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,
                flick quartz, vex nymphs. Waltz, bad nymph, for quick . <br />
                Fox nymphs +571 325 458 4521 Brent ak mercadeo@momentum.com
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-secondary-normal text-center mb-4 md:mb-8">
                Menú
              </h3>
              <ul className="flex flex-col ">
                {links.map((link) => (
                  <li className="text-sm text-center sm:text-lg mb-2 cursor-pointer transition duration-200  text-secondary-normal hover:text-primary-light">
                    <Link
                      className="cursor-pointer"
                      offset={-100}
                      to={link.url}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-secondary-normal text-center mb-4 md:mb-8">
                Nuestras Redes
              </h3>
              <div className="grid grid-cols-2 gap-8 mx-auto w-24">
                <a
                  className="flex justify-center items-center"
                  href="https://www.facebook.com/colraices/"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Facebook wh="w-4 h-4 transition duration-200 text-secondary-normal hover:text-primary-light" />
                </a>
                <a
                  className="flex justify-center items-center"
                  href="https://www.instagram.com/colraices/?hl=es-la"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Instagram wh="w-4 h-4 transition duration-200 text-secondary-normal hover:text-primary-light" />
                </a>
                <a
                  className="flex justify-center items-center"
                  href="https://twitter.com/colraices?lang=es"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Twitter wh="w-4 h-4 transition duration-200 text-secondary-normal hover:text-primary-light" />
                </a>
                <a
                  className="flex justify-center items-center"
                  href="https://www.youtube.com/channel/UCiBystYzqzabHULJWwgAjnw"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Youtube wh="w-4 h-4 transition duration-200 text-secondary-normal hover:text-primary-light" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
