import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronDown,
  faCircleUser,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
// "-translate - x - 96"
const Navbar = () => {
  //   const [style, setStyle] = useState("-translate-x-[50rem]");

  //   const handleClick = () => {
  //     setStyle("-translate-x-0");
  //   };

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  };

  return (
    <>
      <div className="navbar flex justify-between items-center p-4 m-auto  5xl:mx-96">
        <div className="flex justify-center items-center  md:order-2">
          {!toggle && (
            <div
              className="hamburger inline-block cursor-pointer p-4 md:hidden"
              onClick={handleClick}
            >
              <div className="line w-6 h-0.5 my-1 bg-black "></div>
              <div className="line w-6 h-0.5 my-1 bg-black"></div>
              <div className="line w-6 h-0.5 my-1 bg-black"></div>
            </div>
          )}
          {toggle && (
            <div className=" hamburger inline-block cursor-pointer p-4 md:hidden">
              <FontAwesomeIcon
                className="text-xl"
                icon={faXmark}
                onClick={() => setToggle(false)}
              />
            </div>
          )}
          <div className="search md:hidden">
            <FontAwesomeIcon
              className="text-lg lg:text-xs"
              icon={faSearch}
              rotation={90}
            />
          </div>
        </div>
        <div className="logo text-center flex md:order-1 ">
          <div>
            {" "}
            <img className="w-28 " src="/images/m_logo.png" alt="logo" />
          </div>

          <div
            className={`features absolute  left-0 top-20 p-5 md:p-0  space-x-2 w-full  md:w-fit ofset-0  md:static bg-gray-200 ${
              toggle ? "-translate-x-0" : "-translate-x-[50rem]"
            } md:bg-white md:flex md:mx-4 md:space-x-2 md:items-center ${
              toggle ? "-translate-x-0" : "-translate-x-[50rem]"
            }  md:translate-x-0`}
          >
            <div className="fitem text-xs hover:border-y-2 border-gray-600 mb-5 md:mb-0 ">
              Microsoft 365
            </div>

            <div className="fitem text-xs hover:border-y-2 border-gray-600 mb-5 md:mb-0 ">
              Teams
            </div>
            <div className="fitem text-xs  hover:border-y-2 border-gray-600 mb-5 md:mb-0">
              Windows
            </div>
            <div className="fitem text-xs hover:border-y-2 border-gray-600 mb-5 md:mb-0">
              Surface
            </div>
            <div className="fitem text-xs hover:border-y-2 border-gray-600 mb-5 md:mb-0">
              Xbox
            </div>
            <div className="fitem text-xs hover:border-y-2 border-gray-600 mb-5 md:mb-0">
              Support
            </div>
          </div>
        </div>
        <div className="cart text-center md:order-3 flex">
          <div className="search hidden mx-4 lg:flex lg:gap-2 lg:items-center">
            <p className="text-xs hover:border-y-2 border-gray-600">
              All Microsoft
            </p>
            <FontAwesomeIcon className="text-xs mr-4" icon={faChevronDown} />
            <p className="text-xs hover:border-y-2 border-gray-600"> Search</p>
            <FontAwesomeIcon
              className="text-xs"
              icon={faSearch}
              rotation={90}
            />
          </div>
          <div className=" mx-4">
            <span className="hidden lg:inline-block text-xs hover:border-y-2 border-gray-600">
              {" "}
              Cart
            </span>
            <FontAwesomeIcon
              className="mr-4 ml-1 text-lg lg:text-xs"
              icon={faCartShopping}
              size="lg"
            />{" "}
            <span className="hidden lg:inline-block text-xs hover:border-y-2 border-gray-600">
              Sign In
            </span>
            <FontAwesomeIcon className="mx-1" icon={faCircleUser} size="lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
