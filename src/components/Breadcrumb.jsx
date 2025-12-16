import React from "react";
import Flex from "./Flex";

const Breadcrumb = ({
  breadcrumbMain,
  className,
  breadcrumbSign,
  breadcrumbSub,
}) => {
  return (
    <Flex className={"gap-x-[13px]"}>
      <div
        className={`font-dmFont font-normal text-[12px] text-[#767676] ${className}`}
      >
        {breadcrumbMain}
      </div>
      <div
        className={`font-dmFont font-normal text-[12px] text-[#767676] ${className}`}
      >
        {breadcrumbSign}
      </div>
      <div
        className={`font-dmFont font-normal text-[12px] text-[#767676] ${className}`}
      >
        {breadcrumbSub}
      </div>
    </Flex>
  );
};

export default Breadcrumb;
