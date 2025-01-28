import clasess from "./Cart.module.scss";
import Counter from "../../components/Counter/Counter";
import { useNavigate } from "react-router-dom";

const Cart = ({productData}) => {
  const navigate = useNavigate();
  //navigate('./');
  return (
    <section className={clasess.wrapper}>
        <p>Shopping Cart</p>
      
      <form>
        <button className={clasess.checkout} onClick={() => navigate('/')}>Check Out</button>
      </form>
    </section>
  );
};
export default Cart;


/**
 * <article className={clasess.card}>
        <img src={productData.jpgUrl} alt={productData.name} className={clasess.img} />
        <span className={clasess.title}>{productData.brand} {productData.name}</span>
        <Counter capacity={10} />
        <span className={clasess.price}>{`$${productData.price} AUD`}</span>
      </article>
      <span className={clasess.total}>{`TOTAL: $${productData.price} AUD`}</span>
 */