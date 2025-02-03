import clasess from "./Cart.module.scss";

import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
import CartProductList from "../../components/CartProductList/CartProductList";
import calculateTotal from "../../container/calculateCartTotal";
import updateStock from "../../container/updateStock";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const handleCheckOutClick = () => {
    updateStock({cart});
    setCart([]);
    navigate("/");
  };

  return (
    <section className={clasess.wrapper}>
      <p>Shopping Cart</p>

      <CartProductList cartItems={cart} />
      <span className={clasess.total}>{`TOTAL: $${calculateTotal({cart})} AUD`}</span>
      <button className={clasess.checkout} onClick={handleCheckOutClick}>
        Check Out
      </button>
    </section>
  );
};
export default Cart;