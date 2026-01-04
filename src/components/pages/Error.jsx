import React from "react";
import Container from "../Container";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Container>
        <div className="mt-[81px] font-dmFont font-bold text-[200px] text-[#262626]">
          404
        </div>
        <p className="w-[644px] font-dmFont font-normal text-[16px] text-[#767676] mb-[50px] leading-[30px]">
          The page you were looking for couldn't be found. The page could be
          removed or you misspelled the word while searching for it. Maybe try a
          search?
        </p>
        <div className=" mb-[60px] relative  w-[643px]">
          <input
            type="text"
            placeholder="Type to search"
            className="border-1 border-[#F0F0F0] w-[643px] pt-[21px] pb-[21px] pl-[21px] outline-0 placeholder:font-dmFont font-dmFont placeholder:font-normal font-normal text-[#767676] 1placeholder:text-[16px] text-[16px]  bg-white"
          />
          <div className="absolute top-1/2 right-6 -translate-y-1/2">
            <IoSearch className="text-primaryColor text-[25px]" />
          </div>
        </div>
        <Link to={"/"}>
          <button className="mb-[140px] cursor-pointer py-[16px] pl-[49.5px] pr-[56.5px] bg-[#262626] border-1 border-[#262626] font-dmFont font-bold text-[14px] text-white hover:bg-white hover:text-[#262626] duration-300">
            Back to Home
          </button>
        </Link>
      </Container>
    </>
  );
};

export default Error;
