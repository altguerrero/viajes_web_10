import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import "./style.scss";

// markup
const Experiencias = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(
        relativePath: { eq: "planes/plan_familiar.jpg" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image2: file(
        relativePath: { eq: "planes/plan_extremo.jpg" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image3: file(
        relativePath: { eq: "planes/plan_aventurero.jpg" }
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
    <>
      <section id="planes" className="container mt-12">
        <div className="h-24 w-1 bg-primary-light mx-auto mb-12"></div>
        <div className="w-2/3 mx-auto mb-12">
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
          <p className="text-center text-sm md:text-base  text-secondary-normal">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          </p>
        </div>
      </section>
      <section className="container">
        {/* Parte 1 */}
        <div className="md:grid md:grid-cols-2 lg:gap-32 mb-24 px-4 md:px-6 lg:px-0">
          <div className="w-2/3 ml-12 lg:ml-56 mb-8">
            <div className="text-left mb-6 lg:mb-12">
              <h2 className="leading-5 sm:leading-6 text-base sm:text-lg text-secondary-light font-semibold">
                Plan
              </h2>
              <p className="leading-5 sm:leading-6 text-xl sm:text-2xl text-primary-light font-bold">
                Familiar
              </p>
            </div>
            <p className="text-left text-base text-secondary-normal">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.
            </p>
          </div>
          <div className="flex justify-end">
            <BackgroundImage
              fluid={data.image1.childImageSharp.fluid}
              className="experiencia__img w-full h-56 overflow-hidden rounded"
            ></BackgroundImage>
          </div>
        </div>
        {/* Parte 2 */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 lg:gap-32 mb-24 px-4 md:px-6 lg:px-0">
          <div className="flex justify-end">
            <BackgroundImage
              fluid={data.image2.childImageSharp.fluid}
              className="experiencia__img w-full h-56 overflow-hidden rounded"
            ></BackgroundImage>
          </div>
          <div className="w-2/3 text-right w-2/3 ml-auto lg:ml-0 mr-12 lg:mr-56 mb-8">
            <div className="mb-6 lg:mb-12">
              <h2 className="leading-5 sm:leading-6 text-base sm:text-lg text-secondary-light font-semibold">
                Plan
              </h2>
              <p className="leading-5 sm:leading-6 text-xl sm:text-2xl text-primary-light font-bold">
                Extremo
              </p>
            </div>
            <p className="text-base text-secondary-normal">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.
            </p>
          </div>
        </div>
        {/* Parte 3 */}
        <div className="md:grid md:grid-cols-2 lg:gap-32 mb-24 px-4 md:px-6 lg:px-0">
          <div className="w-2/3 ml-12 lg:ml-56 mb-8">
            <div className="text-left mb-6 lg:mb-12">
              <h2 className="leading-5 sm:leading-6 text-base sm:text-lg text-secondary-light font-semibold">
                Plan
              </h2>
              <p className="leading-5 sm:leading-6 text-xl sm:text-2xl text-primary-light font-bold">
                Aventurero
              </p>
            </div>
            <p className="text-left text-base text-secondary-normal">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.
            </p>
          </div>
          <div className="flex justify-end">
            <BackgroundImage
              fluid={data.image3.childImageSharp.fluid}
              className="experiencia__img w-full h-56 overflow-hidden rounded"
            ></BackgroundImage>
          </div>
        </div>
      </section>
    </>
  );
};
export default Experiencias;
