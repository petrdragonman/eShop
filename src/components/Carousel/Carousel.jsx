import { useState } from "react";
import classes from "./Carousel.module.scss";

const Carousel = ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const nextImg = () => {
    setCurrentImage(currentImage === images.length -1 ? 0 : currentImage + 1);
  };
  const prevImg = () => {
    setCurrentImage(currentImage === 0 ? images.length -1 : currentImage - 1);
  };

  return (
    <article className={classes.carousel}>
      <img
        src="http://localhost:5173/caret.svg"
        alt="caret"
        className={`${classes.caret} ${classes.caret_left}`}
        onClick={prevImg}
      />
      {images.map((img, index) => {
        return (
          <img
            src={img}
            alt="image"
            key={index}
            className={
              currentImage === index
                ? classes.productImg
                : classes.productImg_hidden
            }
          />
        );
      })}
      <img
        src="http://localhost:5173/caret.svg"
        alt="caret"
        className={`${classes.caret} ${classes.caret_right}`}
        onClick={nextImg}
      />
    </article>
  );
};

export default Carousel;
