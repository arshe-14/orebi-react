import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import SaleTxt from "../SaleTxt";
import SalePcnt from "../SalePcnt";
import Flex from "../Flex";
import Button from "../Button";
import { FaTruck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="">
      <div className="bg-[url('/src/assets/bannerHome.jpg')] pt-[167px] pb-[182px] bg-cover bg-no-repeat bg-center">
        <Container className={"pl-[133px]"}>
          <Heading heading={"Final Offer"}></Heading>
          <Flex className={"pt-[33px] pb-[49px]"}>
            <SaleTxt saleTxt={"Up to"}></SaleTxt>
            <SalePcnt salePcnt={"50%"} className={"px-[8px]"}></SalePcnt>
            <SaleTxt saleTxt={"sale for all furniture items!"}></SaleTxt>
          </Flex>
          <Button>Shop Now</Button>
        </Container>
      </div>

      <div className="py-[22px] border-b-[1px] border-b-[#F0F0F0] border-t-[1px] border-t-[#F0F0F0]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Flex>
                <h4 className="text-[26px] font-dmFont font-black text-black">
                  2
                </h4>
                <h5 className="font-dmFont font-normal text-[16px] text-[#6D6D6D] pl-[17px]">
                  Two years warranty
                </h5>
              </Flex>
            </div>
            <div className="">
              <Flex>
                <h4 className="text-[26px] font-dmFont font-black text-black">
                  <FaTruck />
                </h4>
                <h5 className="font-dmFont font-normal text-[16px] text-[#6D6D6D] pl-[17px]">
                  Free shipping
                </h5>
              </Flex>
            </div>
            <div className="">
              <Flex>
                <h4 className="text-[26px] font-dmFont font-black text-black">
                  <FaUndoAlt />
                </h4>
                <h5 className="font-dmFont font-normal text-[16px] text-[#6D6D6D] pl-[17px]">
                  Return policy in 30 days
                </h5>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
