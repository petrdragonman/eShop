import ProductCard from "../../components/ProductCard/ProductCard";
import ProductDetailCard from "../../components/ProductDetailCard/ProductDetailCard";
import classes from "./Home.module.scss";

const Home = () => {
  // get the products send them to the list

  return (
    <>
      <h3>Dragon Boat Carbon Paddles</h3>
      <section className={classes.wrapper}>
        <ProductDetailCard  />
        {/* <ProductCard /> */}
      </section>
    </>
  );
};

export default Home;
