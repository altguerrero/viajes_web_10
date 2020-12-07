import * as React from "react";

// markup
const Contacto = () => {
  return (
    <section id="contacto" className="container relative w-full flex justify-center mb-32">
      <div className="absolute hidden lg:block top-0 w-1 h-full bg-primary-light"></div>
      <div className="w-2/3 mx-auto lg:grid lg:grid-cols-2 lg:gap-24">
        <div className="pb-12">
          <div className="text-center mb-12">
            <h2 className="leading-5 sm:leading-6 text-base sm:text-lg text-secondary-light font-semibold">
              Elige el tipo de
            </h2>
            <p className="leading-5 sm:leading-6 text-xl sm:text-2xl text-secondary-light font-bold">
              experiencia
            </p>
            <p className="leading-5 sm:leading-6 text-xl sm:text-2xl text-primary-light font-bold">
              que quieres vivir
            </p>
          </div>
          <p className="text-sm md:text-base text-center text-secondary-normal">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam
          </p>
        </div>
        <div>
          <form className="h-full flex flex-col justify-center">
            <input
              type="text"
              placeHolder="Nombre Completo"
              className="text-base sm:text-lg border border-secondary-normal px-3 py-1 rounded-2xl block w-full mb-4 focus:outline-none  focus:border-primary-light"
              required
            ></input>
            <input
              type="email"
              placeHolder="Email"
              className="text-base sm:text-lg border border-secondary-normal px-3 py-1 rounded-2xl block w-full mb-4 focus:outline-none  focus:border-primary-light"
              required
            ></input>
            <input
              type="tel"
              placeHolder="Número de contacto"
              className="text-base sm:text-lg border border-secondary-normal px-3 py-1 rounded-2xl block w-full mb-4 focus:outline-none  focus:border-primary-light"
              required
            ></input>
            <button className="inline-block w-32 ml-auto mt-4 focus:outline-none ">
              <span className="block leading-5 sm:leading-6  text-lg sm:text-xl text-secondary-light font-semibold">
                Completa ti
              </span>
              <span className="block leading-5 sm:leading-6  text-2xl sm:text-3xl text-primary-light font-bold uppercase">
                Reserva
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
