import { useNavigate } from "react-router-dom";
import classes from "./ProductCard.module.scss";

const ProductCard = ({productData}) => {
  const navigate = useNavigate();
  //console.log(productData);

  return (
    <article className={classes.card}>
      <img src={productData.imgUrl} alt="paddle image" className={classes.img} />
      <section className={classes.description}>
        <p className={classes.title}>
          {productData.description}
        </p>
        
      </section>
      <section className={classes.control}>
        <p className={classes.price}>{`$${productData.price} AUD`}</p>
        <button className={classes.btn} onClick={() => {
          return navigate(`/products/${productData.id}`);
        }}>view more</button>
      </section>
    </article>
  );
};

export default ProductCard;


//Link