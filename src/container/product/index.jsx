import React from "react";
import { Link, Navigate } from "react-router-dom";
import { getToken } from "../../helper";
import useFetchProduct from "./hook";
import "./style.css";

const Product = () => {
  const [products] = useFetchProduct();

  const token = getToken();

  if (!token) return <Navigate to="/login" />;

  const renderProduct = ({ id, title, thumbnail, price }) => {
    return (
      <Link to={`/${id}`} key={id}>
        <div className="products-list">
          <img className="image" src={thumbnail} />
          <h3>{title}</h3>
          <b className="price">{price}</b>
        </div>
      </Link>
    );
  };
  return <div>{products?.map(renderProduct)}</div>;
};

export default Product;
