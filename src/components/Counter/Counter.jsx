import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import Button from "../Button/Button";
import classes from "./Counter.module.scss";
import Message from "../Message/Message";

const Counter = ({ count, setCount, id, inititialValue}) => {
  //console.log(typeof inititialValue);
  console.log(inititialValue);
  //const [count, setCount] = useState(1);
  const {cart, setCart} = useContext(CartContext);
  //const remaining = capacity - count;
  //console.log("cart : ", cart);
  //console.log("count: ", count);
  //console.log("in counter - stock: ", capacity);
  //setCounterValue(count)
  const handleDecreaseClick = () => {
    if(count > 0) {
      setCount(count - 1);
      setCart(
        cart.map((item) => item.id === id ? {...item, quantity: item.quantity - 1} : item )
      );
    }
  };
  const handleIncreaseClick = () => {
    if(count < 5) {
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
            //variant="grey"
            onClick={handleIncreaseClick}
            style={{ width: "20px" }}
          >
            +
          </Button>
        </span>
        <section className={classes.message}>
          {count > 5 && <Message message="Max order is 5" variant="error" /> }
        </section>
      </section>
    </>
  );
};

export default Counter;
