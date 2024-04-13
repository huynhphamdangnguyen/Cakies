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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />}/>
      <Route path="product" element={<ProductList />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

export default router;
