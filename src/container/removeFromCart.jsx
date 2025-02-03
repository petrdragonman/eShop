import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";


const removeFromCart = ({id}) => {
    const [cart, setCart] = useContext(CartContext);
    console.log(cart);
    //setCart(cart.filter((item) => item.id === id));
};

export default removeFromCart;