import clasess from "./Cart.module.scss";

import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
import CartProductList from "../../components/CartProductList/CartProductList";
import calculateTotal from "../../container/calculateCartTotal";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  //console.log("re-render Cart page....", cart)
  return (
    <section className={clasess.wrapper}>
      <p>Shopping Cart</p>

      <CartProductList cartItems={cart} />
      <span className={clasess.total}>{`TOTAL: $${calculateTotal({cart})} AUD`}</span>
      {/* <form> */}
      <button className={clasess.checkout} onClick={() => navigate("/")}>
        Check Out
      </button>
      {/* </form> */}
    </section>
  );
};
export default Cart;

/**
 * I will need in cart to be an array of cartitem objects with following
 * productID
 * quantity
 * size
 * grip
 * cart = [
 *  {id: 'abc123', quantity: 1, size: '49'}
 * ]
 *
 */

/**
 * <article className={clasess.card}>
        <img src={productData.jpgUrl} alt={productData.name} className={clasess.img} />
        <span className={clasess.title}>{productData.brand} {productData.name}</span>
        <Counter capacity={10} />
        <span className={clasess.price}>{`$${productData.price} AUD`}</span>
      </article>
      <span className={clasess.total}>{`TOTAL: $${productData.price} AUD`}</span>
 */
