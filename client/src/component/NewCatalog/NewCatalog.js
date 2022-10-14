import React from "react";
import axios from "axios";
import CatalogForm from "./CatalogForm";
const NewCatalog = () => {
  const saveCatalogInfo = async (enteredCatalogInfo) => {
    const NewCatalogInfo = {
      ...enteredCatalogInfo,
    };

    console.log(NewCatalogInfo);
    // send data to database
    const { img, title } = NewCatalogInfo;
    const cformData = {
      img: img,
      title: title,
    };
    try {
      await axios
        .post("http://localhost:3001/add-categories", cformData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <CatalogForm onSaveCatalogInfo={saveCatalogInfo} />
    </div>
  );
};
export default NewCatalog;
