import React from "react";
import { IoGrid } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import Flex from "../Flex";
import { TiArrowSortedDown } from "react-icons/ti";
import Product from "../Product";
import mortarAndPestle from "/src/assets/mortarAndPestle.png";
import headphone from "/src/assets/headphone.png";
import table from "/src/assets/table.png";
import cap from "/src/assets/cap.png";
import wallClock from "/src/assets/wallClock.png";
import schoolBag from "/src/assets/schoolBag.png";
import sunglass from "/src/assets/sunglass.png";
import juteBasket from "/src/assets/juteBasket.png";
import tableClock from "/src/assets/tableClock.png";

const ProductGrid = () => {
  return (
    <div className="w-3/4">
      <div className="flex justify-between">
        <div className="">
          <button className="p-[12px] bg-white  border-[1px] border-[#F0F0F0] text-[#737373] hover:bg-[#262626] hover:text-white duration-400 cursor-pointer">
            <IoGrid />
          </button>

          <button className="p-[12px] ml-[20px] bg-white  border-[1px] border-[#F0F0F0] text-[#737373]  hover:bg-[#262626] hover:text-white duration-400 cursor-pointer">
            <AiOutlineBars />
          </button>
        </div>

        <div className="flex justify-end font-dmFont font-normal text-[16px] text-[#767676] gap-x-[40px]">
          <Flex className={"flex justify-end gap-x-[14px] items-center group"}>
            <h4>Sort by:</h4>
            <select className="py-[7px] px-[20px] w-[240px] border-[1px] border-[#F0F0F0] appearance-none cursor-pointer outline-0">
              <option>Featured</option>
              <option>Best-Selling</option>
              <option>Newest</option>
            </select>
            <TiArrowSortedDown className="absolute mr-[20px]" />
          </Flex>
          <Flex className={"flex justify-end gap-x-[14px] items-center group"}>
            <h4>Show:</h4>
            <select className="py-[7px] px-[20px] w-[240px] border-[1px] border-[#F0F0F0] appearance-none cursor-pointer outline-0">
              <option>35</option>
              <option>36</option>
              <option>37</option>
            </select>
            <TiArrowSortedDown className="absolute mr-[20px]" />
          </Flex>
        </div>
      </div>
      <div className="mt-[60px] flex ">
        <div className="w-1/3">
          <Product
            badgeText={"New"}
            productImg={mortarAndPestle}
            productName={"Mortar and Pestle"}
            productPrice={"$30.70"}
          />
        </div>
        <div className="w-1/3">
          <Product
            badgeText={"-10%"}
            productImg={headphone}
            productName={"Headphone"}
            productPrice={"$80.40"}
          />
        </div>
        <div className="w-1/3">
          <Product
            badgeText={false}
            productImg={table}
            productName={"Table"}
            productPrice={"$77.00"}
          />
        </div>
      </div>
      <div className="mt-[50px] flex ">
        <div className="w-1/3">
          <Product
            productImg={cap}
            productName={"Cap"}
            productPrice={"$5.00"}
          />
        </div>
        <div className="w-1/3">
          <Product
            badgeText={"New"}
            productImg={wallClock}
            productName={"Wall Clock"}
            productPrice={"$12.00"}
          />
        </div>
        <div className="w-1/3">
          <Product
            productImg={schoolBag}
            productName={"School Bag"}
            productPrice={"$55.00"}
          />
        </div>
      </div>
      <div className="mt-[50px] flex ">
        <div className="w-1/3">
          <Product
            badgeText={"-10%"}
            productImg={sunglass}
            productName={"Sunglass"}
            productPrice={"$21.00"}
          />
        </div>
        <div className="w-1/3">
          <Product
            badgeText={"-15%"}
            productImg={table}
            productName={"Table"}
            productPrice={"$77.00"}
          />
        </div>
        <div className="w-1/3">
          <Product
            badgeText={"-10%"}
            productImg={cap}
            productName={"Cap"}
            productPrice={"$5.00"}
          />
        </div>
      </div>
      <div className="mt-[50px] mb-[50px] flex ">
        <div className="w-1/3">
          <Product
            productImg={juteBasket}
            productName={"Jute Basket"}
            productPrice={"$38.00"}
          />
        </div>
        <div className="w-1/3">
          <Product
            productImg={tableClock}
            productName={"Table Clock"}
            productPrice={"$44.00"}
          />
        </div>
        <div className="w-1/3">
          <Product
            productImg={sunglass}
            productName={"Sunglass"}
            productPrice={"$21.00"}
          />
        </div>
      </div>
      <div className="mb-[40px]">
        <button className="py-[10px] px-[15px] border-[1px] border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-white duration-400 cursor-pointer">
          1
        </button>
        <button className="py-[10px] px-[15px] border-[1px] border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-white duration-400 cursor-pointer ml-[20px]">
          2
        </button>
        <button className="py-[10px] px-[15px] border-[1px] border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-white duration-400 cursor-pointer ml-[20px]">
          3
        </button>
        <button className="py-[10px] px-[15px] border-[1px] border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-white duration-400 cursor-pointer ml-[20px]">
          4
        </button>
        <button className="py-[10px] px-[15px] border-[1px] border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-white duration-400 cursor-pointer ml-[20px]">
          5
        </button>
        <button className="py-[10px] px-[15px] border-[1px] border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-white duration-400 cursor-pointer ml-[20px]">
          6
        </button>
        <button className="py-[10px] px-[15px] border-[1px] border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-white duration-400 cursor-pointer ml-[20px]">
          7
        </button>
        <button className="py-[10px] px-[15px] border-[1px] border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-white duration-400 cursor-pointer ml-[20px]">
          8
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
