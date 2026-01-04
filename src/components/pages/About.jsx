import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { FaGreaterThan } from "react-icons/fa6";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import Image from "../Image";
import xlTableClock from "/src/assets/xlTableClock.png";
import xlBigBasket from "/src/assets/xlBigBasket.png";
import Flex from "../Flex";

const About = () => {
  return (
    <>
      <>
        <Container>
          <div className="mb-[136px]">
            <Heading heading={"About"} className={"mt-[40px] mb-[11px]"} />
            <Breadcrumb
              breadcrumbMain={<Link to={"/"}>Home</Link>}
              breadcrumbSign={<FaGreaterThan />}
              breadcrumbSub={"About"}
            />
          </div>
          <Flex className={"justify-between mb-[128px]"}>
            <div className="w-[49%]">
              <Link to={"/"}>
                <Image src={xlTableClock} />
              </Link>
            </div>
            <div className="w-[48%]">
              <Link to={"/"}>
                <Image src={xlBigBasket} />
              </Link>
            </div>
          </Flex>
          <h4 className="font-dmFont font-normal text-[35px] leading-[52px] mb-[118px] text-primaryColor">
            Orebi is one of the world’s leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking style.
          </h4>
          <div className="mb-[121px] flex justify-between ">
            <div className="">
              <h5 className="font-bold text-[25px] text-primaryColor font-dmFont">
                Our Vision
              </h5>
              <p className="font-normal text-[12.5px] text-[#767676] font-dmFont mt-[11px] w-[410px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="">
              <h5 className="font-bold text-[25px] text-primaryColor font-dmFont">
                Our Story
              </h5>
              <p className="font-normal text-[12.5px] text-[#767676] font-dmFont mt-[11px] w-[410px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic.
              </p>
            </div>
            <div className="">
              <h5 className="font-bold text-[25px] text-primaryColor font-dmFont">
                Our Brands
              </h5>
              <p className="font-normal text-[12.5px] text-[#767676] font-dmFont mt-[11px] w-[410px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </div>
        </Container>
      </>
    </>
  );
};

export default About;
