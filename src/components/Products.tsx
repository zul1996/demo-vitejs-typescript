import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  title: string;
  id: string;
};

const Products = ({ title, id }: Props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  //   Get Data API
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto px-4">
      {loading && (
        <div>
          {""}
          <h1>Loading</h1>
        </div>
      )}
      {data.map((product) => (
        <div key={product.id}>
          <h6>{product.id}</h6>
          <h6>{product.title}</h6>
          <h6>{product.description}</h6>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default Products;
