import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`${className} py-[16px] px-[59px] bg-[#262626] text-[14px] text-white font-dmFont font-bold hover:text-black hover:bg-white border-[1px] border-black duration-300 cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
