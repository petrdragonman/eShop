import classes from './CartItemCard.module.scss';
import Counter from "../../components/Counter/Counter";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//import removeFromCart from '../../container/removeFromCart';


const CartItemCard = ({productData}) => {
  const navigate = useNavigate();
  const {cart, setCart} = useContext(CartContext);
    //const [cart] = useContext(CartContext);
    //console.log("cart", cart);
    const handleRemoveFromCard = () => {
      console.log(productData.id);
      console.log("removing from cart....");
      const rest = cart.filter((item) => item.id !== productData.id);
      console.log("not deleted items", rest);
      setCart([...rest]);
      //removeFromCart(productData.id);
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
        <Counter capacity={10} />
        <section className={classes.removeContainer} onClick={handleRemoveFromCard}>
          <span className={classes.removeContainer__text}>remove from cart </span>
          <img src='./delete.svg' className={classes.removeContainer__image}/>
        </section>
        
      </article>
    );
    
};

export default CartItemCard;