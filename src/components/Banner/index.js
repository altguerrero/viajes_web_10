import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

// markup
const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(
        relativePath: { eq: "banners/lugar.jpg" }
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
    <section className="container relative">
        <BackgroundImage
          fluid={data.image1.childImageSharp.fluid}
          className="absolute top-0 left-0 z-50 h-56 w-full flex flex-col justify-center items-center"
        >
          <p className="text-center block w-1/2 mx-auto text-xl lg:text-5xl font-bold text-white">
            Lorem ipsum dolor sit
          </p>
          <p className="text-center block w-1/2 mx-auto text-3xl lg:text-6xl font-bold text-white">
            amet, consetetur
          </p>
        </BackgroundImage>
    </section>
  );
};

export default Banner;
