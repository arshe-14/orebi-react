import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import tableClock from "/src/assets/tableClock.png";
import watch from "/src/assets/watch.png";
import basket from "/src/assets/basket.png";
import stuffedToy from "/src/assets/stuffedToy.png";
import SubHeading from "../SubHeading";

const NewArrivals = () => {
  return (
    <>
      <Container className={" mb-[118px]"}>
        <SubHeading subHeading={"New Arrivals"} className={"mb-[48px]"} />
        <Flex className={"gap-x-6"}>
          <div className="w-1/4">
            <Product
              productImg={tableClock}
              badgeText={"New"}
              productName={"Table Clock"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="w-1/4">
            <Product
              productImg={watch}
              badgeText={"New"}
              productName={"Watch"}
              productPrice={"$77.00"}
            />
          </div>
          <div className="w-1/4">
            <Product
              productImg={basket}
              badgeText={"New"}
              productName={"Basket"}
              productPrice={"$20.70"}
            />
          </div>
          <div className="w-1/4">
            <Product
              productImg={stuffedToy}
              badgeText={"New"}
              productName={"Stuffed Toy"}
              productPrice={"$20.00"}
            />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default NewArrivals;
