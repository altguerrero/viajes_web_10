import * as React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "../Icons";

// markup
const Footer = () => {
  return (
    <footer className="container relative">
      <div className="absolute top-0 left-0 z-50 w-full h-full bg-white pt-12">
        <div className="text-center text-5xl font-bold text-primary-light bg-white">
          Logo
        </div>
        <div className="w-full bg-white pt-12 pb-24">
          <div className="w-2/3 mx-auto grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-secondary-normal text-center mb-8">
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
              <h3 className="text-lg font-semibold text-secondary-normal text-center mb-8">
                Menú
              </h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary-normal text-center mb-8">
                Nuestras Redes
              </h3>
              <div className="grid grid-cols-2 gap-8 mx-auto w-24">
                <a className="flex justify-center items-center" href="#">
                  <Facebook wh="w-4 h-4 text-secondary-normal" />
                </a>
                <a className="flex justify-center items-center" href="#">
                  <Instagram wh="w-4 h-4 text-secondary-normal" />
                </a>
                <a className="flex justify-center items-center" href="#">
                  <Twitter wh="w-4 h-4 text-secondary-normal" />
                </a>
                <a className="flex justify-center items-center" href="#">
                  <Youtube wh="w-4 h-4 text-secondary-normal" />
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
