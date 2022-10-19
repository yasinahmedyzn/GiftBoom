import React, { useState, useEffect } from "react";
import axios from "axios";
import Catalog from "../component/Card/Catalog";
import CardCarousel from "../component/Carousel/Carousel";
import ProductItem from "../component/Product/Products";

const Home = () => {
  const [Category, setCategory] = useState([]);
  const [Product, setProduct] = useState([]);

  //get catalog data from database
  const Cat_url = "http://localhost:3001/get-categories";
  useEffect(() => {
    axios
      .get(`${Cat_url}`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    console.log(Category);
  }, [Category]);

  //get product data from database
  const Pro_url = "http://localhost:3001/get-products";
  useEffect(() => {
    axios
      .get(`${Pro_url}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    console.log(Product);
  }, [Product]);

  return (
    <div>
      <CardCarousel />
      <blockquote class="blockquote text-left  container">
        <h5 className=" p-3 mb-2 bg-light text-dark ">Popular Catagories</h5>
      </blockquote>
      <Catalog CatItem={Category} />;
      <blockquote class="blockquote text-left  container">
        <h5 className=" p-3 mb-2 bg-warning text-dark ">Popular Products</h5>
      </blockquote>
      <ProductItem ProItem={Product} />
    </div>
  );
};

export default Home;
