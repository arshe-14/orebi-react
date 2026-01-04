import React from "react";
import Heading from "../Heading";
import { FaGreaterThan } from "react-icons/fa6";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import { ImCross } from "react-icons/im";
import Image from "../Image";
import smSunglass from "/src/assets/smSunglass.png";
import { TiArrowSortedDown } from "react-icons/ti";

const Cart = () => {
  return (
    <>
      <Container>
        <Heading heading={"Cart"} className={"mt-[40px] mb-[11px]"} />
        <Breadcrumb
          breadcrumbMain={<Link to={"/"}>Home</Link>}
          breadcrumbSign={<FaGreaterThan />}
          breadcrumbSub={"Cart"}
        />
        <div className="mt-[136px] mb-[220px]">
          <div className="py-[32px] pl-[20px] bg-[#F5F5F3]">
            <Flex>
              <h4 className="font-bold text-[16px] text-primaryColor font-dmFont w-1/4">
                Product
              </h4>
              <h4 className="font-bold text-[16px] text-primaryColor font-dmFont w-1/4">
                Price
              </h4>
              <h4 className="font-bold text-[16px] text-primaryColor font-dmFont w-1/4">
                Quantity
              </h4>
              <h4 className="font-bold text-[16px] text-primaryColor font-dmFont w-1/4">
                Total
              </h4>
            </Flex>
          </div>
          <div className=" pl-[20px] py-[30px] border-b-1 border-l-1 border-r-1 border-[#F0F0F0]">
            <Flex>
              <h4 className="font-bold text-[16px] text-primaryColor font-dmFont w-1/4">
                <Flex className={""}>
                  <ImCross className="text-[10px]" />
                  <Image src={smSunglass} className={"ml-[40px] "} />
                  <h5 className="ml-[20px] font-bold font-dmFont text-[16px] text-primaryColor">
                    Product name
                  </h5>
                </Flex>
              </h4>
              <h4 className="font-bold text-[20px] text-primaryColor font-dmFont w-1/4">
                $44.00
              </h4>
              <h4 className="font-bold text-[16px] text-primaryColor font-dmFont w-1/4">
                <Flex
                  className={
                    "cursor-pointer px-[21px] w-[140px] py-[5px] border-1 border-[#F0F0F0] text-[16px] text-[#767676] font-dmFont font-normal gap-x-[38px]"
                  }
                >
                  <h6>-</h6>
                  <h6>1</h6>
                  <h6>+</h6>
                </Flex>
              </h4>
              <h4 className="font-bold text-[20px] text-primaryColor font-dmFont w-1/4">
                $44.00
              </h4>
            </Flex>
          </div>
          <div className="">
            <Flex
              className={
                "pl-[20px] py-[20px] border-b-1 border-l-1 border-r-1 relative border-[#F0F0F0] gap-x-[14px] group"
              }
            >
              <select className="w-[255px] py-[10px] px-[20px] font-dmFont font-normal text-[16px] text-[#767676] border-[1px] border-[#F0F0F0] appearance-none cursor-pointer outline-0">
                <option>SIZE</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
              </select>
              <TiArrowSortedDown className="absolute top-9 left-60 cursor-pointer text-[#767676]" />
              <h5 className="font-dmFont font-bold text-[14px] text-primaryColor ml-[23px]">
                Apply coupon
              </h5>
              <h5 className="font-dmFont font-bold text-[14px] text-primaryColor ml-[800px]">
                Update cart
              </h5>
            </Flex>
          </div>
          <h5 className="text-end mt-[54px] mb-[24px] font-bold font-dmFont text-[20px] text-primaryColor">
            Cart totals
          </h5>
          <div className="w-[644px] ms-auto">
            <Flex>
              <h5 className="pt-[17px] pl-[20px] pb-[14px] pr-[234px] border-1 border-[#F0F0F0] font-bold text-[16px] text-primaryColor font-dmFont">
                Subtotal
              </h5>
              <h5 className="pt-[17px] pl-[20px] pb-[14px] pr-[234px] border-1 border-[#F0F0F0] font-normal text-[16px] text-[#767676] font-dmFont">
                389.99 $
              </h5>
            </Flex>
            <Flex>
              <h5 className="pt-[17px] pl-[20px] pb-[14px] pr-[262px] border-1 border-[#F0F0F0] font-bold text-[16px] text-primaryColor font-dmFont">
                Total
              </h5>
              <h5 className="pt-[17px] pl-[20px] pb-[14px] pr-[234px] border-1 border-[#F0F0F0] font-normal text-[16px] text-primaryColor font-dmFont">
                389.99 $
              </h5>
            </Flex>
            <div className="flex justify-end">
              <Link to={"/"}>
                <button className="py-[16px] pl-[24.5px] mt-[30px] pr-[31.5px] border-1 border-[#262626] bg-white font-bold font-dmFont text-[14px] text-primaryColor hover:text-white hover:bg-[#262626]  cursor-pointer duration-300">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
