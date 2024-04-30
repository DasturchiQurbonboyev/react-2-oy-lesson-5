import React from "react";
import { CATEGORY } from "../../../../static/index";
import { CiCamera } from "react-icons/ci";
const Category = () => {
  let card = CATEGORY?.map((el) => (
    <div className="card" key={el.id}>
      <img src={el.img} alt="" />
      <h2>{el.title}</h2>
    </div>
  ));
  return (
    <div className="category kontainer">
      <div className="lines">
        <div className="line"></div>
        <span>Categories</span>
      </div>
      <h1>Browse By Category</h1>
      <div className="cards">
        {card}
        <div className="card">
          <CiCamera className="icon" />
          <h2>Camera</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
