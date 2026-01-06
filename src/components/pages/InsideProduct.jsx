import React from "react";
import Breadcrumb from "../Breadcrumb";
import Container from "../Container";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import Flex from "../Flex";
import Image from "../Image";
import xlBasket from "/src/assets/xlBasket.png";
import xlSunglass from "/src/assets/xlSunglass.png";
import xlHeadphone from "/src/assets/xlHeadphone.png";
import xlTable from "/src/assets/xlTable.png";
import SubHeading from "../SubHeading";
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Counter from "../layouts/Counter";

const InsideProduct = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="mb-[136px]">
          <Breadcrumb
            breadcrumbMain={<Link to={"/"}>Home</Link>}
            breadcrumbSign={<FaGreaterThan />}
            breadcrumbSub={"Products"}
          />
        </div>
        <div className="">
          <Flex className={"justify-between"}>
            <div className="w-[49%] mb-10">
              <Image src={xlBasket} />
            </div>
            <div className="w-[49%] mb-10">
              <Image src={xlSunglass} />
            </div>
          </Flex>
          <Flex className={"justify-between"}>
            <div className="w-[49%] mb-10">
              <Image src={xlHeadphone} />
            </div>
            <div className="w-[49%] mb-10">
              <Image src={xlTable} />
            </div>
          </Flex>
        </div>
        <div className="mt-[10px]">
          <SubHeading subHeading={"Product"} className={"mb-[15px]"} />
          <Flex className={"text-[#FFD881] gap-x-1 mb-[25px]"}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <div className="font-dmFont text-[14px] font-normal text-[#767676] ml-[25px]">
              1 Review
            </div>
          </Flex>
          <Flex
            className={
              "pb-[26px] border-b-1 border-[#F0F0F0] mb-[30px] w-[50%]"
            }
          >
            <h6 className="font-dmFont text-[16px] font-normal text-[#767676] line-through">
              $88.00
            </h6>
            <h5 className="ml-[22px] font-dmFont font-bold text-[20px] text-primaryColor ">
              $44.00
            </h5>
          </Flex>
          <Flex>
            <h6 className="font-dmFont font-bold text-[16px] text-primaryColor">
              COLOR:
            </h6>
            <Flex className={"ml-[53px] gap-x-[15px]"}>
              <FaCircle className="text-[#979797] hover:text-2xl duration-300 cursor-pointer" />
              <FaCircle className="text-[#FF8686] hover:text-2xl duration-300 cursor-pointer" />
              <FaCircle className="text-[#7ED321] hover:text-2xl duration-300 cursor-pointer" />
              <FaCircle className="text-[#B6B6B6] hover:text-2xl duration-300 cursor-pointer" />
              <FaCircle className="text-[#15CBA5] hover:text-2xl duration-300 cursor-pointer" />
            </Flex>
          </Flex>
          <Flex className={"mt-[30px]"}>
            <h6 className="font-dmFont font-bold text-[16px] text-primaryColor">
              SIZE:
            </h6>
            <Flex
              className={
                "px-[21px] w-[140px] py-[5px] border-1 border-[#F0F0F0] text-[16px] text-[#767676] font-dmFont font-normal gap-x-[76px] ml-[76px]"
              }
            >
              <h6>S</h6>
              <FaCaretDown />
            </Flex>
          </Flex>
          <Flex className={"mt-[30px]"}>
            <h6 className="font-dmFont font-bold text-[16px] text-primaryColor">
              QUANTITY:
            </h6>
            <Flex
              className={
                "border-1 border-[#F0F0F0] text-[16px] text-[#767676] font-dmFont font-normal ml-[76px]"
              }
            >
              <Counter />
            </Flex>
          </Flex>
          <Flex
            className={
              "py-[21px] border-t-1 border-b-1 border-[#F0F0F0] mt-[30px] w-[50%]"
            }
          >
            <h6 className="font-dmFont font-bold text-[16px] text-primaryColor">
              STATUS:
            </h6>
            <div className="text-[16px] text-[#767676] font-dmFont font-normal ml-[27px]">
              <h6>In stock</h6>
            </div>
          </Flex>
          <Flex className={"my-[30px]"}>
            <button className="py-[16px] pl-[40.5px] pr-[47.5px] border-1 border-primaryColor font-dmFont font-bold text-[14px] text-primaryColor hover:bg-[#262626] hover:text-white duration-300 cursor-pointer">
              Add to Wish List
            </button>
            <button className="ml-[20px] py-[16px] pl-[40.5px] pr-[47.5px] border-1 border-primaryColor font-dmFont font-bold text-[14px] text-primaryColor hover:bg-[#262626] hover:text-white duration-300 cursor-pointer">
              Add to Cart
            </button>
          </Flex>

          <div className="py-[24px] border-t-1 border-b-1 border-[#F0F0F0]  w-[50%]">
            <Flex className={"justify-between"}>
              <h6 className="font-dmFont font-bold text-[16px] text-primaryColor">
                FEATURES & DETAILS
              </h6>
              <FaPlus />
            </Flex>
          </div>
          <div className="py-[24px] border-b-1 border-[#F0F0F0] mb-[20px]  w-[50%]">
            <Flex className={"justify-between"}>
              <h6 className="font-dmFont font-bold text-[16px] text-primaryColor">
                SHIPPING & RETURNS
              </h6>
              <FaPlus />
            </Flex>
          </div>
          <div className="font-dmFont font-normal text-[16px] text-[#767676] w-[780px] leading-7.5 mb-[123px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="">
          <Flex className={"mb-[42px]"}>
            <h5 className="font-dmFont font-normal text-[20px] text-[#767676] hover:text-primaryColor duration-300 hover:font-bold cursor-pointer">
              Description
            </h5>
            <h5 className="font-dmFont font-normal text-[20px] text-[#767676] hover:text-primaryColor duration-300 ml-[62px] hover:font-bold cursor-pointer">
              Reviews (1)
            </h5>
          </Flex>
          <h6 className="font-dmFont font-normal text-[14px] text-[#767676] mb-[16px]">
            1 review for Product
          </h6>
          <div className="pt-[23px] pb-[15px] border-b-1 border-t-1 border-[#F0F0F0] mb-[54px]">
            <Flex className={"justify-between"}>
              <Flex>
                <h5 className="font-dmFont font-normal text-[16px] text-primaryColor">
                  John Ford
                </h5>
                <Flex className={"text-[#FFD881] gap-x-1 ml-[37px]"}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </Flex>
              </Flex>
              <h6 className="font-dmFont font-normal text-[16px] text-[#767676]">
                6 months ago
              </h6>
            </Flex>
            <p className="font-dmFont font-normal text-[13.5px] text-[#767676] leading-7.5 mt-[14px] mb-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="">
          <h4 className="font-dmFont font-bold text-[20px] text-primaryColor mb-[48px]">
            Add a Review
          </h4>
          <div className="pb-[16px] border-b-1 border-[#F0F0F0]  w-[50%]">
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
              Review
            </h5>
            <textarea
              type="text"
              rows="3"
              placeholder="Your review here"
              className="outline-0 placeholder:font-dmFont
              placeholder:font-normal placeholder:text-[14px] text-[#767676] w-full"
            />
          </div>
          <button className=" py-[16px] pl-[81.5px] pr-[88.5px] border-1 border-primaryColor font-dmFont font-bold text-[14px] text-primaryColor hover:bg-[#262626] hover:text-white duration-300 cursor-pointer mt-[30px] mb-[341px]">
            Post
          </button>
        </div>
      </Container>
    </div>
  );
};

export default InsideProduct;
