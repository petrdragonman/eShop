import { collection, getDocs, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";

const updateStock = ({cart}) => {
    const collectionRef = collection(db, "products");
    cart.map((product) => {
        const docRef = doc(db, "products", product.id);
        updateDoc(docRef, {stock: product.stock - product.quantity});
    });
};

export default updateStock;