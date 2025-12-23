import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import bottle from "/src/assets/bottle.png";
import backpack from "/src/assets/backpack.png";
import mortarAndPestle from "/src/assets/mortarAndPestle.png";
import tableClock from "/src/assets/tableClock.png";
import schoolBag from "/src/assets/schoolBag.png";
import SubHeading from "../SubHeading";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const Bestsellers = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Container className={" mb-[130px]"}>
      <SubHeading subHeading={"Our Bestsellers"} className={"mb-[48px]"} />
      <div className={"-mx-2"}>
        <Slider {...settings}>
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
          <div className="w-1/4">
            <Product
              productImg={tableClock}
              badgeText={"New"}
              productName={"Table Clock"}
              productPrice={"$20.00"}
            />
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default Bestsellers;
