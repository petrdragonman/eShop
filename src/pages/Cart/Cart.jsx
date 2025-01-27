import clasess from "./Cart.module.scss";
import Counter from "../../components/Counter/Counter";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  //navigate('./');
  return (
    <section className={clasess.wrapper}>
        <p>Shopping Cart</p>
      <article className={clasess.card}>
        <img src="./cd4.jpg" alt="merlin CD4" className={clasess.img} />
        <span className={clasess.title}>MERLIN CD4</span>
        <Counter capacity={10} />
        <span className={clasess.price}>$350.00 AUD</span>
      </article>
      <span className={clasess.total}>$350.00 AUD</span>
      <form>
        <button className={clasess.checkout} onClick={() => navigate('/')}>Check Out</button>
      </form>
    </section>
  );
};
export default Cart;
