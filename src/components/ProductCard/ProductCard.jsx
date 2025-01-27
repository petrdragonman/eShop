import { useNavigate } from "react-router-dom";
import classes from "./ProductCard.module.scss";

const ProductCard = ({productData}) => {
  const navigate = useNavigate();

  return (
    <article className={classes.card}>
      <img src={productData.imgUrl} alt="wooden paddle" className={classes.img} />
      <section className={classes.description}>
        <p className={classes.title}>
          {productData.description}
        </p>
        <p className={classes.price}>{`$${productData.price} AUD`}</p>
      </section>
      <button className={classes.btn} onClick={() => navigate('/product')}>view more</button>
      <Link to={`/products/${productData.id}`}> Get more info</Link>
    </article>
  );
};

export default ProductCard;


//Link