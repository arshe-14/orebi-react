import React from "react";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import Container from "../Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
};

export default Header;
