import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Topnav from "./components/Topnav";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import Order from "./pages/Order";
import PostOrderPage from "./pages/PostOrderPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./AuthContext"; // Update this path
import axios from "axios";
function App() {
  const { isLoggedIn } = useAuth();

  const PrivateRoute = ({ element, ...props }) =>
    isLoggedIn ? (
      React.cloneElement(element, props)
    ) : (
      <Navigate to="/login" replace />
    );

  return (
    <div className="App">
      <Topnav />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/products"
          element={<PrivateRoute element={<Products />} />}
        />
        <Route
          path="/products/:id"
          element={<PrivateRoute element={<ProductDetailsPage />} />}
        />
        <Route path="/cart" element={<PrivateRoute element={<CartPage />} />} />
        <Route
          path="/checkout"
          element={<PrivateRoute element={<Order />} />}
        />
        <Route
          path="/orderplaced"
          element={<PrivateRoute element={<PostOrderPage />} />}
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
