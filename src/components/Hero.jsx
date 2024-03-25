import React from "react";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between dark:text-white">
        <div className="left flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl mt-6 mb-8">
            Mining{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
              Crypto{" "}
            </span>
            made accessible to everyone
          </h1>

          <div className="flex flex-row  flex-shrink-0   ">
            <div className="flex flex-row p-3">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  class="w-full   p-3 pr-20 rounded-lg text-lg dark:bg-gray-800 placeholder-gray-400 dark:text-white"
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 p-3 w-2/6 font-semibold rounded-lg dark:bg-violet-400 text-white text-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="right flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Tilt>
            <img
              src="https://kriptomat.io/wp-content/uploads/2021/12/hero_image_cryptocurrencies.png"
              alt="Hero-img"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128   "
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Hero;
