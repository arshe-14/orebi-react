import React from "react";
import Container from "../Container";
import { FaPlus } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const FilterSidebar = () => {
  return (
    <div>
      <h4 className="font-dmFont font-bold text-[20px] pr-[120px] text-primaryColor">
        Shop by Category
      </h4>
      <div className="">
        <div className="pb-[20px] mt-[35px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            Category 1
          </h4>
          <FaPlus className="text-[16px] text-[#767676]" />
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            Category 2
          </h4>
          <FaPlus className="text-[16px] text-[#767676]" />
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            Category 3
          </h4>
          <FaPlus className="text-[16px] text-[#767676]" />
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            Category 4
          </h4>
          <FaPlus className="text-[16px] text-[#767676]" />
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            Category 5
          </h4>
          <FaPlus className="text-[16px] text-[#767676]" />
        </div>
      </div>

      <h4 className="font-dmFont font-bold text-[20px] pr-[120px] text-primaryColor mt-[53px]">
        Shop by Color
      </h4>
      <div className="">
        <div className="pb-[20px] mt-[35px] border-b-[1px] border-b-[#F0F0F0] w-full flex items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676] ml-[10px]">
            Color 1
          </h4>
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex  items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676] ml-[10px]">
            Color 2
          </h4>
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676] ml-[10px]">
            Color 3
          </h4>
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676] ml-[10px]">
            Color 4
          </h4>
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676] ml-[10px]">
            Color 5
          </h4>
        </div>
      </div>

      <h4 className="font-dmFont font-bold text-[20px] pr-[120px] text-primaryColor mt-[53px]">
        Shop by Brand
      </h4>
      <div className="">
        <div className="pb-[20px] mt-[35px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            Brand 1
          </h4>
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            Brand 2
          </h4>
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            Brand 3
          </h4>
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            Brand 4
          </h4>
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            Brand 5
          </h4>
        </div>
      </div>
      <div className="">
        <h4 className="font-dmFont font-bold text-[20px] pr-[120px] text-primaryColor mt-[53px]">
          Shop by Price
        </h4>

        <div className="pb-[20px] mt-[35px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            $0.00 - $9.99
          </h4>
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            $10.00 - $19.99
          </h4>
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            $20.00 - $29.99
          </h4>
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            $30.00 - $39.99
          </h4>
        </div>
        <div className="pb-[20px] mt-[20px] border-b-[1px] border-b-[#F0F0F0] w-full flex justify-between items-center">
          <h4 className="font-dmFont font-normal text-[16px] text-[#767676]">
            $40.00 - $69.99
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
