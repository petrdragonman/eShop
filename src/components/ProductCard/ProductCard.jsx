import { useNavigate } from "react-router-dom";
import Message from "../Message/Message";
import classes from "./ProductCard.module.scss";
import { useState } from "react";

const ProductCard = () => {
  const navigate = useNavigate();

  return (
    <article className={classes.card}>
      <img src="./zj.jpg" alt="wooden paddle" className={classes.img} />
      <section className={classes.description}>
        <p className={classes.title}>
          Z&J SPORT Adjustable Dragon Boat Paddle, IDBF Approved Boat Oars,
          Carbon Fiber Paddle Adjustable T Handle with Adjuster for Dragon Boat
          Paddler (Range: 43”-52” /110cm-132cm)
        </p>
        <p className={classes.price}>$105.00</p>
        <p className={classes.shipping}>shiping calculated at checkout</p>
      </section>
      <button className={classes.btn} onClick={() => navigate('/product')}>view more</button>
    </article>
  );
};

export default ProductCard;
