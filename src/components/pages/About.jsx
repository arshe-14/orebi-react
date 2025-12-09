import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import Flex from "../Flex";
import Button from "../Button";

const About = () => {
  return (
    <div className="">
      <Container>
        <Heading heading={"About"} className={"mt-[124px] mb-[11px]"}></Heading>
        <p>
          <ul className="flex items-center gap-x-[10px] mb-[136px]">
            <li className="font-dmFont font-normal text-[12px] text-[#767676]">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="font-dmFont font-normal text-[8px] text-[#767676]">
              <Link to={""}>
                <FaGreaterThan />
              </Link>
            </li>
            <li className="font-dmFont font-normal text-[12px] text-[#767676]">
              <Link to={""}>About</Link>
            </li>
          </ul>
        </p>
        <Flex className={"gap-x-[40px] mb-[128px]"}>
          <div className="w-1/2">
            <div className="bg-[url('/src/assets/tableClockL.png')] pt-[638px] pb-[62px] bg-center bg-no-repeat bg-cover">
              <Button className={"ml-[215px]"}>Our Brands</Button>
            </div>
          </div>
          <div className="w-1/2">
            <div className="bg-[url('/src/assets/basketL.png')] pt-[638px] pb-[62px] bg-center bg-no-repeat bg-cover">
              <Button className={"ml-[215px]"}>Our Stores</Button>
            </div>
          </div>
        </Flex>
        <p className="font-dmFont font-normal text-[35px] leading-[52px] text-primaryColor mb-[118px]">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>
        <div className={"justify-between gap-x-[40px] flex mb-[131px]"}>
          <div className="w-1/3">
            <h4 className="font-dmFont font-bold text-[25px] text-primaryColor mb-[11px]">
              Our Vision
            </h4>
            <p className="font-dmFont font-normal text-[13px] leading-[30px] text-[#767676]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="w-1/3">
            <h4 className="font-dmFont font-bold text-[25px] text-primaryColor mb-[11px]">
              Our Story
            </h4>
            <p className="font-dmFont font-normal text-[13px] leading-[30px] text-[#767676]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </p>
          </div>
          <div className="w-1/3">
            <h4 className="font-dmFont font-bold text-[25px] text-primaryColor mb-[11px]">
              Our Brands
            </h4>
            <p className="font-dmFont font-normal text-[13px] leading-[30px] text-[#767676]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
