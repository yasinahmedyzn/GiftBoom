import React, { useEffect, useState } from "react";
import axios from "axios";
import "./service.css";

const Base_url = "https://jsonplaceholder.typicode.com/posts";

const Service = () => {
  const [mydata, setData] = useState([]);
  const [isError, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${Base_url}`)
      .then((res) => setData(res.data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="axios">Axios Data</h1>
        <p>{isError}</p>
        <div className="grid">
          {mydata.map((post) => {
            const { id, title, body } = post;
            return (
              <div className="card" key={id}>
                <h2>{title.slice(0, 15).toUpperCase()}</h2>
                <p>{body.slice(0, 100)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
