import { useNavigate } from "react-router-dom";
import classes from "./ProductDetailCard.module.scss";

const ProductDetailCard = () => {
  const navigate = useNavigate();
  return (
    <article className={classes.card}>
      <img src="./cd4.jpg" alt="merlin CD4" className={classes.img} />
      <span>MERLIN CD4</span>
      <span className={classes.price}>$350.00 AUD</span>
      <form className={classes.form}>
        <button className={classes.btn} onClick={() => navigate('/cart')}>Add to Cart</button>
      </form>
      <article className={classes.productInfo}>
        <span className={classes.heading}>Product Information</span>
        <span className={classes.idbf}>DBF 202a Spec approved. Merlin Paddles are designed in Australia.</span>
        <span className={classes.item}>
          The CD4 Series is the next generation in the Merlin Paddle series. It
          is lighter, sharper and smarter than a lot of other IDBF spec paddles
          on the market today. The aerospace, thermoplastic core and flat woven
          carbon make this paddle lighter and tougher. The CD4 series has the
          sharpest bottom edge that is allowed by IDBF, which means you get a
          paddle with a whisper clean entry and exit.
        </span>
      </article>
    </article>
  );
};

export default ProductDetailCard;
