import * as React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "../Icons";
import "./style.scss"

// markup
const Side = () => {
  return (
    <aside className="w-6 mr-16 fixed top-0 right-0 right-0 h-screen flex flex-col items-end z-50">
      <div className="h-full flex flex-col items-center pt-16">
        <div className="h-full w-1 bg-primary-light "></div>
        <ul className="my-4 text-secondary-normal">
          <li className="mb-4">
            <a href="#">
              <Facebook wh="side__icon w-5 h-5" />
            </a>
          </li>
          <li className="mb-4">
            <a href="#" >
              <Instagram wh="side__icon w-5 h-5" />
            </a>
          </li>
          <li className="mb-4">
            <a href="#">
              <Twitter wh="side__icon w-5 h-5" />
            </a>
          </li>
          <li className="">
            <a href="#">
              <Youtube wh="side__icon w-5 h-5" />
            </a>
          </li>
        </ul>
        <div className="h-full w-1 bg-primary-light "></div>
      </div>
    </aside>
  );
};

export default Side;
