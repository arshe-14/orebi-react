import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
import { HiMiniArrowPath } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ productImg, badgeText, productName, productPrice }) => {
  return (
    <div className="relative group cursor-pointer mx-2">
      <Image src={productImg} />
      <Badge badgeText={badgeText} className={"absolute top-2.5 left-2.5"} />
      <div className="bg-white py-[25px] opacity-0 group-hover:opacity-100 bottom-13 duration-400 left-0 absolute w-full">
        <Flex className={"justify-end"}>
          <h3 className="font-dmFont font-normal text-[16px] text-[#767676] hover:font-bold hover:text-primaryColor duration-300 cursor-pointer">
            Add to Wish List
          </h3>{" "}
          <FaHeart className="mx-[15px]" />
        </Flex>
        <Flex className={"justify-end my-[18px]"}>
          <h3 className="font-dmFont font-normal text-[16px] text-[#767676] hover:font-bold hover:text-primaryColor duration-300 cursor-pointer">
            Compare
          </h3>{" "}
          <HiMiniArrowPath className="mx-[15px]" />
        </Flex>
        <Flex className={"justify-end"}>
          <h3 className="font-dmFont font-normal text-[16px] text-[#767676] hover:font-bold hover:text-primaryColor duration-300 cursor-pointer">
            Add to Cart
          </h3>{" "}
          <FaShoppingCart className="mx-[15px]" />
        </Flex>
      </div>
      <Flex className={"mt-[24px] justify-between"}>
        <h4 className={`font-dmFont font-bold text-[20px] text-primaryColor`}>
          {productName}
        </h4>
        <h5 className={` font-dmFont font-normal text-[16px] text-[#767676]`}>
          {productPrice}
        </h5>
      </Flex>
    </div>
  );
};

export default Product;
