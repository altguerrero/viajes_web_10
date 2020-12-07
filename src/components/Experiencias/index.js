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
    <section className="container">
      {/* Parte 1 */}
      <div className="grid grid-cols-2 gap-32 mb-24">
        <div className="w-2/3 ml-56">
          <div className="text-left mb-12">
            <h2 className="leading-6 text-lg text-secondary-light font-semibold">
              Plan
            </h2>
            <p className="leading-6 text-2xl text-primary-light font-bold">
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
      <div className="grid grid-cols-2 gap-32 mb-24">
        <div className="flex justify-end">
          <BackgroundImage
            fluid={data.image2.childImageSharp.fluid}
            className="experiencia__img w-full h-56 overflow-hidden rounded"
          ></BackgroundImage>
        </div>
        <div className="w-2/3 mr-56 text-right ">
          <div className="mb-12">
            <h2 className="leading-6 text-lg text-secondary-light font-semibold">
              Plan
            </h2>
            <p className="leading-6 text-2xl text-primary-light font-bold">
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
      <div className="grid grid-cols-2 gap-32 mb-24">
        <div className="w-2/3 ml-56">
          <div className="text-left mb-12">
            <h2 className="leading-6 text-lg text-secondary-light font-semibold">
              Plan
            </h2>
            <p className="leading-6 text-2xl text-primary-light font-bold">
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
  );
};
export default Experiencias;
