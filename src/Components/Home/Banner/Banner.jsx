import React from "react";
import "./Banner.css";
import BannerImage from "../../../Assets/bannerImage.svg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="b-content">
        <span>Get your dream job</span>
        <span>
          in just <span>7</span> days
        </span>
        <span>India's Finest company trust Placement+ to hire.</span>
        <span>Crack test and get hired!</span>
        <button>Get Hired</button>
      </div>
      <img src={BannerImage} alt="Banner" />
    </div>
  );
};

export default Banner;
