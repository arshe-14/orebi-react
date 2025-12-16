import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={"absolute  right-5 top-1/2 z-50 -translate-y-1/2"}
      onClick={onClick}
    >
      <FaArrowAltCircleRight className="text-4xl" />
    </div>
  );
};

export default NextArrow;
