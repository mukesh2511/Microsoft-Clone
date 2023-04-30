import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <>
      <div className="card p-3 sm:w-2/4 lg:w-1/4 ">
        <div className="card_img">
          <img className="h-60" src="/images/slider_img.avif" alt="img" />
        </div>
        <div className="card_desc">
          <h1 className="font-semibold text-xl my-4">Xbox Game Pass</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            quae ea molestias, odit consequatur esse. Hic ipsa doloribus nostrum
            iusto porro harum, esse
          </p>
          <p className="my-8 text-blue-700">
            Join now{" "}
            <FontAwesomeIcon className="text-xs" icon={faChevronRight} />
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
