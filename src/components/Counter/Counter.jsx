import { useState } from "react";
import Button from "../Button/Button";
import classes from "./Counter.module.scss";

const Counter = ({ stock }) => {
  const [count, setCount] = useState(0);
  const remaining = stock - count;

  return (
    <>
      <section className={classes.container}>
        <span className={classes.wrapper}>
          <Button
            onClick={() => setCount(count - 1)}
            style={{ width: "20px" }}
          >
            -
          </Button>
          <span className={classes.value}>{count}</span>
          <Button
            //variant="grey"
            onClick={() => setCount(count + 1)}
            style={{ width: "20px" }}
          >
            +
          </Button>
        </span>
      </section>
    </>
  );
};

export default Counter;
