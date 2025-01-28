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
        <p className={classes.price}>{`$${productData.price} AUD`}</p>
      </section>
      <button className={classes.btn} onClick={() => {
        return navigate(`/products/${productData.id}`);
      }}>view more</button>
      {/* <Link to={`/products/${productData.id}`}> Get more info</Link> */}
    </article>
  );
};

export default ProductCard;


//Link