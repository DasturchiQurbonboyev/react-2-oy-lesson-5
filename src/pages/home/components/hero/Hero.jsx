import React from "react";
import apple from "../../../../assets/images/home/apple.png";
import iphone from "../../../../assets/images/home/iphone.png";
const Hero = () => {
  return (
    <div className="header">
      <div className="kontainer cards">
        <div className="left">
          <ul>
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="right">
          <div className="cards">
            <div className="left">
              <div className="logo">
                <img src={apple} alt="" />
                <h3>iPhone 14 Series</h3>
              </div>
              <h1>Up to 10% off Voucher</h1>
              <p>Shop Now</p>
            </div>
            <div className="right">
              <img src={iphone} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
