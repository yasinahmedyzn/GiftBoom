import React from "react";
import NewCatalog from "../component/NewCatalog/NewCatalog";
import NewProduct from "../component/New Product/NewProduct";
const About = () => {
  return (
    <div className="text-center">
      <h1 className="bg-primary font-weight-normal text-white text-center my-2 px-1   container">
        Catalog form
      </h1>
      <NewCatalog />
      <h1 className="bg-primary font-weight-normal text-white text-center my-2 px-1  container">
        Product form
      </h1>
      <NewProduct />
    </div>
  );
};

export default About;
