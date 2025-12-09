import React from "react";
import { FaHeart } from "react-icons/fa";
import { HiArrowPath } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";

const ProductHover = () => {
  return (
    <div className="py-[25px] pr-[20px] pl-[143px] bg-white mt-[159px] absolute ml-[-20px] opacity-0 hover:opacity-100 duration-600 cursor-pointer">
      <h5 className="justify-end flex items-center gap-x-[16px] font-dmFont text-[16px] text-[#767676] font-normal hover:text-primaryColor hover:font-bold duration-300 cursor-pointer">
        Add to Wish List <FaHeart className="text-primaryColor" />
      </h5>
      <h5 className="justify-end flex items-center gap-x-[16px] font-dmFont text-[16px] text-[#767676] font-normal hover:text-primaryColor hover:font-bold duration-300 cursor-pointer py-[21px]">
        Compare <HiArrowPath className="text-primaryColor" />
      </h5>
      <h5 className="justify-end flex items-center gap-x-[16px] font-dmFont text-[16px] text-[#767676] font-normal hover:text-primaryColor hover:font-bold duration-300 cursor-pointer">
        Add to Cart <FaShoppingCart className="text-primaryColor" />
      </h5>
    </div>
  );
};

export default ProductHover;
