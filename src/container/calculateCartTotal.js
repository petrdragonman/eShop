// Function to calculate the total price of the cart
const calculateTotal = ({cart}) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default calculateTotal;