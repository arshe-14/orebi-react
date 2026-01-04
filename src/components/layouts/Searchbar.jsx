import React, { useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Flex from "../Flex";

const Searchbar = () => {
  const [show, setShow] = useState(false);

  const [acc, setAcc] = useState(false);

  const [cart, setCart] = useState(false);

  return (
    <div className="bg-[#F5F5F3] py-[25px] border-t-[1px] border-t-[#979797] border-b-[1px] border-b-[#979797]">
      <Container>
        <Flex className={"justify-between"}>
          <ul className="py-[15px] w-[20%] relative">
            <li>
              <div
                onClick={() => {
                  if (show === true) {
                    setShow(false);
                  } else {
                    setShow(true);
                  }
                }}
                className="flex items-center gap-x-[11px]"
              >
                <svg
                  width="19"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z"
                    fill="#262626"
                  />
                  <path
                    d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z"
                    fill="#262626"
                  />
                </svg>{" "}
                <h4 className="font-dmFont font-normal text-[14px] text-primaryColor cursor-pointer">
                  Shop by Category
                </h4>
              </div>
            </li>
          </ul>
          {show && (
            <div className="w-[265px] bg-[#262626] text-[#FFFFFF70] font-dmFont font-normal text-[14px] absolute top-38 left-4">
              <ul>
                <Link to={"/shop"}>
                  <li className="border-b-1 border-b-[#2D2D2D] py-4 px-[21px] hover:text-white hover:mx-[10px] duration-300 ease-in-out">
                    Accesories
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="border-b-1 border-b-[#2D2D2D] py-4 px-[21px] hover:text-white hover:mx-[10px] duration-300 ease-in-out">
                    Furniture
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="border-b-1 border-b-[#2D2D2D] py-4 px-[21px] hover:text-white hover:mx-[10px] duration-300 ease-in-out">
                    Electronics
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="border-b-1 border-b-[#2D2D2D] py-4 px-[21px] hover:text-white hover:mx-[10px] duration-300 ease-in-out">
                    Clothes
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="border-b-1 border-b-[#2D2D2D] py-4 px-[21px] hover:text-white hover:mx-[10px] duration-300 ease-in-out">
                    Bags
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="border-b-1 border-b-[#2D2D2D] py-4 px-[21px] hover:text-white hover:mx-[10px] duration-300 ease-in-out">
                    Home appliances
                  </li>
                </Link>
              </ul>
            </div>
          )}
          <div className="py-[16px] bg-[#ffffff] flex justify-around w-[50%]">
            <input
              className=" w-[500px] outline-0 font-dmFont text-[14px] placeholder:text-[#C4C4C4] font-normal"
              type="text"
              placeholder="Search Products"
            />
            <FaSearch className="text-[15px]" />
          </div>
          <div className="w-[20%]">
            <ul>
              <Flex className={"justify-end"}>
                <div
                  className="flex relative"
                  onClick={() => {
                    if (acc === true) {
                      setAcc(false);
                    } else {
                      setAcc(true);
                    }
                  }}
                >
                  <li>
                    <Link>
                      <FaUserAlt />
                    </Link>
                  </li>
                  <li className="ml-[11px] mt-[-3px]">
                    <Link>
                      <FaSortDown />
                    </Link>
                  </li>
                  {acc && (
                    <div className="w-[265px] bg-[#262626] text-[#FFFFFF70] font-dmFont font-normal text-[14px] absolute top-5 right-0">
                      <ul>
                        <Link to={"/Login"}>
                          <li className="border-b-1 border-b-[#2D2D2D] py-4 px-[21px] hover:text-white hover:mx-[10px] duration-300 ease-in-out">
                            Login
                          </li>
                        </Link>
                        <Link to={"/SignUp"}>
                          <li className="border-b-1 border-b-[#2D2D2D] py-4 px-[21px] hover:text-white hover:mx-[10px] duration-300 ease-in-out">
                            SignUp
                          </li>
                        </Link>
                        <Link to={"/MyAccount"}>
                          <li className="border-b-1 border-b-[#2D2D2D] py-4 px-[21px] hover:text-white hover:mx-[10px] duration-300 ease-in-out">
                            My Account
                          </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onClick={() => {
                    if (cart === true) {
                      setCart(false);
                    } else {
                      setCart(true);
                    }
                  }}
                >
                  <li className="ml-[41px]">
                    <Link>
                      <FaShoppingCart />
                    </Link>
                  </li>
                  {cart && (
                    <div className="w-[265px] bg-[#262626] text-[#FFFFFF70] font-dmFont font-normal text-[14px] absolute top-5 right-0">
                      <ul>
                        <Link to={"/Cart"}>
                          <li className="border-b-1 border-b-[#2D2D2D] py-4 px-[21px] hover:text-white hover:mx-[10px] duration-300 ease-in-out">
                            Cart
                          </li>
                        </Link>
                        <Link to={"/Checkout"}>
                          <li className="border-b-1 border-b-[#2D2D2D] py-4 px-[21px] hover:text-white hover:mx-[10px] duration-300 ease-in-out">
                            Checkout
                          </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </div>
              </Flex>
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Searchbar;
