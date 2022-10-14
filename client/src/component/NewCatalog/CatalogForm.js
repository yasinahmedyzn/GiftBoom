import React, { useState } from "react";

import style from "./form.module.css";
const CatalogForm = (props) => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");

  const handleTextChange = (e) => {
    setTitle(e.target.value);
  };
  const handleImgChange = (e) => {
    setImg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const NewCatalogInfo = {
      img: img,
      title: title,
    };

    props.onSaveCatalogInfo(NewCatalogInfo);
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
          <button className="btn btn-light btn-md" type="submit">
            click here
          </button>
        </div>
      </form>
    </div>
  );
};
export default CatalogForm;
