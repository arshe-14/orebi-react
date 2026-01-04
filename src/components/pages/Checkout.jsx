import React from "react";
import Heading from "../Heading";
import { FaGreaterThan } from "react-icons/fa6";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import Container from "../Container";
import SubHeading from "../SubHeading";
import Flex from "../Flex";
import { TiArrowSortedDown } from "react-icons/ti";
import Image from "../Image";
import bgShape from "/src/assets/bgShape.png";

const Checkout = () => {
  return (
    <>
      <Container>
        <Heading heading={"Checkout"} className={"mt-[40px] mb-[11px]"} />
        <Breadcrumb
          breadcrumbMain={<Link to={"/"}>Home</Link>}
          breadcrumbSign={<FaGreaterThan />}
          breadcrumbSub={"Checkout"}
        />
        <div className="mt-[127px] mb-[119px] font-dmFont font-normal text-[16px]">
          <span className="text-[#767676]">Have a coupon? </span>
          <Link to={"/"}>
            <span className="text-primaryColor">
              Click here to enter your code
            </span>
          </Link>
        </div>
        <SubHeading subHeading={"Billing Details"} className={"mb-[42px]"} />
        <div className="mb-[119px]">
          <Flex className={"gap-x-[40px]"}>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
                First Name *
              </h4>
              <input
                type="text"
                className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
                placeholder="First Name"
              />
            </div>
            <div className=" w-[35%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
              <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
                Last Name *
              </h4>
              <input
                type="text"
                className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
                placeholder="Last Name"
              />
            </div>
          </Flex>

          <div className=" w-[73%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px] ">
            <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
              Company Name (optional)
            </h4>
            <input
              type="text"
              className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
              placeholder="Company Name"
            />
          </div>
          <div className=" w-[73%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
            <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
              Country *
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
          <div className=" w-[73%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
            <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
              Street Address *
            </h4>
            <input
              type="text"
              className="border-b-1 border-[#F0F0F0] pb-[16px] font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
              placeholder="House number and street name"
            />
            <input
              type="text"
              className="font-normal text-[14px] text-[#767676] mt-[16px] font-dmFont mt-2.5 w-full outline-0 "
              placeholder="Apartment, suite, unit etc. (optional)"
            />
          </div>
          <div className=" w-[73%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
            <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
              Town/City *
            </h4>
            <input
              type="text"
              className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
              placeholder="Town/City"
            />
          </div>
          <div className=" w-[73%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
            <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
              Country (optional)
            </h4>
            <input
              type="text"
              className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
              placeholder="Country"
            />
          </div>
          <div className=" w-[73%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
            <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
              Post Code *
            </h4>
            <input
              type="text"
              className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
              placeholder="Post Code"
            />
          </div>
          <div className=" w-[73%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
            <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
              Phone *
            </h4>
            <input
              type="text"
              className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
              placeholder="Phone"
            />
          </div>
          <div className=" w-[73%] border-b-1 border-[#F0F0F0] pb-[16px] mb-[24px]">
            <h4 className="font-dmFont font-bold text-[16px] text-primaryColor ">
              Email Address *
            </h4>
            <input
              type="text"
              className="font-normal text-[14px] text-[#767676] font-dmFont mt-2.5 w-full outline-0 "
              placeholder="Email"
            />
          </div>
        </div>
        <div className="">
          <SubHeading subHeading={"Additional Information"} />
          <h5 className="mt-[42px] mb-[10px] font-bold font-dmFont text-[16px] text-primaryColor">
            Other Notes (optional)
          </h5>
          <input
            type="text"
            className="font-normal text-[14px] text-[#767676] font-dmFont pb-[87px] border-b-1 border-[#F0F0F0] w-[73%] mb-[129px] outline-0 "
            placeholder="Notes about your order, e.g. special notes for delivery."
          />
        </div>
        <div className="">
          <SubHeading subHeading={"Your Order"} />
          <div className="w-[644px] mt-[48px] mb-[60px]">
            <Flex>
              <h5 className="pt-[17px] pl-[20px] pb-[14px] pr-[237px] border-1 border-[#F0F0F0] font-bold text-[16px] text-primaryColor font-dmFont">
                Product
              </h5>
              <h5 className="pt-[17px] pl-[20px] pb-[14px] pr-[264px] border-1 border-[#F0F0F0] font-normal text-[16px] text-[#767676] font-dmFont">
                Total
              </h5>
            </Flex>
            <Flex>
              <h5 className="pt-[17px] pl-[20px] pb-[14px] pr-[168px] border-1 border-[#F0F0F0] font-bold text-[16px] text-primaryColor font-dmFont">
                Product name x 1
              </h5>
              <h5 className="pt-[17px] pl-[20px] pb-[14px] pr-[234px] border-1 border-[#F0F0F0] font-normal text-[16px] text-[#767676] font-dmFont">
                389.99 $
              </h5>
            </Flex>
            <Flex>
              <h5 className="pt-[17px] pl-[20px] pb-[14px] pr-[234px] border-1 border-[#F0F0F0] font-bold text-[16px] text-primaryColor font-dmFont">
                Subtotal
              </h5>
              <h5 className="pt-[17px] pl-[20px] pb-[14px] pr-[234px] border-1 border-[#F0F0F0] font-normal text-[16px] text-primaryColor font-dmFont">
                389.99 $
              </h5>
            </Flex>
            <Flex>
              <h5 className="pt-[17px] pl-[20px] pb-[14px] pr-[262px] border-1 border-[#F0F0F0] font-bold text-[16px] text-primaryColor font-dmFont">
                Total
              </h5>
              <h5 className="pt-[17px] pl-[20px] pb-[14px] pr-[234px] border-1 border-[#F0F0F0] font-normal text-[16px] text-primaryColor font-dmFont">
                389.99 $
              </h5>
            </Flex>
            {/* <div className="flex justify-end">
              <Link to={"/"}>
                <button className="py-[16px] pl-[24.5px] mt-[30px] pr-[31.5px] border-1 border-[#262626] bg-white font-bold font-dmFont text-[14px] text-primaryColor hover:text-white hover:bg-[#262626]  cursor-pointer duration-300">
                  Proceed to Checkout
                </button>
              </Link>
            </div> */}
          </div>
        </div>
        <div className="mb-[140px] pt-[24px] pb-[30px] px-[34px] border-1 border-[#F0F0F0] w-[73%]">
          <Flex>
            <label class="relative w-4 h-4 rounded-full border-2 border-black cursor-pointer flex justify-center items-center">
              <input
                type="checkbox"
                class="absolute w-full h-full opacity-0 cursor-pointer"
              />
              <div class="w-2 h-2 rounded-full bg-black opacity-0 transition-opacity"></div>
            </label>
            <h6 className="ml-[20px] font-bold text-[16px] text-primaryColor font-dmFont">
              Bank
            </h6>
          </Flex>
          <div className="mt-[14px] mb-[26px] relative">
            <Image src={bgShape} />
            <h5 className="font-dmFont text-[14px] text-[#767676] font-normal absolute top-6 left-6.5">
              Pay via Bank; you can pay with your credit card if you don’t have
              a Bank account.
            </h5>
          </div>
          <Flex>
            <label class="relative w-4 h-4 rounded-full border-2 border-black cursor-pointer flex justify-center items-center">
              <input
                type="checkbox"
                class=" absolute w-full h-full opacity-0 cursor-pointer"
              />
              <div class="w-2 h-2 rounded-full bg-black opacity-0  transition-opacity"></div>
            </label>
            <h6 className="ml-[20px] font-bold text-[16px] text-primaryColor font-dmFont">
              Bank 2
            </h6>
          </Flex>
          <div className="mb-[24px] mt-[15px] font-dmFont font-normal text-[16px] leading-7.5">
            <span className="text-[#767676]">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our
            </span>
            <span className="text-primaryColor"> privacy policy.</span>
          </div>
          <Link to={"/"}>
            <button className="py-[16px] pl-[42px] pr-[47px] border-1 border-[#262626] bg-white font-bold font-dmFont text-[14px] text-primaryColor hover:text-white hover:bg-[#262626]  cursor-pointer duration-300">
              Proceed to Bank
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
