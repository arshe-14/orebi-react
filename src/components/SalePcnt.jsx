import React from "react";

const SalePcnt = ({ salePcnt, className }) => {
  return (
    <span
      className={`${className} font-bold font-dmFont text-[40px] text-primaryColor`}
    >
      {salePcnt}
    </span>
  );
};

export default SalePcnt;
