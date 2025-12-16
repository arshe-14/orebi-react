import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import tableClock from "/src/assets/tableClock.png";
import watch from "/src/assets/watch.png";
import basket from "/src/assets/basket.png";
import stuffedToy from "/src/assets/stuffedToy.png";
import juteBasket from "/src/assets/juteBasket.png";
import wallClock from "/src/assets/wallClock.png";
import SubHeading from "../SubHeading";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const NewArrivals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Container className={" mb-[118px]"}>
        <SubHeading subHeading={"New Arrivals"} className={"mb-[48px]"} />

        <div className="-mx-2">
          <Slider {...settings}>
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
            <div className="w-1/4">
              <Product
                productImg={wallClock}
                badgeText={"New"}
                productName={"Wall Clock"}
                productPrice={"$12.00"}
              />
            </div>
            <div className="w-1/4">
              <Product
                productImg={juteBasket}
                badgeText={"New"}
                productName={"Jute Basket"}
                productPrice={"$38.00"}
              />
            </div>
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default NewArrivals;
