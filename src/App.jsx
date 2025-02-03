import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <ProductsContextProvider>
                  <ProductsPage />
                </ProductsContextProvider>
              }
            />
            <Route path="/products/:id" element={<ProductPage />} />
            {/* <Route path="/product" element={<Product />} /> */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;


/**
 * productImages = [
 *  "http://localhost:5173/hornet.jpg",
 *  "http://localhost:5173/t-grip.jpg",
 *  "http://localhost:5173/palm-grip.jpg"
 * ];
 */