import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>

      {/* <Navbar /> */}
    </>
  );
}

export default App;
