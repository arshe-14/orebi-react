import React, { useEffect, useState } from "react";
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
import axios from "axios";

const NewArrivals = () => {
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

  // name of variable is setAllData
  // empty array is used to add multiple products

  // useEffect is used to reduce side effects of the data of API
  // useEffect is provided by react

  // This code uses React Hooks to fetch data from
  //  an API and store it in state: useState([])
  //  creates a state variable called allData (initially an empty array)
  //  and a function setAllData to update it; useEffect is used to run side effects
  //  and here it runs after the component renders, where an async function is defined
  //  to fetch data from https://dummyjson.com/products using axios.get; await pauses
  //  execution until the response arrives, and then setAllData updates the state with
  //  the fetched products (ideally response.data.products); the empty dependency array
  //  [] is important because it ensures the effect runs only once when the component mounts,
  //  preventing an infinite loop of repeated API calls caused by re-renders; once the state
  //  is updated, React re-renders the component and the fetched data becomes available for
  //  use (such as rendering a list).

  let [allData, setAllData] = useState([]);

  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  });

  return (
    <>
      <Container className={" mb-[118px]"}>
        <SubHeading subHeading={"New Arrivals"} className={"mb-[48px]"} />

        <div className="-mx-2">
          <Slider {...settings}>
            {allData.map((item) => (
              <div className="w-1/4">
                <Product
                  productImg={item.thumbnail}
                  badgeText={item.stock}
                  productName={item.title}
                  productPrice={item.price}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default NewArrivals;
