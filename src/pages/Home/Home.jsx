import { useEffect, useState } from "react";
import classes from "./Home.module.scss";
import { getAllProducts } from "../../services/product-services";
import ProductList from "../../components/ProductList/ProductList";
import { data } from "react-router-dom";
import Message from '../../components/Message/Message';

const Home = () => {
  const [fetchStatus, setFetchStatus] = useState('PENDING');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // get the products send them to the list
  useEffect(() => {
    setFetchStatus('LOADING');
    getAllProducts().then((data) => {
      setProducts(data);
      setFetchStatus('SUCCESS');
    }).catch((e) => {
      setError(e);
      setFetchStatus('FAILURE');
    })
  }, []);

  return (
    <>
      <h3>Dragon Boat Carbon Paddles</h3>
      <section className={classes.wrapper}>
        {fetchStatus === 'SUCCESS' && <ProductList products={products} />}
        {fetchStatus === 'FAILURE' && <Message message={error.message} variant="error" />}
        {fetchStatus === 'LOADING' && <Message message={'loading ...'} />}
      </section>
    </>
  );
};

export default Home;
