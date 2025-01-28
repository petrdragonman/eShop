import { createContext, useState, useEffect } from "react";
import { getAllProducts } from "../services/product-services";
import { useQuery } from "../hooks/useQuery";

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {

  const {data: products, error, isLoading, isFail, isSuccess} = useQuery(getAllProducts)

return <ProductsContext.Provider value={{products, error, isLoading, isFail, isSuccess }}>
    {children}
  </ProductsContext.Provider>
};

export default ProductsContextProvider;
