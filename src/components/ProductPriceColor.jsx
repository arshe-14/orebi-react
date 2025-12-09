import React from "react";

const ProductPriceColor = ({ priceColor, className }) => {
  return (
    <h5
      className={`${className} font-dmFont font-normal text-[16px] text-[#767676]`}
    >
      {priceColor}
    </h5>
  );
};

export default ProductPriceColor;
