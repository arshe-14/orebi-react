import React from "react";
import Heading from "../Heading";
import { FaGreaterThan } from "react-icons/fa6";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import Container from "../Container";
import SubHeading from "../SubHeading";
import Flex from "../Flex";
import { FaCircle } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const SignUp = () => {
  return (
    <>
      <Container>
        <Heading heading={"Sign up"} className={"mt-[40px] mb-[11px]"} />
        <Breadcrumb
          breadcrumbMain={<Link to={"/"}>Home</Link>}
          breadcrumbSign={<FaGreaterThan />}
          breadcrumbSub={"Sign up"}
        />
        <div className="pb-[62px] border-b-1 border-[#F0F0F0] mb-[57px] ">
          <div className=" mt-[127px] w-[644px] font-normal text-[16px] text-[#767676] font-dmFont ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </div>
        </div>
        <SubHeading
          subHeading={"Your Personal Details"}
          className={"mb-[42px]"}
        />
        <div className="">
          <Flex className={"gap-x-[40px]"}>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
                First Name
              </h4>
              <input
                type="text"
                className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
                placeholder="First Name"
              />
            </div>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
                Last Name
              </h4>
              <input
                type="text"
                className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
                placeholder="Last Name"
              />
            </div>
          </Flex>
          <Flex className={"gap-x-[40px]"}>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[29px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
                Email address
              </h4>
              <input
                type="email"
                className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
                placeholder="company@domain.com"
              />
            </div>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[29px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
                Telephone
              </h4>
              <input
                type="text"
                className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
                placeholder="Your phone number"
              />
            </div>
          </Flex>
        </div>
        <div className="pb-[70px] border-b-1 border-[#F0F0F0] mb-[58px]"></div>
        <div className="">
          <SubHeading subHeading={"New Customer"} className={"mb-[43px]"} />
          <Flex className={"gap-x-[40px]"}>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
                Address 1
              </h4>
              <input
                type="text"
                className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
                placeholder="4279 Zboncak Port Suite 6212"
              />
            </div>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
                Address 2
              </h4>
              <input
                type="text"
                className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
                placeholder="—"
              />
            </div>
          </Flex>
          <Flex className={"gap-x-[40px]"}>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
                City
              </h4>
              <input
                type="text"
                className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
                placeholder="Your city"
              />
            </div>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
                Post Code
              </h4>
              <input
                type="text"
                className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
                placeholder="05228"
              />
            </div>
          </Flex>
          <Flex className={"gap-x-[40px]"}>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
                Country
              </h4>
              <div className="relative">
                <select className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full  appearance-none cursor-pointer outline-0">
                  <option>Please select</option>
                  <option>Bangladesh</option>
                  <option>UK</option>
                  <option>Australia</option>
                  <option>Italy</option>
                </select>
                <TiArrowSortedDown className="absolute top-1/2 cursor-pointer right-0 mr-[20px]" />
              </div>
            </div>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
                Region/State
              </h4>
              <div className="relative">
                <select className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full  appearance-none cursor-pointer outline-0">
                  <option>Please select</option>
                  <option>Dhaka</option>
                  <option>England</option>
                  <option>Canberra</option>
                  <option>Rome</option>
                </select>
                <TiArrowSortedDown className="absolute top-1/2 cursor-pointer right-0 mr-[20px]" />
              </div>
            </div>
          </Flex>
          <div className="pb-[70px] border-b-1 border-[#F0F0F0] mb-[58px]"></div>
        </div>
        <SubHeading subHeading={"Your Password"} className={"mb-[42px]"} />
        <div className="">
          <Flex className={"gap-x-[40px]"}>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[29px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor">
                Password
              </h4>
              <input
                type="password"
                className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
                placeholder="Password"
              />
            </div>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[29px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor">
                Repeat Password
              </h4>

              <Flex
                className={
                  " mt-2.5 text-[7px] gap-x-1 text-[#767676] font-dmFont "
                }
              >
                <input
                  type="password"
                  className="font-normal text-[14px] text-[#767676] font-dmFont  w-full outline-0 "
                  placeholder="Repeat password"
                />
              </Flex>
            </div>
          </Flex>
          <div className="pb-[70px] border-b-1 border-[#F0F0F0] mb-[65px]"></div>
        </div>
        <div className="">
          <Flex className={"mb-[23px]"}>
            <input
              type="checkbox"
              className="h-4 w-4 accent-white border-1 border-black text-[#767676]"
            />
            <h5 className="ml-[15px] font-dmFont font-normal text-[14px] text-[#767676]">
              I have read and agree to the Privacy Policy
            </h5>
          </Flex>
          <Flex className={"mb-[27px]"}>
            <h5 className=" font-dmFont font-normal text-[14px] text-[#767676]">
              Subscribe Newsletter
            </h5>
            <input
              type="checkbox"
              className="h-4 w-4 accent-white border-1 border-black text-[#767676] ml-[33px]"
            />
            <h5 className=" font-dmFont font-normal text-[14px] text-[#767676] ml-[15px]">
              Yes
            </h5>
            <input
              type="checkbox"
              className="h-4 w-4 accent-white border-1 border-black text-[#767676] ml-[41px]"
            />
            <h5 className=" font-dmFont font-normal text-[14px] text-[#767676] ml-[17px]">
              No
            </h5>
          </Flex>
        </div>
        <Link to={"/"}>
          <button className="mt-[10px] mb-[140px] py-[16px] pl-[77px] pr-[83px] border-1 border-[#262626] bg-white font-bold font-dmFont text-[14px] text-primaryColor hover:text-white hover:bg-[#262626]  cursor-pointer duration-300">
            Log in
          </button>
        </Link>
      </Container>
    </>
  );
};

export default SignUp;
