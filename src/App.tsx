import React from "react";
import "@stripe/stripe-js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./components/Homepage";
import { DetailsPage } from "./components/DetailsPage";
import { CartPage } from "./components/CartPage";
import { SuccessPage } from "./components/SuccessPage";
import { CancelPage } from "./components/CancelPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:name" element={<DetailsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="success" element={<SuccessPage />} />  
        <Route path="cancel" element={<CancelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
