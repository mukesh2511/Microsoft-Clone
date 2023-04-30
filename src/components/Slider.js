import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  return (
    <>
      <div className="slider flex flex-col-reverse md:flex-row md:items-center md:justify-center">
        <div className="description p-7 md:absolute md:shadow-xl md:shadow-slate-200  md:bg-white md:top-60 md:m-auto from-neutral-600 md:flex md:flex-col md:justify-center md:w-[80%] xl:top-[5rem] xl:left-32 xl:bg-inherit xl:w-96 2xl:left-52 2xl:top-36 3xl:left-80 4xl:left-[38rem] 4xl:top-52 6xl:left-96 6xl:top-52 5xl:left-72 ">
          <h1 className="font-semibold text-2xl mb-4">Microsoft 365</h1>
          <p>
            Turn your ideas into reality, stay safer online and off, and focus
            on what matters most with Microsoft 365 apps
          </p>
          <div className="buttons mt-7 sm:flex sm:items-center sm:gap-5 mb-16">
            <button className="bg-blue-600 p-3 rounded-sm text-white font-semibold my-5 hover:bg-blue-700">
              For one person
            </button>
            <p className="text-blue-700 hover:underline lg:text-black">
              For up to six people <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </div>
          <hr />
        </div>
        <div className="img  ">
          <img
            className="h-96 md:h-auto"
            src="/images/slider_img.avif"
            alt="slider_img"
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
