import { useNavigate } from "react-router-dom";
import classes from "./ProductDetailCard.module.scss";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
//import Cart from "../../pages/Cart/Cart";

const ProductDetailCard = ({ productData }) => {
  const navigate = useNavigate();
  const {cart, setCart} = useContext(CartContext);
  //console.log(productData);

  const handleAddToCartClick = () => {
    //console.log("adding to cart: ", productData.name);
    setCart([...cart, {...productData, quantity: 1}]);
    navigate("/cart");
  };
  //console.log(cart);

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
      {/* <form className={classes.form}> */}
        <button className={classes.btn} onClick={handleAddToCartClick}>
          Add to Cart
        </button>
      {/* </form> */}
      <article className={classes.productInfo}>
        <span className={classes.heading}>Product Information</span>
        <span className={classes.idbf}>DBF 202a Spec approved.</span>
        <span className={classes.item}>{productData.description}</span>
      </article>
    </article>
  );
};

export default ProductDetailCard;

//http://localhost:5173/burnwater.jpg

/**
 *  <button 
        className={classes.btn} 
        onClick={() => navigate('/cart')}
        >Add to Cart
        </button>

    <button 
        className={classes.btn} 
        onClick={<Cart productData={productData} />}
        >Add to Cart
        </button>    
 */
