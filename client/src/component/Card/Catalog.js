import React from "react";
import CatagoryList from "./CatagoryList";

const Catalog = (props) => {
  return (
    <div class="container px-4">
      <div className=" row ">
        {props.CatItem.map((Shop) => (
          <CatagoryList key={Shop.id} img={Shop.img} title={Shop.title} />
        ))}
      </div>
    </div>
  );
};
export default Catalog;
