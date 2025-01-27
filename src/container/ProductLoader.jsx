import { useEffect, useState } from "react";
import { getProductsData } from "../services/product-service";

const ProductLoader = () => {
  const [productsData, setProductsData] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("PENDING");

  const fetchProducts = () => {
    setFetchStatus("LOADING");
    getProductsData()
      .then((data) => {
        setFetchStatus("SUCCESS");
        setProductsData(data);
      })
      .catch((e) => {
        setFetchStatus("FAILURE");
      });
  };

  useEffect(()=> {
    fetchProducts();
  }, []);

  return (
    <>
      {fetchStatus === "FAILURE" && <p>{error.message}</p>}
      {fetchStatus === "LOADING" && <p>Loading message here ...</p>}
      {/* {fetchStatus === 'SUCCESS' && (<ProductsList /> )} */}
    </>
  );
};

export default ProductLoader;
