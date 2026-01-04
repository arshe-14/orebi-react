import React, { useEffect, useState } from "react";
import { IoGrid } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import Flex from "../Flex";
import { TiArrowSortedDown } from "react-icons/ti";
import Product from "../Product";

import axios from "axios";

const ProductGrid = () => {
  let [allData, setAllData] = useState([]);

  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  });
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
      <div className="mt-[60px] ">
        <div className="flex flex-wrap ">
          {allData.map((item) => (
            <div className="w-1/3 gap-x-[40px] mb-[50px]">
              <Product
                className=""
                productImg={item.thumbnail}
                badgeText={item.stock}
                productName={item.title}
                productPrice={item.price}
              />
            </div>
          ))}
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
