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

const Home = () => {
  return (
    <>
      <Banner />
    </>
  );
  // <div>
  //   <div className="bg-[url('/src/assets/bannerHome.jpg')] pt-[167px] pb-[182px] bg-cover bg-no-repeat bg-center">
  //     <Container className={"pl-[133px]"}>
  //       <Heading heading={"Final Offer"}></Heading>
  //       <Flex className={"pt-[33px] pb-[49px]"}>
  //         <SaleTxt saleTxt={"Up to"}></SaleTxt>
  //         <SalePcnt salePcnt={"50%"} className={"px-[8px]"}></SalePcnt>
  //         <SaleTxt saleTxt={"sale for all furniture items!"}></SaleTxt>
  //       </Flex>
  //       <Button>Shop Now</Button>
  //     </Container>
  //   </div>

  //   <div className="py-[22px] border-b-[1px] border-b-[#F0F0F0] border-t-[1px] border-t-[#F0F0F0]">
  //     <Container>
  //       <Flex className={"justify-between"}>
  //         <div className="">
  //           <Flex>
  //             <h4 className="text-[26px] font-dmFont font-black text-black">
  //               2
  //             </h4>
  //             <h5 className="font-dmFont font-normal text-[16px] text-[#6D6D6D] pl-[17px]">
  //               Two years warranty
  //             </h5>
  //           </Flex>
  //         </div>
  //         <div className="">
  //           <Flex>
  //             <h4 className="text-[26px] font-dmFont font-black text-black">
  //               <FaTruck />
  //             </h4>
  //             <h5 className="font-dmFont font-normal text-[16px] text-[#6D6D6D] pl-[17px]">
  //               Free shipping
  //             </h5>
  //           </Flex>
  //         </div>
  //         <div className="">
  //           <Flex>
  //             <h4 className="text-[26px] font-dmFont font-black text-black">
  //               <FaUndoAlt />
  //             </h4>
  //             <h5 className="font-dmFont font-normal text-[16px] text-[#6D6D6D] pl-[17px]">
  //               Return policy in 30 days
  //             </h5>
  //           </Flex>
  //         </div>
  //       </Flex>
  //     </Container>
  //   </div>

  //   <Container>
  //     <Flex className={"gap-x-[40px] mt-[140px] mb-[128px]"}>
  //       <div className="w-1/2">
  //         <div className="bg-[url('/src/assets/phonesSale.png')] bg-cover bg-no-repeat bg-center pt-[470px] pb-[72px] ">
  //           <SubHeading
  //             className={"ml-[64px]"}
  //             subHeading={"Phones Sale"}
  //           ></SubHeading>
  //           <Flex className={"ml-[64px] mt-[36px]"}>
  //             <SaleTxt saleTxt={"Up to"}></SaleTxt>
  //             <SalePcnt salePcnt={"30%"} className={"px-[8px]"}></SalePcnt>
  //             <SaleTxt saleTxt={"sale for all phones!"}></SaleTxt>
  //           </Flex>
  //           <Button className={"ml-[64px] mt-[49px]"}>Shop Now</Button>
  //         </div>
  //       </div>
  //       <div className="w-1/2">
  //         <div className="bg-[url('/src/assets/electronicsSale.png')] pt-[64px] pb-[66px] bg-cover bg-no-repeat bg-center">
  //           <SubHeading
  //             className={"ml-[50px]"}
  //             subHeading={"Electronics Sale"}
  //           ></SubHeading>
  //           <Flex className={"ml-[50px] mt-[36px]"}>
  //             <SaleTxt saleTxt={"Up to"}></SaleTxt>
  //             <SalePcnt
  //               salePcnt={"70%"}
  //               className={"pl-[8px] pr-[12px]"}
  //             ></SalePcnt>
  //             <SaleTxt saleTxt={"sale for all electronics!"}></SaleTxt>
  //           </Flex>
  //           <Button className={"ml-[50px] mt-[49px]"}>Shop Now</Button>
  //         </div>
  //         <div className="bg-[url('/src/assets/furnitureSale.png')] bg-cover bg-no-repeat bg-center py-[66px] mt-[20px]">
  //           <SubHeading
  //             className={"ml-[50px]"}
  //             subHeading={"Furniture Offer"}
  //           ></SubHeading>
  //           <Flex className={"ml-[50px] mt-[36px]"}>
  //             <SaleTxt saleTxt={"Up to"}></SaleTxt>
  //             <SalePcnt
  //               salePcnt={"50%"}
  //               className={"pl-[8px] pr-[12px]"}
  //             ></SalePcnt>
  //             <SaleTxt saleTxt={"sale for all furniture items!"}></SaleTxt>
  //           </Flex>
  //           <Button className={"ml-[50px] mt-[49px]"}>Shop Now</Button>
  //         </div>
  //       </div>
  //     </Flex>
  //   </Container>

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
