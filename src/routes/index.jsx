import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import ProductList from "../Components/ProductList/ProductList";
import { Register } from "../pages/Register/Register";
import Cart from "../pages/Cart/Cart";
import Products from "../Components/ProductList/Products";
import ProductDetail from "../Components/ProductList/ProductDetail";
import Admin from "../pages/Admin";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<ProductDetail />} />
      <Route path="productlist" element={<ProductList />} />
      <Route path="cart" element={<Cart />} />
      <Route path="admin" element={<Admin/>} />
    </Route>
  )
);

export default router;
