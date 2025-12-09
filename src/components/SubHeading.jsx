import React from "react";

const SubHeading = ({ subHeading, className }) => {
  return (
    <h3
      className={`${className} font-dmFont font-bold text-[39px] text-primaryColor`}
    >
      {subHeading}
    </h3>
  );
};

export default SubHeading;
