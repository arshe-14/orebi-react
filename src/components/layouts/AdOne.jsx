import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import adOne from "/src/assets/adOne.jpg";
import adTwo from "/src/assets/adTwo.png";
import adThree from "/src/assets/adThree.jpg";
import { Link } from "react-router-dom";

const AdOne = () => {
  return (
    <div className="mt-[140px] mb-[128px]">
      <Container>
        <Flex className={"gap-x-[43px]"}>
          <div className="w-1/2">
            <Link to={"/"}>
              <Image src={adOne} />
            </Link>
          </div>
          <div className="w-1/2">
            <Link to={"/"}>
              <Image src={adTwo} />
            </Link>
            <Link to={"/"}>
              <Image src={adThree} className={"mt-[33px]"} />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default AdOne;
