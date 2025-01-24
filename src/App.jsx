import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';


function App() {

  return (
    <>
      <BrowserRouter>
        <h2>Welcome</h2>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
