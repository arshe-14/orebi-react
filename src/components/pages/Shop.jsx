import React from "react";
import Searchbar from "../layouts/Searchbar";
import Heading from "../Heading";
import { FaGreaterThan } from "react-icons/fa6";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import FilterSidebar from "../layouts/FilterSidebar";
import Container from "../Container";
import ProductGrid from "../layouts/ProductGrid";

const Shop = () => {
  return (
    <>
      <Searchbar />
      <Container>
        <Heading heading={"Products"} className={"mt-[40px] mb-[11px]"} />
        <Breadcrumb
          breadcrumbMain={<Link to={"/"}>Home</Link>}
          breadcrumbSign={<FaGreaterThan />}
          breadcrumbSub={"Products"}
        />
        <div className="flex mt-[50px] justify-between gap-x-[14px]">
          <FilterSidebar />
          <ProductGrid />
        </div>
      </Container>
    </>
  );
};

export default Shop;
