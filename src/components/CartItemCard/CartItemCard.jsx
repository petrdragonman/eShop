import classes from './CartItemCard.module.scss';
import Counter from "../../components/Counter/Counter";
import { CartContext } from "../../context/CartContextProvider";
import { useContext, useState } from "react";


const CartItemCard = ({ productData }) => {
  const id = productData.id;
  const [count, setCount] = useState(productData.quantity);
  const [counterValue, setCounterValue] = useState(productData.quatity);
  const { cart, setCart } = useContext(CartContext);
  //console.log(productData.quantity);
  //console.log("re-rendering - 1..........", count);
  //console.log("re-rendering - 2 ..........", cart);
  //console.log("re-rendering - 3 ..........", productData);
  const initialCountValue = productData.quantity;
  //console.log(typeof count);
  //console.log("initial value: ", initialCountValue);
  const handleRemoveFromCard = () => {
    const rest = cart.filter((item) => item.id !== productData.id);
    setCart([...rest]);
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
      <span className={classes.price}>{`$${productData.price} AUD`}</span>
      <span className={classes.price}>{`$${productData.price * count} AUD`}</span>
      <Counter
        count={count}
        setCount={setCount}
        id={productData.id}
        inititialValue={initialCountValue}
      />
      {/* {productData.counter == 10 && <Message message="If you are looking for bulk purchse, please contact us on....." />} */}
      <section className={classes.removeContainer} onClick={handleRemoveFromCard}>
        <span className={classes.removeContainer__text}>remove from cart </span>
        <img src='./delete.svg' className={classes.removeContainer__image} />
      </section>

    </article>
  );

};

export default CartItemCard;