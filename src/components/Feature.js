import React from "react";

const Feature = () => {
  return (
    <>
      <div>
        <div className="feature p-4 md:relative md:flex md:flex-col justify-center items-center xl:flex xl:flex-row">
          <div className="feat_img md:w-full">
            <img className="w-full" src="/images/feature_img1.jpeg" alt="img" />
          </div>
          <div className="feat_desc flex flex-col md:shadow-xl md:shadow-slate-200 xl:shadow-none justify-center md:absolute md:top-96 md:bg-white w-11/12 p-10 lg:top-[85%] xl:relative xl:bg-[#f2f2f2] xl:h-[21.8rem] 2xl:h-[26.5rem] 3xl:h-[38.2rem] 4xl:h-[39.6rem] 5xl:h-[34.3rem] 6xl:h-[36.2rem]">
            <h1 className="font-semibold text-xl my-4">Xbox Series X</h1>
            <p className="my-4">The fastest, most powerfull Xbox ever</p>
            <button className=" bg-blue-700 w-40 hover:bg-blue-600  h-10 rounded-sm text-white font-semibold ">
              Shop Xbox Series X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
