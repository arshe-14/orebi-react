import React from "react";
import Searchbar from "../layouts/Searchbar";
import Information from "../layouts/Information";
import Banner from "../layouts/Banner";
import AdOne from "../layouts/AdOne";
import NewArrivals from "../layouts/NewArrivals";
import Bestsellers from "../layouts/Bestsellers";
import AdTwo from "../layouts/AdTwo";
import SpecialOffers from "../layouts/SpecialOffers";

const Home = () => {
  return (
    <>
      <Banner />
      <Information />
      <AdOne />
      <NewArrivals />
      <Bestsellers />
      <AdTwo />
      <SpecialOffers />
    </>
  );
};

export default Home;
