import classes from './CartItemCard.module.scss';
import Counter from "../../components/Counter/Counter";

const CartItemCard = ({productData}) => {
  console.log("in cart item card");
  console.log(productData);
    return (
        <article className={classes.card}>
        <img
          src={productData.imgUrl}
          alt={productData.name}
          className={classes.img}
        />
        <span className={classes.title}>
          {productData.brand} {productData.name}
        </span>
        <Counter capacity={10} />
        <span className={classes.price}>{`$${productData.price} AUD`}</span>
      </article>
    );
    
};

export default CartItemCard;