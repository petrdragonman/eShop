import CartItemCard from "../CartItemCard/CartItemCard";

const CartProductList = ({cartItems}) => {
    return (
        <>
        {
            cartItems.map((item) => {
                return <CartItemCard key={item.id} productData={item} />
            })
        }
        </>
    );
    
};

export default CartProductList;