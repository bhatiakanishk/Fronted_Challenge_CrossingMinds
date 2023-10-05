import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from "./NavBar.tsx";
import { Product } from "./Product.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <Product />
  </React.StrictMode>
);
