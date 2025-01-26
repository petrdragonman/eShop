import classes from './Product.module.scss';
import ProductDetailCard from '../../components/ProductDetailCard/ProductDetailCard';

const Product = () => {
  return (
    <>
      <h3>Dragon Boat Carbon Paddles</h3>
      <section className={classes.wrapper}>
        <ProductDetailCard  />
      </section>
    </>
  );
};

export default Product;
