import { useEffect, useState } from "react";

const useFetchProduct = (id) => {
  const [products, setProducts] = useState({});

  const init = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((results) => {
        setProducts(results);
      });
  };

  useEffect(() => {
    init();
  }, []);

  return [products];
};

export default useFetchProduct;
