import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import Button from "../Button/Button";
import classes from "./Counter.module.scss";
import Message from "../Message/Message";

const Counter = ({id, inititialValue, capacity}) => {
  const showMessage = false;
  const [count, setCount] = useState(inititialValue);
  const {cart, setCart} = useContext(CartContext);
  const stock = capacity - count;
  const handleDecreaseClick = () => {
    if(count > 0) {
      setCount(count - 1);
      setCart(
        cart.map((item) => item.id === id ? {...item, quantity: item.quantity - 1} : item )
      );
    }
  };
  const handleIncreaseClick = () => {
    if(count < 5 && stock >= 1) {
      setCount(count + 1);
      setCart(
        cart.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item )
      );
    }
  };

  return (
    <>
      <section className={classes.container}>
        <span className={classes.wrapper}>
          <Button
            onClick={handleDecreaseClick}
            style={{ width: "20px" }}
          >
            -
          </Button>
          <span className={classes.value}>{count}</span>
          <Button
            onClick={handleIncreaseClick}
            style={{ width: "20px" }}
          >
            +
          </Button>
        </span>
        <section className={classes.message}>
          {stock === 1 && <Message message={` Only ${stock} paddle left `} variant="error" />}
          {count >= 5 && <Message message=" Max order is 5 " variant="error" /> }
          {stock < 1 && <Message message={` Sorry sold out! `} variant="error" /> }
        </section>
      </section>
    </>
  );
};

export default Counter;
