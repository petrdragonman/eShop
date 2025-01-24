import ProductCard from "../../components/ProductCard/ProductCard";
import classes from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <h3>Dragon Boat Carbon Paddles</h3>
      <section className={classes.wrapper}>
        <ProductCard />
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
