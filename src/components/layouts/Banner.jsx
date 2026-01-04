import React from "react";
import Image from "../Image";
import bannerHome from "/src/assets/bannerHome.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Link to={"/InsideProduct"}>
        <div className="bg-[url(/src/assets/bannerHome.png)] bg-cover bg-no-repeat bg-center py-[250px]"></div>
      </Link>
    </>
  );
};

export default Banner;
