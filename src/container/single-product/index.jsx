import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchProduct from "./hook";

const SingleProduct = () => {
  const { id } = useParams();
  const [products] = useFetchProduct(id);
  console.log(products);

  return (
    <div>
      <img src={products?.thumbnail} />
      <h3>Name: {products?.title}</h3>
      <p>Price: {products?.price}</p>
      <p>{products.description}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default SingleProduct;
