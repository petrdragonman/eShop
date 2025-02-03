import { useState } from "react";
import classes from "./RadioButton.module.scss";

const RadioButton = ({setGrip}) => {
  const [value, setvalue] = useState("t-grip");
  //console.log(value);
  const handleRadioSelect = (e) => {
    setvalue(e.target.value);
    setGrip(e.target.value);
    console.log(e.target.value);
  };

  return (
    <article className={classes.container}>
      <section className={classes.field}>
        <input
          type="radio"
          name="grip"
          value="t-grip"
          id="t-grip"
          onChange={handleRadioSelect}
          checked={value === "t-grip"}
        />
        <label htmlFor="t-grip">T-grip</label>
      </section>
      <section className={classes.field}>
        <input
          type="radio"
          name="grip"
          value="palm-grip"
          id="palm-grip"
          onChange={handleRadioSelect}
          checked={value === "palm-grip"}
        />
        <label htmlFor="palm-grip">Palm grip</label>
      </section>
    </article>
  );
};

export default RadioButton;
