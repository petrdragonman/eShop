import { collection, getDocs, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firestore";

export const getAllProducts = async () => {
  const collectionRef = collection(db, "products");
  const snapshot = await getDocs(collectionRef);
  const cleanedDocs = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return cleanedDocs;
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error("Could not find the product with id " + id);
  }
  return { id: snapshot.id, ...snapshot.data() };
};

export const updateProductById = (id, newData) => {
    const docRef = doc(db, "products", id);
    return updateDoc(docRef, newData);
};
// export const getMovieById = async (id) => {
//   const docRef = doc(db, "movies", id);
//   const snapshot = await getDoc(docRef);
//   if (!snapshot.exists()) {
//     throw new Error("Could not find movie with id " + id);
//   }
//   return { id: snapshot.id, ...snapshot.data() };
// };

// export const updateMovieById = (id, newData) => {
//   const docRef = doc(db, "movies", id);
//   return updateDoc(docRef, newData);
// };