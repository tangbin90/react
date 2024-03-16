import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Test from "./components/Test";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
  <div>
    <Test/>
  <BrowserRouter>
   <App />
  </BrowserRouter>
  </div>

 );
}