import { useState } from "react";
import Button from "../Button/Button";
import classes from "./Counter.module.scss";
import Message from "../Message/Message";

const Counter = ({ capacity }) => {
  const [count, setCount] = useState(0);
  const remaining = capacity - count;
  //console.log("in counter - stock: ", capacity);
  const handleDecreaseClick = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  };
  const handleIncreaseClick = () => {
    if(count < 5) {
      setCount(count + 1);
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
