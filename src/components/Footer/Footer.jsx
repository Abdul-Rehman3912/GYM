import React from "react";
import {
  FaDumbbell,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 -mb-8 ">
      <div className="container">
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white">
          <div className="py-8 px-4 space-y-4">
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <FaDumbbell />
              <p>Coders</p>
              <p className="text-secondary">Gym</p>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              quidem rerum reiciendis ratione consequuntur corrupti excepturi
              natus veritatis numquam laboriosam!
            </p>
            <div className="flex items-center justify-start gap-5 !mt-6">
              <a href="#">
                <HiLocationMarker className="text-3xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Importent Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Company Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Resources
              </h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Yoga</a>
                </li>
                <li>
                  <a href="#">Muscles</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-8">
          <div className="text-center py-6 border-t-2 border-gray-300/10">
            <span className="text-sm text-gray-300 opacity-70">
              @copyright 2026 The Coding Journey
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
