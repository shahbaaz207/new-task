import { useEffect, useState } from "react";

const useFetchProduct = () => {
  const [products, setProducts] = useState([]);

  const init = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((results) => {
        setProducts(results.products);
      });
  };

  useEffect(() => {
    init();
  }, []);

  return [products];
};

export default useFetchProduct;
