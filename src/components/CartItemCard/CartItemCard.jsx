import classes from './CartItemCard.module.scss';
import Counter from "../../components/Counter/Counter";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";


const CartItemCard = ({productData}) => {
  const {cart, setCart} = useContext(CartContext);
   
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
        <Counter capacity={productData.stock} />
        {/* {productData.counter == 10 && <Message message="If you are looking for bulk purchse, please contact us on....." />} */}
        <section className={classes.removeContainer} onClick={handleRemoveFromCard}>
          <span className={classes.removeContainer__text}>remove from cart </span>
          <img src='./delete.svg' className={classes.removeContainer__image}/>
        </section>
        
      </article>
    );
    
};

export default CartItemCard;