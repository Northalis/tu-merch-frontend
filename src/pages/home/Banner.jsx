import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/TU-logo.png";

const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          alias obcaecati. Quam, vel dicta! Ipsam provident labore illum tenetur
          quod nesciunt consectetur distinctio. Nesciunt sapiente quos porro
          atque, necessitatibus illum.
        </p>
        <button className="btn">
          <Link to="/shop">Explore</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
