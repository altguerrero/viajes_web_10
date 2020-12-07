import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import "./style.scss";

// markup
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(
        relativePath: { eq: "hero/hero.jpg" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div id="inicio" className="container hero pt-16 relative md:h-screen">
      <div className="hero__subcontainer md:grid md:grid-cols-2 md:gap-8">
        <div className="w-1/2 md:w-2/4 lg:w-1/2 flex flex-col justify-center mx-auto pt-12 md:pt-16 pb-16 lg:pb-32">
          <p className="text-sm sm:text-lg text-secondary-normal mb-4">
            ¿Quieres descubrir la vida?
          </p>
          <div>
            <p className="font-bold text-3xl sm:text-6xl text-secondary-normal uppercase">
              Tu viaje <br /> inicia <br />{" "}
              <span className="text-primary-light">aquí</span>
            </p>
          </div>
          <p className="mt-4 text-sm sm:text-lg">Solo debes elegir</p>
          <ul className="text-lg text-secondary-normal font-semibold">
            <li>Destino</li>
            <li>Presupuesto</li>
            <li>y con quien viajar</li>
          </ul>
        </div>
        <div>
          <BackgroundImage
            fluid={data.image1.childImageSharp.fluid}
            className="h-full hidden md:block md:w-2/3 lg:w-1/2 bg-secondary-normal mx-auto"
          ></BackgroundImage>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 flex flex-col justify-center ml-8 sm:ml-4 lg:ml-12">
        <div className="h-5 w-1 bg-primary-light  mx-auto mb-2"></div>
        <ul className="text-secondary-normal text-base sm:text-lg">
          <li className="mb-2">01</li>
          <li className="mb-2">02</li>
          <li className="mb-2">03</li>
          <li className="mb-2">04</li>
        </ul>
        <div className="h-5 w-1 bg-primary-light mx-auto"></div>
      </div>
    </div>
  );
};

export default Hero;
