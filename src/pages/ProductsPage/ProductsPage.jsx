import classes from "./ProductsPage.module.scss";
import ProductList from "../../components/ProductList/ProductList";
import Message from "../../components/Message/Message";
import { ProductsContext } from "../../context/ProductsContextProvider";
import { useContext } from "react";

const ProductsPage = () => {
  const { products, error, isFail, isSuccess, isLoading } =
    useContext(ProductsContext);

  return (
    <>
      <h3>Dragon Boat Carbon Paddles</h3>
      <section className={classes.wrapper}>
        {isSuccess && <ProductList products={products} />}
        {isFail && <Message message={error.message} variant="error" />}
        {isLoading && <Message message={"loading ..."} />}
      </section>
    </>
  );
};

export default ProductsPage;
