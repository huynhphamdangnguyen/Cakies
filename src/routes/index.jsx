import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import Cart from "../pages/Cart/Cart";
import Products from "../Components/ProductList/Products";
import ProductDetail from "../Components/ProductList/ProductDetail";
import AdminLayout from "../layouts/AdminLayout";
import AdminProducts from "../pages/Admin/AdminProducts";
import EditProduct from "../pages/Admin/EditProduct";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="products" element={<AdminProducts />} />
        <Route path="products/:id" element={<EditProduct />} />
      </Route>
    </>
  )
);

export default router;
