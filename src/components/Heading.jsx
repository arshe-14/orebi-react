import React from "react";

const Heading = ({ className, heading }) => {
  return (
    <>
      <h1
        className={`${className} font-bold font-dmFont text-[49px] text-primaryColor`}
      >
        {heading}
      </h1>
    </>
  );
};

export default Heading;
