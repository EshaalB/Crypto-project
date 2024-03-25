import React from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-full md:max-w-[700px] p-10 transition-all duration-700 hover:shadow-xl rounded-md">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
          Reviews
        </h2>
        <div className="relative">
          <Card review={reviews[index]} />
          <div className="hidden md:block absolute inset-0 items-center justify-center">
            <button
              onClick={leftShiftHandler}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-violet-500"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={rightShiftHandler}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-violet-500"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={surpriseHandler}
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
