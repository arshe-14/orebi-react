import React from "react";

const SaleTxt = ({ saleTxt, className }) => {
  return (
    <>
      <p
        className={`${className} font-dmFont font-normal text-[16px] text-[#6D6D6D]`}
      >
        {" "}
        {saleTxt}
      </p>
    </>
  );
};

export default SaleTxt;
