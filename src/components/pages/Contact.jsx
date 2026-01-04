import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Breadcrumb from "../Breadcrumb";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import SubHeading from "../SubHeading";
import Image from "../Image";
import Map from "/src/assets/Map.png";
import Flex from "../Flex";
import { FaPlus } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <Container>
        <Heading heading={"Contacts"} className={"mt-[40px] mb-[11px]"} />
        <Breadcrumb
          breadcrumbMain={<Link to={"/"}>Home</Link>}
          breadcrumbSign={<FaGreaterThan />}
          breadcrumbSub={"Contacts"}
        />
        <div className="mt-[125px]">
          <div className="">
            <SubHeading subHeading={"Fill up a Form"} className={"mb-[42px]"} />
            <div className="pb-[16.5px] border-b-1 border-[#F0F0F0]  w-[50%]">
              <h5 className="font-dmFont font-bold text-[16px] text-primaryColor mb-[10px]">
                Name
              </h5>
              <input
                type="text"
                placeholder="Your name here"
                className="outline-0 placeholder:font-dmFont
              placeholder:font-normal placeholder:text-[14px] text-[#767676]"
              />
            </div>
            <div className="pb-[16px] border-b-1 border-[#F0F0F0] mt-[23px]  w-[50%]">
              <h5 className="font-dmFont font-bold text-[16px] text-primaryColor mb-[10px]">
                Email
              </h5>
              <input
                type="text"
                placeholder="Your email here"
                className="outline-0 placeholder:font-dmFont
              placeholder:font-normal placeholder:text-[14px] text-[#767676]"
              />
            </div>
            <div className="pb-[16px] border-b-1 border-[#F0F0F0] mt-[23px]  w-[50%]">
              <h5 className="font-dmFont font-bold text-[16px] text-primaryColor mb-[10px]">
                Message
              </h5>
              <textarea
                type="text"
                rows="3"
                placeholder="Your message here"
                className="outline-0 placeholder:font-dmFont
              placeholder:font-normal placeholder:text-[14px] text-[#767676] w-full"
              />
            </div>
            <button className=" py-[16px] pl-[81.5px] pr-[88.5px] border-1 border-primaryColor font-dmFont font-bold text-[14px] text-primaryColor hover:bg-[#262626] hover:text-white duration-300 cursor-pointer mt-[30px] mb-[140px]">
              Post
            </button>
          </div>
        </div>
        <div className="relative">
          <Image src={Map} className={"w-full mb-[140px]"} />
        </div>
        <div className="w-[451px]  pt-[30px] pb-[25px] bg-white absolute top-290 left-20">
          <Flex
            className={
              "justify-between border-b-1 border-[#F0F0F0] pb-[29px] pl-[20px] pr-[36px]"
            }
          >
            <h5 className="font-dmFont font-bold text-[16px] text-primaryColor ">
              Germany Office
            </h5>
            <FaPlus />
          </Flex>
          <Flex
            className={
              "justify-between border-b-1 border-[#F0F0F0] pb-[29px] pl-[20px] pr-[36px]"
            }
          >
            <h5 className="font-dmFont font-bold text-[16px] text-primaryColor mt-[30px]">
              Slovakia Office
            </h5>
            <FaPlus />
          </Flex>
          <div className="pl-[20px] pr-[36px]">
            <h5 className="font-dmFont font-bold text-[16px] text-primaryColor mt-[30px]">
              Lithuania Office
            </h5>
            <div className="font-dmFont font-normal text-[16px] text-[#767676]">
              <h6 className="mt-[20px]">
                575 Crescent Ave. Quakertown, PA 18951
              </h6>
              <h6 className="mt-[11px]">+432 533 12 523</h6>
              <h6 className="mt-[11px]">info@domain.com</h6>

              <h6 className="mt-[11px]">Mon - Fri: 9am - 6pm</h6>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
