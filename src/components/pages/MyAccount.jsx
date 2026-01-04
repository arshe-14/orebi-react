import React from "react";
import Heading from "../Heading";
import { FaGreaterThan } from "react-icons/fa6";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";

const MyAccount = () => {
  return (
    <>
      <Container>
        <Heading heading={"My Account"} className={"mt-[40px] mb-[11px]"} />
        <Breadcrumb
          breadcrumbMain={<Link to={"/"}>Home</Link>}
          breadcrumbSign={<FaGreaterThan />}
          breadcrumbSub={"My Account"}
        />
        <div className="mb-[140px]">
          <div className="mt-[127px]">
            <div className="flex">
              <div className="">
                <h4 className="pb-[19px] pr-[149px] hover:font-bold font-dmFont text-[16px] text-[#767676] font-normal duration-300 cursor-pointer border-b-1 border-[#F0F0F0] hover:text-primaryColor border-">
                  Dashboard
                </h4>
                <h4 className="mt-[20px] pb-[19px] pr-[183px] hover:font-bold font-dmFont text-[16px] text-[#767676] font-normal duration-300 cursor-pointer border-b-1 border-[#F0F0F0] hover:text-primaryColor border-">
                  Others
                </h4>
                <h4 className="mt-[20px] pb-[19px] pr-[152px] hover:font-bold font-dmFont text-[16px] text-[#767676] font-normal duration-300 cursor-pointer border-b-1 border-[#F0F0F0] hover:text-primaryColor border-">
                  Donwloads
                </h4>
                <h4 className="mt-[20px] pb-[19px] pr-[155px] hover:font-bold font-dmFont text-[16px] text-[#767676] font-normal duration-300 cursor-pointer border-b-1 border-[#F0F0F0] hover:text-primaryColor border-">
                  Addresses
                </h4>
                <h4 className="mt-[20px] pb-[19px] pr-[118px] hover:font-bold font-dmFont text-[16px] text-[#767676] font-normal duration-300 cursor-pointer border-b-1 border-[#F0F0F0] hover:text-primaryColor border-">
                  Account details
                </h4>
                <h4 className="mt-[20px] pb-[19px] pr-[183px] hover:font-bold font-dmFont text-[16px] text-[#767676] font-normal duration-300 cursor-pointer border-b-1 border-[#F0F0F0] hover:text-primaryColor border-">
                  Logout
                </h4>
              </div>
              <div className="w-[960px]">
                <div className="ml-[40px] font-dmFont font-normal text-[16px] ">
                  <span className="text-[#767676]">Hello</span>
                  <span className="text-primaryColor"> admin</span>
                  <span className="text-[#767676]"> (not</span>
                  <span className="text-primaryColor"> admin</span>
                  <span className="text-[#767676]">?</span>
                  <span className="text-primaryColor"> Log out</span>
                  <span className="text-[#767676]">)</span>
                </div>
                <div className="ml-[40px] font-dmFont font-normal text-[16px] mt-8 leading-7.5">
                  <span className="text-[#767676]">
                    From your account dashboard you can view your
                  </span>
                  <span className="text-primaryColor"> recent orders</span>
                  <span className="text-[#767676]">, manage your </span>
                  <span className="text-primaryColor">
                    shipping and billing addresses
                  </span>
                  <span className="text-[#767676]">, and </span>
                  <span className="text-primaryColor">
                    edit your password and account details.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MyAccount;
