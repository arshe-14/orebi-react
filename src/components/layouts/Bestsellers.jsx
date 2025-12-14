import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import bottle from "/src/assets/bottle.png";
import backpack from "/src/assets/backpack.png";
import mortarAndPestle from "/src/assets/mortarAndPestle.png";
import schoolBag from "/src/assets/schoolBag.png";
import SubHeading from "../SubHeading";

const Bestsellers = () => {
  return (
    <Container className={" mb-[130px]"}>
      <SubHeading subHeading={"Our Bestsellers"} className={"mb-[48px]"} />
      <Flex className={"gap-x-6"}>
        <div className="w-1/4">
          <Product
            productImg={bottle}
            badgeText={"New"}
            productName={"Bottle"}
            productPrice={"$9.99"}
          />
        </div>
        <div className="w-1/4">
          <Product
            productImg={backpack}
            badgeText={"New"}
            productName={"Backpack"}
            productPrice={"$77.00"}
          />
        </div>
        <div className="w-1/4">
          <Product
            productImg={mortarAndPestle}
            badgeText={"New"}
            productName={"Mortar and Pestle"}
            productPrice={"$30.70"}
          />
        </div>
        <div className="w-1/4">
          <Product
            productImg={schoolBag}
            badgeText={"New"}
            productName={"School Bag"}
            productPrice={"$55.00"}
          />
        </div>
      </Flex>
    </Container>
  );
};

export default Bestsellers;
