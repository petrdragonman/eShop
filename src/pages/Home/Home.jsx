import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import classes from "./Home.module.scss";
import { getAllProducts } from "../../services/product-services";

const Home = () => {
  // get the products send them to the list
  useEffect(() => {
    getAllProducts().then((data) => console.log(data));
  }, []);

  return (
    <>
      <h3>Dragon Boat Carbon Paddles</h3>
      <section className={classes.wrapper}>
        <ProductCard />
        <ProductCard />
      </section>
    </>
  );
};

export default Home;
