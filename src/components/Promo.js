import React from "react";

const Promo = () => {
  return (
    <>
      <div className="promo flex flex-col justify-center items-center gap-3 p-8 md:mt-80  md:flex md:flex-row  lg:mt-64 xl:my-12">
        <div className="item flex flex-col items-center justify-center">
          <img className="my-1 " src="/images/window_img.webp" alt="img" />
          <p className="text-blue-700 underline text-xs sm:text-md font-bold  ">
            Choose your Microsoft 365
          </p>
        </div>
        <div className="flex justify-between gap-4   md:flex ">
          <div className="item flex flex-col items-center justify-center mx-3">
            <img className="my-1  " src="/images/window_img2.webp" alt="img" />
            <p className="text-blue-700 underline font-bold text-xs sm:text-md">
              Explore Surface devices
            </p>
          </div>
          <div className="item flex flex-col items-center justify-center md:flex mx-3 ">
            <img className="my-1 " src="/images/xbox_img.webp" alt="img" />
            <p className="text-blue-700 underline font-bold text-xs sm:text-md">
              Buy Xbox games
            </p>
          </div>
        </div>
        <div className="item flex flex-col items-center justify-center">
          <img className="my-1" src="/images/window_img.webp" alt="img" />
          <p className="text-blue-700 underline  font-bold text-xs sm:text-md">
            Get Windows 11
          </p>
        </div>
      </div>
    </>
  );
};

export default Promo;
