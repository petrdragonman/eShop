import { createContext, useState, useEffect } from "react";
import { getAllProducts } from "../services/product-services";

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [fetchStatus, setFetchStatus] = useState("PENDING");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // get the products send them to the list
  useEffect(() => {
    setFetchStatus("LOADING");
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setFetchStatus("SUCCESS");
      })
      .catch((e) => {
        setError(e);
        setFetchStatus("FAILURE");
      });
  }, []);

//   const getProductById = (id) => {
//     return products.find((product) => product.id === id)
//   };

return <ProductsContext.Provider value={{fetchStatus, products, error, getProductById}}>
    {children}
  </ProductsContext.Provider>
};

export default ProductsContextProvider;
