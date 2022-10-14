import React from "react";
import ProductList from "./ProductList";

const ProductItem = (props) => {
  return (
    <div className="container px-4">
      <div className=" row ">
        {props.ProItem.map((Shop) => (
          <ProductList
            key={Shop.id}
            img={Shop.img}
            title={Shop.title}
            code={Shop.code}
            price={Shop.price}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductItem;
