import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import cap from "/src/assets/cap.png";
import table from "/src/assets/table.png";
import headphone from "/src/assets/headphone.png";
import sunglass from "/src/assets/sunglass.png";
import SubHeading from "../SubHeading";

const SpecialOffers = () => {
  return (
    <>
      <Container className={" mb-[140px]"}>
        <SubHeading subHeading={"Special Offers"} className={"mb-[48px]"} />
        <Flex className={"-mx-2"}>
          <div className="w-1/4">
            <Product
              productImg={cap}
              badgeText={"New"}
              productName={"Cap"}
              productPrice={"$5.00"}
            />
          </div>
          <div className="w-1/4">
            <Product
              productImg={table}
              badgeText={"New"}
              productName={"Table"}
              productPrice={"$77.00"}
            />
          </div>
          <div className="w-1/4">
            <Product
              productImg={headphone}
              badgeText={"New"}
              productName={"Headphone"}
              productPrice={"$80.40"}
            />
          </div>
          <div className="w-1/4">
            <Product
              productImg={sunglass}
              badgeText={"New"}
              productName={"Sunglass"}
              productPrice={"$21.00"}
            />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default SpecialOffers;
