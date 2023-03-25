import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./components/Homepage";
import { DetailsPage } from "./components/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:name" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
