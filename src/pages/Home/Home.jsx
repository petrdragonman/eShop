import ProductCard from "../../components/ProductCard/ProductCard";
import ProductDetailCard from "../../components/ProductDetailCard/ProductDetailCard";
import Cart from "../Cart/Cart";
import classes from "./Home.module.scss";

const Home = () => {
  // get the products send them to the list

  return (
    <>
      <h3>Dragon Boat Carbon Paddles</h3>
      <section className={classes.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </>
  );
};

export default Home;
