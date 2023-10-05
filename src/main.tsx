import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from "./NavBar.tsx";
import { Product } from "./Product.tsx";
import { Carousel } from "./Carousel.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <Product />
    <Carousel title={"More of this style"} />
    <Carousel title={"You might also like"} />
  </React.StrictMode>
);
