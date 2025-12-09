import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import Heading from "../Heading";
import { FaGreaterThan } from "react-icons/fa6";
import SubHeading from "../SubHeading";

const Contacts = () => {
  return (
    <div className="">
      <Container>
        <Heading
          heading={"Contacts"}
          className={"mt-[124px] mb-[11px]"}
        ></Heading>
        <p>
          <ul className="flex items-center gap-x-[10px] mb-[125px]">
            <li className="font-dmFont font-normal text-[12px] text-[#767676]">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="font-dmFont font-normal text-[8px] text-[#767676]">
              <Link to={""}>
                <FaGreaterThan />
              </Link>
            </li>
            <li className="font-dmFont font-normal text-[12px] text-[#767676]">
              <Link to={""}>Contacts</Link>
            </li>
          </ul>
        </p>

        {/* Form Part Start  */}
        <SubHeading subHeading={"Fill up a Form"}></SubHeading>
        {/* Form Part End  */}
      </Container>
    </div>
  );
};

export default Contacts;
