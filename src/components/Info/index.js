import * as React from "react";
import { Map, Calendar, Route } from "../Icons";

// markup
const Info = () => {
  return (
    <section className="container">
      <div className="h-24 w-1 bg-primary-light mx-auto mb-12"></div>
      <div className="text-center mb-12">
        <h2 className="leading-5 sm:leading-6 text-base sm:text-lg text-secondary-light font-semibold">
          Reserva tu viaje
        </h2>
        <p className="leading-5 sm:leading-6 text-xl sm:text-2xl text-secondary-light font-bold">
          Y vive la experiencia
        </p>
        <p className="leading-5 sm:leading-6 text-xl sm:text-2xl text-primary-light font-bold">
          de recorrer el mundo
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-2/3 mx-auto">
        <div className="flex flex-col items-center">
          <Map wh="text-secondary-normal w-16 h-16 mb-8" />
          <p className="text-sm md:text-base text-center text-secondary-normal">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Calendar wh="text-secondary-normal w-16 h-16 mb-8" />
          <p className="text-sm md:text-base text-center text-secondary-normal">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-center">
          <Route wh="text-secondary-normal w-16 h-16 mb-8" />
          <p className="text-sm md:text-base text-center text-secondary-normal">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </p>
        </div>
      </div>
    </section>
  );
};
export default Info;
