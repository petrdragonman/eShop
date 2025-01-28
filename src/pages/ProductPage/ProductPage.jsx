import classes from "./ProductPage.module.scss";
import ProductDetailCard from "../../components/ProductDetailCard/ProductDetailCard";
//import ProductsContextProvider, {
  //////ProductsContext,
//} from "../../context/ProductsContextProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/product-services";
import Message from "../../components/Message/Message";

const ProductPage = () => {
  // const { getProductById } = useContext(ProductsContext);
  // const { id } = useParams();
  // const selectedProduct = getProductById(id);
  const {id} = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('PENDING');

  useEffect(() => {
    setFetchStatus('LOADING');
    getProductById(id).then((result) => {
      setFetchStatus('SUCCESS');
      setSelectedProduct(result);
    }).catch((e) => {
      setFetchStatus('FAILURE');
      setError(e);
    })
  }, [id]);

  return (
    <>
      <h3>Dragon Boat Carbon Paddles</h3>
      <section className={classes.wrapper}>
        {fetchStatus === 'LOADING' && <Message message={'Loading ...'} />}
        {fetchStatus === 'SUCCESS' && <ProductDetailCard productData={selectedProduct}/> }
        {fetchStatus === 'FAILURE' && <Message message={error.message} />}
      </section>
    </>
  );
};

export default ProductPage;
