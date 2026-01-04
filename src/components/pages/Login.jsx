import React from "react";
import Heading from "../Heading";
import { FaGreaterThan } from "react-icons/fa6";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import Container from "../Container";
import SubHeading from "../SubHeading";
import Flex from "../Flex";
import { FaCircle } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <Container>
        <Heading heading={"Login"} className={"mt-[40px] mb-[11px]"} />
        <Breadcrumb
          breadcrumbMain={<Link to={"/"}>Home</Link>}
          breadcrumbSign={<FaGreaterThan />}
          breadcrumbSub={"Login"}
        />
        <div className="pb-[62px] border-b-1 border-[#F0F0F0] mb-[57px] ">
          <div className=" mt-[127px] w-[644px] font-normal text-[16px] text-[#767676] font-dmFont ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </div>
        </div>
        <SubHeading subHeading={"Returning Customer"} className={"mb-[42px]"} />
        <div className="">
          <Flex className={"gap-x-[40px]"}>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[29px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor">
                Email address
              </h4>
              <input
                type="email"
                className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
                placeholder="company@domain.com"
              />
            </div>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[29px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor">
                Password
              </h4>

              <Flex
                className={
                  " mt-2.5 text-[7px] gap-x-1 text-[#767676] font-dmFont "
                }
              >
                <input
                  type="password"
                  className="font-normal text-[14px] text-[#767676] font-dmFont  w-full outline-0 "
                  placeholder="Type password"
                />
              </Flex>
            </div>
          </Flex>
        </div>
        <div className="pb-[70px] border-b-1 border-[#F0F0F0] mb-[58px]">
          <Link to={"/"}>
            <button className="py-[16px] pl-[77px] pr-[83px] border-1 border-[#262626] bg-white font-bold font-dmFont text-[14px] text-primaryColor hover:text-white hover:bg-[#262626]  cursor-pointer duration-300">
              Log in
            </button>
          </Link>
        </div>
        <div className="mb-[140px]">
          <SubHeading subHeading={"New Customer"} />
          <p className="w-[644px] mt-[38px] mb-[51px] font-dmFont font-normal text-[16px] text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <Link to={"/"}>
            <button className="py-[16px] pl-[65.5px] pr-[71.5px] border-1 border-[#262626] bg-white font-bold font-dmFont text-[14px] text-primaryColor hover:text-white hover:bg-[#262626]  cursor-pointer duration-300">
              Continue
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Login;
