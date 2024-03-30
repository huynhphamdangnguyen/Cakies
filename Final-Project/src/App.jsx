// eslint-disable-next-line no-unused-vars
import React from "react";
import { Login } from "./pages/Login/Login";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProductList from "./Components/ProductList/ProductList";
import "./App.css";
import { About } from "./Components/Asset/About/About";
import { Register } from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";

function App() {
  
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/product">
              <ProductList />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
