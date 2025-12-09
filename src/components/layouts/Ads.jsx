import React from "react";
import Container from "../Container";
import SaleTxt from "../SaleTxt";
import SalePcnt from "../SalePcnt";
import Flex from "../Flex";
import Button from "../Button";
import SubHeading from "../SubHeading";

const Ads = () => {
  return (
    <div className="">
      <Container>
        <Flex className={"gap-x-[40px] mt-[140px] mb-[128px]"}>
          <div className="w-1/2">
            <div className="bg-[url('/src/assets/phonesSale.png')] bg-cover bg-no-repeat bg-center pt-[470px] pb-[72px] ">
              <SubHeading
                className={"ml-[64px]"}
                subHeading={"Phones Sale"}
              ></SubHeading>
              <Flex className={"ml-[64px] mt-[36px]"}>
                <SaleTxt saleTxt={"Up to"}></SaleTxt>
                <SalePcnt salePcnt={"30%"} className={"px-[8px]"}></SalePcnt>
                <SaleTxt saleTxt={"sale for all phones!"}></SaleTxt>
              </Flex>
              <Button className={"ml-[64px] mt-[49px]"}>Shop Now</Button>
            </div>
          </div>
          <div className="w-1/2">
            <div className="bg-[url('/src/assets/electronicsSale.png')] pt-[64px] pb-[66px] bg-cover bg-no-repeat bg-center">
              <SubHeading
                className={"ml-[50px]"}
                subHeading={"Electronics Sale"}
              ></SubHeading>
              <Flex className={"ml-[50px] mt-[36px]"}>
                <SaleTxt saleTxt={"Up to"}></SaleTxt>
                <SalePcnt
                  salePcnt={"70%"}
                  className={"pl-[8px] pr-[12px]"}
                ></SalePcnt>
                <SaleTxt saleTxt={"sale for all electronics!"}></SaleTxt>
              </Flex>
              <Button className={"ml-[50px] mt-[49px]"}>Shop Now</Button>
            </div>
            <div className="bg-[url('/src/assets/furnitureSale.png')] bg-cover bg-no-repeat bg-center py-[66px] mt-[20px]">
              <SubHeading
                className={"ml-[50px]"}
                subHeading={"Furniture Offer"}
              ></SubHeading>
              <Flex className={"ml-[50px] mt-[36px]"}>
                <SaleTxt saleTxt={"Up to"}></SaleTxt>
                <SalePcnt
                  salePcnt={"50%"}
                  className={"pl-[8px] pr-[12px]"}
                ></SalePcnt>
                <SaleTxt saleTxt={"sale for all furniture items!"}></SaleTxt>
              </Flex>
              <Button className={"ml-[50px] mt-[49px]"}>Shop Now</Button>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Ads;
