import classes from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <article className={classes.card}>
      <img src="./paddle.jpg" alt="wooden paddle" className={classes.img} />
      <section className={classes.description}>
        <p className={classes.title}>
          Z&J SPORT Adjustable Dragon Boat Paddle, IDBF Approved Boat Oars,
          Carbon Fiber Paddle Adjustable T Handle with Adjuster for Dragon Boat
          Paddler (Range: 43”-52” /110cm-132cm)
        </p>
        <p className={classes.price}>$105.00</p>
        <p className={classes.shipping}>shiping calculated at checkout</p>
      </section>
      <button className={classes.btn}>view more</button>
    </article>
  );
};

export default ProductCard;
