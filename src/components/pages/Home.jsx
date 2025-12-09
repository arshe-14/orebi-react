import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import SaleTxt from "../SaleTxt";
import SalePcnt from "../SalePcnt";
import Flex from "../Flex";
import Button from "../Button";
import { FaTruck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import SubHeading from "../SubHeading";
import NewBtn from "../NewBtn";
import ProductName from "../ProductName";
import ProductPriceColor from "../ProductPriceColor";
import ProductHover from "../ProductHover";
import Banner from "../layouts/Banner";
import Searchbar from "../layouts/Searchbar";
import Information from "../layouts/Information";
import Ads from "../layouts/Ads";

const Home = () => {
  return (
    <>
      <Searchbar />
      <Banner />
      <Information />
      <Ads />
    </>
  );
  // <div>
  //   <Container>
  //     <SubHeading
  //       subHeading={"New Arrivals"}
  //       className={"mb-[48px]"}
  //     ></SubHeading>

  //     <Flex className={"mb-[118px]  justify-between"}>
  //       <div className="w-[315px]">
  //         <div className="bg-[url('/src/assets/tableClock.jpg')] pt-[20px] pb-[315px] pl-[20px] pr-[258px] bg-cover bg-no-repeat bg-center">
  //           <NewBtn>New</NewBtn>
  //           <ProductHover></ProductHover>
  //         </div>
  //         <Flex className={"justify-between mt-[24px] mb-[15px]"}>
  //           <ProductName productName={"Basic Crew Neck Tee"}></ProductName>
  //           <ProductPriceColor priceColor={"$44.00"}></ProductPriceColor>
  //         </Flex>
  //         <ProductPriceColor priceColor={"Black"}></ProductPriceColor>
  //       </div>
  //       <div className="w-[315px]">
  //         <div className="bg-[url('/src/assets/watch.png')] pt-[20px] pb-[315px] pl-[20px] pr-[258px] bg-cover bg-no-repeat bg-center">
  //           <NewBtn>New</NewBtn>
  //           <ProductHover></ProductHover>
  //         </div>
  //         <Flex className={"justify-between mt-[24px] mb-[15px]"}>
  //           <ProductName productName={"Basic Crew Neck Tee"}></ProductName>
  //           <ProductPriceColor priceColor={"$44.00"}></ProductPriceColor>
  //         </Flex>
  //         <ProductPriceColor priceColor={"Black"}></ProductPriceColor>
  //       </div>
  //       <div className="w-[315px]">
  //         <div className="bg-[url('/src/assets/basket.png')] pt-[20px] pb-[315px] pl-[20px] pr-[258px] bg-cover bg-no-repeat bg-center">
  //           <NewBtn>New</NewBtn>
  //           <ProductHover></ProductHover>
  //         </div>
  //         <Flex className={"justify-between mt-[24px] mb-[15px]"}>
  //           <ProductName productName={"Basic Crew Neck Tee"}></ProductName>
  //           <ProductPriceColor priceColor={"$44.00"}></ProductPriceColor>
  //         </Flex>
  //         <ProductPriceColor priceColor={"Black"}></ProductPriceColor>
  //       </div>
  //       <div className="w-[315px]">
  //         <div className="bg-[url('/src/assets/stuffedToy.png')] pt-[20px] pb-[315px] pl-[20px] pr-[258px] bg-cover bg-no-repeat bg-center">
  //           <NewBtn>New</NewBtn>
  //           <ProductHover></ProductHover>
  //         </div>
  //         <Flex className={"justify-between mt-[24px] mb-[15px]"}>
  //           <ProductName productName={"Basic Crew Neck Tee"}></ProductName>
  //           <ProductPriceColor priceColor={"$44.00"}></ProductPriceColor>
  //         </Flex>
  //         <ProductPriceColor priceColor={"Black"}></ProductPriceColor>
  //       </div>
  //     </Flex>

  //     <SubHeading
  //       subHeading={"Our Bestsellers"}
  //       className={"mb-[48px]"}
  //     ></SubHeading>
  //     <Flex className={"mb-[130px] justify-between"}>
  //       <div className="w-[315px]">
  //         <div className="bg-[url('/src/assets/bottle.png')] pt-[20px] pb-[315px] pl-[20px] pr-[258px] bg-cover bg-no-repeat bg-center">
  //           <NewBtn>New</NewBtn>
  //           <ProductHover></ProductHover>
  //         </div>
  //         <Flex className={"justify-between mt-[24px] mb-[15px]"}>
  //           <ProductName productName={"Basic Crew Neck Tee"}></ProductName>
  //           <ProductPriceColor priceColor={"$44.00"}></ProductPriceColor>
  //         </Flex>
  //         <ProductPriceColor priceColor={"Black"}></ProductPriceColor>
  //       </div>
  //       <div className="w-[315px]">
  //         <div className="bg-[url('/src/assets/bag.png')] pt-[20px] pb-[315px] pl-[20px] pr-[258px] bg-cover bg-no-repeat bg-center">
  //           <NewBtn>New</NewBtn>
  //           <ProductHover></ProductHover>
  //         </div>
  //         <Flex className={"justify-between mt-[24px] mb-[15px]"}>
  //           <ProductName productName={"Basic Crew Neck Tee"}></ProductName>
  //           <ProductPriceColor priceColor={"$44.00"}></ProductPriceColor>
  //         </Flex>
  //         <ProductPriceColor priceColor={"Black"}></ProductPriceColor>
  //       </div>
  //       <div className="w-[315px]">
  //         <div className="bg-[url('/src/assets/mortarAndPestle.png')] pt-[20px] pb-[315px] pl-[20px] pr-[258px] bg-cover bg-no-repeat bg-center">
  //           <NewBtn>New</NewBtn>
  //           <ProductHover></ProductHover>
  //         </div>
  //         <Flex className={"justify-between mt-[24px] mb-[15px]"}>
  //           <ProductName productName={"Basic Crew Neck Tee"}></ProductName>
  //           <ProductPriceColor priceColor={"$44.00"}></ProductPriceColor>
  //         </Flex>
  //         <ProductPriceColor priceColor={"Black"}></ProductPriceColor>
  //       </div>
  //       <div className="w-[315px]">
  //         <div className="bg-[url('/src/assets/schoolBag.png')] pt-[20px] pb-[315px] pl-[20px] pr-[258px] bg-cover bg-no-repeat bg-center">
  //           <NewBtn>New</NewBtn>
  //           <ProductHover></ProductHover>
  //         </div>
  //         <Flex className={"justify-between mt-[24px] mb-[15px]"}>
  //           <ProductName productName={"Basic Crew Neck Tee"}></ProductName>
  //           <ProductPriceColor priceColor={"$44.00"}></ProductPriceColor>
  //         </Flex>
  //         <ProductPriceColor priceColor={"Black"}></ProductPriceColor>
  //       </div>
  //     </Flex>

  //     <div className="mb-[128px]">
  //       <div className="bg-[url('/src/assets/phoneOfTheYear.png')] py-[61px]">
  //         <div className="ml-[681px]">
  //           <SubHeading subHeading={"Phone of the year"}></SubHeading>
  //           <p className="mr-[100px] mt-[30px] mb-[45px] font-dmFont font-normal text-primaryColor text-[16px] leading-[30px]">
  //             Lorem Ipsum is simply dummy text of the printing and typesetting
  //             industry orem Ipsum..
  //           </p>
  //           <Button>Shop Now</Button>
  //         </div>
  //       </div>
  //     </div>

  //     <SubHeading
  //       subHeading={"Special Offers"}
  //       className={"mb-[48px]"}
  //     ></SubHeading>
  //     <Flex className={"mb-[140px] justify-between"}>
  //       <div className="w-[315px]">
  //         <div className="bg-[url('/src/assets/cap.png')] pt-[20px] pb-[315px] pl-[20px] pr-[258px] bg-cover bg-no-repeat bg-center">
  //           <NewBtn>New</NewBtn>
  //           <ProductHover></ProductHover>
  //         </div>
  //         <Flex className={"justify-between mt-[24px] mb-[15px]"}>
  //           <ProductName productName={"Basic Crew Neck Tee"}></ProductName>
  //           <ProductPriceColor priceColor={"$44.00"}></ProductPriceColor>
  //         </Flex>
  //         <ProductPriceColor priceColor={"Black"}></ProductPriceColor>
  //       </div>
  //       <div className="w-[315px]">
  //         <div className="bg-[url('/src/assets/table.png')] pt-[20px] pb-[315px] pl-[20px] pr-[258px] bg-cover bg-no-repeat bg-center">
  //           <NewBtn>New</NewBtn>
  //           <ProductHover></ProductHover>
  //         </div>
  //         <Flex className={"justify-between mt-[24px] mb-[15px]"}>
  //           <ProductName productName={"Basic Crew Neck Tee"}></ProductName>
  //           <ProductPriceColor priceColor={"$44.00"}></ProductPriceColor>
  //         </Flex>
  //         <ProductPriceColor priceColor={"Black"}></ProductPriceColor>
  //       </div>
  //       <div className="w-[315px]">
  //         <div className="bg-[url('/src/assets/headphone.png')] pt-[20px] pb-[315px] pl-[20px] pr-[258px] bg-cover bg-no-repeat bg-center">
  //           <NewBtn>New</NewBtn>
  //           <ProductHover></ProductHover>
  //         </div>
  //         <Flex className={"justify-between mt-[24px] mb-[15px]"}>
  //           <ProductName productName={"Basic Crew Neck Tee"}></ProductName>
  //           <ProductPriceColor priceColor={"$44.00"}></ProductPriceColor>
  //         </Flex>
  //         <ProductPriceColor priceColor={"Black"}></ProductPriceColor>
  //       </div>
  //       <div className="w-[315px]">
  //         <div className="bg-[url('/src/assets/sunglass.png')] pt-[20px] pb-[315px] pl-[20px] pr-[258px] bg-cover bg-no-repeat bg-center">
  //           <NewBtn>New</NewBtn>
  //           <ProductHover></ProductHover>
  //         </div>
  //         <Flex className={"justify-between mt-[24px] mb-[15px]"}>
  //           <ProductName productName={"Basic Crew Neck Tee"}></ProductName>
  //           <ProductPriceColor priceColor={"$44.00"}></ProductPriceColor>
  //         </Flex>
  //         <ProductPriceColor priceColor={"Black"}></ProductPriceColor>
  //       </div>
  //     </Flex>
  //   </Container>
  // </div>
};

export default Home;
