import * as React from "react";
import TabImage from "../TabImage";

// markup
const Gallery = () => {
  return (
    <section id="planes" className="container mt-12">
      <div className="h-24 w-1 bg-primary-light mx-auto mb-12"></div>
      <div className="w-2/3 mx-auto mb-12">
        <div className="text-left mb-6 sm:mb-8 md:mb-12">
          <h2 className="leading-5 sm:leading-6 text-base sm:text-lg text-secondary-light font-semibold">
            Elige tu
          </h2>
          <p className="leading-5 sm:leading-6 text-xl sm:text-2xl text-primary-light font-bold">
            Destino
          </p>
        </div>
        <p className="text-center text-sm md:text-base text-secondary-normal">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit
        </p>
      </div>

      <TabImage></TabImage>
    </section>
  );
};
export default Gallery;
