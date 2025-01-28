import classes from "./ProductPage.module.scss";
import ProductDetailCard from "../../components/ProductDetailCard/ProductDetailCard";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/product-services";
import Message from "../../components/Message/Message";
import { useQuery } from "../../hooks/useQuery";

const ProductPage = () => {
  const {id} = useParams();
  const {
    data: selectedProduct,
    error,
    isFail,
    isLoading,
    isSuccess
  } = useQuery({fetchFn: getProductById, args: [id], dependencies: [id]});
  
  return (
    <>
      <h3>Dragon Boat Carbon Paddles</h3>
      <section className={classes.wrapper}>
        {isLoading && <Message message={'Loading ...'} />}
        {isSuccess && <ProductDetailCard productData={selectedProduct}/> }
        {isFail && <Message message={error.message} />}
      </section>
    </>
  );
};

export default ProductPage;
