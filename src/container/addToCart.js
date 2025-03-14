import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
const addToCart = ({id}) => {
    const {cart, setCart} = useContext(CartContext);
    const existingItem = CartContext.find((product) => product.id === id);
    if(existingItem){
        setCart(
            cart.map((el) => { el.id === id ? {...el, quantity: el.quantity + 1} : el })
        );
    } else {
        setCart([...cart, {...product, quantity: 1}]);
    }
};
export default addToCart;