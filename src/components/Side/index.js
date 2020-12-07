import * as React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "../Icons";
import "./style.scss";

// markup
const Side = () => {
  return (
    <aside className="w-6 mr-8 sm:mr-12 lg:mr-16 fixed top-0 right-0 right-0 h-screen flex flex-col items-end z-50">
      <div className="h-full flex flex-col items-center pt-16">
        <div className="h-full w-1 bg-primary-light "></div>
        <ul className="my-4 text-secondary-normal">
          <li className="mb-4">
            <a
              href="https://www.facebook.com/colraices/"
              target="_blank"
              rel="nofollow noopener"
            >
              <Facebook wh="side__icon w-4 h-4 sm:w-5 sm:h-5 transition duration-200 hover:text-primary-light" />
            </a>
          </li>
          <li className="mb-4">
            <a
              href="https://www.instagram.com/colraices/?hl=es-la"
              target="_blank"
              rel="nofollow noopener"
            >
              <Instagram wh="side__icon w-4 h-4 sm:w-5 sm:h-5 transition duration-200 hover:text-primary-light" />
            </a>
          </li>
          <li className="mb-4">
            <a
              href="https://twitter.com/colraices?lang=es"
              target="_blank"
              rel="nofollow noopener"
            >
              <Twitter wh="side__icon w-4 h-4 sm:w-5 sm:h-5 transition duration-200 hover:text-primary-light" />
            </a>
          </li>
          <li className="">
            <a
              href="https://www.youtube.com/channel/UCiBystYzqzabHULJWwgAjnw"
              target="_blank"
              rel="nofollow noopener"
            >
              <Youtube wh="side__icon w-4 h-4 sm:w-5 sm:h-5 transition duration-200 hover:text-primary-light" />
            </a>
          </li>
        </ul>
        <div className="h-full w-1 bg-primary-light "></div>
      </div>
    </aside>
  );
};

export default Side;
