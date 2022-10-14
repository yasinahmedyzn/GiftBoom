import React from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
const NewProduct = () => {
  const saveCatalogInfo = async (enteredCatalogInfo) => {
    const NewProductItem = {
      ...enteredCatalogInfo,
    };

    console.log(NewProductItem);
    // send data to database
    const { img, title, code, price } = NewProductItem;
    const cformData = {
      img: img,
      title: title,
      code: code,
      price: price,
    };
    try {
      await axios
        .post("http://localhost:3001/add-products", cformData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <ProductForm onSaveCatalogInfo={saveCatalogInfo} />
    </div>
  );
};

export default NewProduct;
