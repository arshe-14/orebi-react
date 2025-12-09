import React from "react";

const NewBtn = ({ children, className }) => {
  return (
    <button
      className={`${className} py-[10px] px-[32px] bg-[#262626] text-white font-dmFont font-bold text-[14px]`}
    >
      {children}
    </button>
  );
};

export default NewBtn;
