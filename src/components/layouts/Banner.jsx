import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import SaleTxt from "../SaleTxt";
import SalePcnt from "../SalePcnt";
import Flex from "../Flex";
import Button from "../Button";

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
    </div>
  );
};

export default Banner;
