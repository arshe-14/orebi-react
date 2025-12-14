import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import Image from "../Image";
import logoLarge from "/src/assets/logoLarge.png";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] py-[55px]">
      <Container className={"flex justify-between"}>
        <div className="">
          <h4 className="font-dmFont font-bold text-[16px] text-[#262626]">
            MENU
          </h4>
          <ul>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pt-[17px] pb-[6px]">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pb-[6px]">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pb-[6px]">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pb-[6px]">
              <Link to={"contacts"}>Contact</Link>
            </li>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pb-[6px]">
              <Link to={"/journal"}>Journal</Link>
            </li>
          </ul>

          <ul>
            <Flex className={"gap-x-[13.5px] mt-[60px]"}>
              <li className="font-[20px]">
                <Link>
                  <FaFacebookF />
                </Link>
              </li>
              <li className="font-[20px]">
                <Link>
                  <GrLinkedinOption />
                </Link>
              </li>
              <li className="font-[20px]">
                <Link>
                  <FaInstagram />
                </Link>
              </li>
            </Flex>
          </ul>
        </div>
        <div className="">
          <h4 className="font-dmFont font-bold text-[16px] text-[#262626]">
            SHOP
          </h4>
          <ul>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pt-[17px] pb-[6px]">
              <Link>Category 1</Link>
            </li>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pb-[6px]">
              <Link>Category 2</Link>
            </li>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pb-[6px]">
              <Link>Category 3</Link>
            </li>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pb-[6px]">
              <Link>Category 4</Link>
            </li>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pb-[6px]">
              <Link>Category 5</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="font-dmFont font-bold text-[16px] text-[#262626]">
            Help
          </h4>
          <ul>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pt-[17px] pb-[6px]">
              <Link>Privacy Policy</Link>
            </li>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pb-[6px]">
              <Link>Terms & Conditions</Link>
            </li>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pb-[6px]">
              <Link>Special E-shop</Link>
            </li>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pb-[6px]">
              <Link>Shipping</Link>
            </li>
            <li className="font-normal font-dmFont text-[14px] text-[#6D6D6D] pb-[6px]">
              <Link>Secure Payments</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="font-dmFont font-bold text-[16px] text-primaryColor">
            (052) 611-5711
          </h4>
          <h4 className="font-dmFont font-bold text-[16px] text-primaryColor mt-[5px]">
            company@domain.com
          </h4>
          <p className="font-dmFont font-normal text-[#6D6D6D] text-[14px] mt-[15px]">
            575 Crescent Ave. Quakertown, PA 18951
          </p>
        </div>
        <div className="">
          <Image src={logoLarge} />
          <p className="font-dmFont font-normal text-[14px] text-[#6D6D6D] mt-[205px]">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
