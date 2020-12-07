import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import "./style.scss";

// markup
const TabImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(
        relativePath: { eq: "citys/bogota_city.jpg" }
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
        relativePath: { eq: "citys/cali_city.jpg" }
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
        relativePath: { eq: "citys/cartagena_city.jpg" }
        childImageSharp: { children: {} }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image4: file(
        relativePath: { eq: "citys/medellin_city.jpg" }
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
    <Tabs>
      <TabList className="border-none flex flex-wrap justify-center text-base sm:text-lg font-semibold text-secondary-normal">
        <Tab>Colombia</Tab>
        <Tab>Chile</Tab>
        <Tab>Argentina</Tab>
        <Tab>EEUU</Tab>
        <Tab>Brazil</Tab>
        <Tab>Ecuador</Tab>
      </TabList>

      <TabPanel>
        <div className="px-4 grid grid-cols-2 md:grid-cols-4 mt-8 mb-12">
          <BackgroundImage
            fluid={data.image1.childImageSharp.fluid}
            className="react-tabs__img w-full"
          >
            <div className="absolute w-full h-full top-0 left-0"></div>
            <span className="absolute text-center uppercase w-full h-full top-0 bottom-0 left-0 z-20 flex justify-end pr-12 items-center text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-semibold text-primary-light">
              |Bo <br /> go <br /> tá|
            </span>
            <h3 className="text-white absolute w-full h-full top-0 left-0 flex justify-center items-center uppercase  text-2xl">
              |Bogotá|
            </h3>
          </BackgroundImage>

          <BackgroundImage
            fluid={data.image2.childImageSharp.fluid}
            className="react-tabs__img w-full"
          >
            <div className="absolute w-full h-full top-0 left-0"></div>
            <span className="absolute text-center uppercase w-full h-full top-0 bottom-0 left-0 z-20 flex justify-end pr-12 items-center text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-semibold text-primary-light">
              |Ca <br /> li|
            </span>
            <h3 className="text-white absolute w-full h-full top-0 left-0 flex justify-center items-center uppercase  text-2xl">
              |Cali|
            </h3>
          </BackgroundImage>

          <BackgroundImage
            fluid={data.image3.childImageSharp.fluid}
            className="react-tabs__img w-full"
          >
            <div className="absolute w-full h-full top-0 left-0"></div>
            <span className="absolute text-center uppercase w-full h-full top-0 bottom-0 left-0 z-20 flex justify-end pr-12 items-center text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-semibold text-primary-light">
              |Car <br /> ta <br /> ge <br /> na|
            </span>
            <h3 className="text-white absolute w-full h-full top-0 left-0 flex justify-center items-center uppercase  text-2xl">
              |Cartagena|
            </h3>
          </BackgroundImage>

          <BackgroundImage
            fluid={data.image4.childImageSharp.fluid}
            className="react-tabs__img w-full"
          >
            <div className="absolute w-full h-full top-0 left-0"></div>
            <span className="absolute text-center uppercase w-full h-full top-0 bottom-0 left-0 z-20 flex justify-end pr-12 items-center text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-semibold text-primary-light">
              |Me <br /> de <br /> llin|
            </span>
            <h3 className="text-white absolute w-full h-full top-0 left-0 flex justify-center items-center uppercase  text-2xl">
              |Medellin|
            </h3>
          </BackgroundImage>
        </div>
      </TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
  );
};
export default TabImage;
