import React, { useState } from "react";
import style from "../NewCatalog/form.module.css";
const ProductForm = (props) => {
  const [code, setID] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleCodeChange = (e) => {
    setID(e.target.value);
  };
  const handleTextChange = (e) => {
    setTitle(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleImgChange = (e) => {
    setImg(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const NewProductItem = {
      img,
      code,
      title,
      price,
    };
    props.onSaveCatalogInfo(NewProductItem);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <lable>img:</lable>
          <input type={"text"} value={img} onChange={handleImgChange} />
        </div>

        <div className={style.formGroup}>
          <lable>title:</lable>
          <input type={"text"} value={title} onChange={handleTextChange} />
        </div>
        <div className={style.formGroup}>
          <lable>code:</lable>
          <input type={"number"} value={code} onChange={handleCodeChange} />
        </div>
        <div className={style.formGroup}>
          <lable>price:</lable>
          <input type={"number"} value={price} onChange={handlePriceChange} />
        </div>
        <div className={style.formGroup}>
          <button className="btn btn-light btn-md" type="submit">
            click here
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProductForm;
