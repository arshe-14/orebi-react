import React from "react";

const ProductName = ({ productName, className }) => {
  return (
    <h4
      className={`${className} font-dmFont font-bold text-[20px] text-primaryColor`}
    >
      {productName}
    </h4>
  );
};

export default ProductName;
