import React from "react";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import Container from "../Container";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Container>
        {/* Header Top Part Start  */}
        <Flex>
          <div className="w-[40%] py-[32px]">
            <Image src={logo} />
          </div>
          <div className="">
            <ul className="flex justify-between w-[60%] gap-x-[25px]">
              <li>
                <Link
                  to={"/"}
                  className="font-dmFont font-normal text-[14px] text-[#767676] hover:text-primaryColor duration-300 hover:font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/shop"}
                  className="font-dmFont font-normal text-[14px] text-[#767676] hover:text-primaryColor duration-300 hover:font-bold"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="font-dmFont font-normal text-[14px] text-[#767676] hover:text-primaryColor duration-300 hover:font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/contacts"}
                  className="font-dmFont font-normal text-[14px] text-[#767676] hover:text-primaryColor duration-300 hover:font-bold"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  to={"/journal"}
                  className="font-dmFont font-normal text-[14px] text-[#767676] hover:text-primaryColor duration-300 hover:font-bold"
                >
                  Journal
                </Link>
              </li>
            </ul>
          </div>
        </Flex>
        {/* Header Top Part End  */}
      </Container>

      {/* Header Bottom Part Start  */}
      <div className="bg-[#F5F5F3] py-[25px] border-t-[1px] border-t-[#979797] border-b-[1px] border-b-[#979797]">
        <Container>
          <Flex className={"justify-between"}>
            <ul className="py-[15px] w-[20%]">
              <li>
                <Link to={"/shop"} className="flex items-center gap-x-[11px]">
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
                  <h4 className="font-dmFont font-normal text-[14px] text-primaryColor">
                    Shop by Category
                  </h4>
                </Link>
              </li>
            </ul>
            <div className="py-[16px] bg-[#ffffff] flex justify-around w-[50%]">
              <input
                className=" w-[500px] outline-0 font-dmFont text-[14px] placeholder:text-[#C4C4C4] font-normal"
                type="text"
                placeholder="Search Products"
              />{" "}
              <FaSearch className="text-[15px]" />
            </div>
            <div className="w-[20%]">
              <ul>
                <Flex className={"justify-end"}>
                  <li>
                    <Link>
                      <FaUserAlt />
                    </Link>
                  </li>
                  <li className="ml-[11px] mt-[-5px]">
                    <Link>
                      <FaSortDown />
                    </Link>
                  </li>
                  <li className="ml-[41px]">
                    <Link>
                      <FaShoppingCart />
                    </Link>
                  </li>
                </Flex>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Bottom Part End  */}
    </div>
  );
};

export default Header;
