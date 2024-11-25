import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import TrendingProducts from "../shop/TrendingProducts";
import Blogs from "../blog/Blogs";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <TrendingProducts />
      <Blogs />
    </>
  );
};

export default Home;
