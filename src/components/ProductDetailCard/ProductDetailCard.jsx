import { useNavigate } from "react-router-dom";
import classes from "./ProductDetailCard.module.scss";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
//import addToCart from "../../container/addToCart";
//import Cart from "../../pages/Cart/Cart";

const ProductDetailCard = ({ productData }) => {
  const navigate = useNavigate();
  const {cart, setCart} = useContext(CartContext);
  const handleAddToCartClick = () => {
    const existingItem = cart.find((product) => product.id === productData.id);
    if(existingItem){
      setCart(
        cart.map((item) => item.id === productData.id ? {...item, quantity: item.quantity + 1} : item )
      );
    } else {
      setCart([...cart, {...productData, quantity: 1}]);
    }
    navigate("/cart");
  };

  return (
    <article className={classes.card}>
      <img
        src={productData.imgUrl}
        alt={productData.name}
        className={classes.img}
      />
      <span>
        {productData.brand} {productData.name}
      </span>
      <span className={classes.price}>{`$${productData.price} AUD`}</span>
        <button className={classes.btn} onClick={handleAddToCartClick}>
          Add to Cart
        </button>
      <article className={classes.productInfo}>
        <span className={classes.heading}>Product Information</span>
        <span className={classes.idbf}>DBF 202a Spec approved.</span>
        <span className={classes.item}>{productData.description}</span>
      </article>
    </article>
  );
};

export default ProductDetailCard;