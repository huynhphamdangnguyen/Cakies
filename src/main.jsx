import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Counter/store.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./config/stripeClient.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Provider>
);
