import classes from './CartItemCard.module.scss';
import Counter from "../../components/Counter/Counter";
import { CartContext } from "../../context/CartContextProvider";
import { useContext, useState } from "react";


const CartItemCard = ({ productData }) => {
  const { cart, setCart } = useContext(CartContext);
  const handleRemoveFromCard = () => {
    const itemToRemove = cart.filter((item) => (item.id === productData.id && item.handle === productData.handle));
    const rest = cart.filter((item) => item !== itemToRemove);
    const indexToRemove = cart.findIndex((item) => (item.id === productData.id && item.handle === productData.handle));
    cart.splice(indexToRemove, 1);
    setCart([...cart]);
  };
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
      <span className={classes.grip}>{`with ${productData.handle}`}</span>
      <span className={classes.price}>{`$${productData.price * productData.quantity} AUD`}</span>
      <Counter
        id={productData.id}
        inititialValue={productData.quantity}
        capacity={productData.stock}
      />
      <section className={classes.removeContainer} onClick={handleRemoveFromCard}>
        <span className={classes.removeContainer__text}>remove from cart </span>
        <img src='./delete.svg' className={classes.removeContainer__image} />
      </section>

    </article>
  );

};

export default CartItemCard;