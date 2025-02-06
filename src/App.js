import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomeComponents from "./components/HomeComponents";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
   <BrowserRouter>
   <div className="App">
    <Routes>
       <Route path="/" element={<HomeComponents/>}/>
       <Route path="/product" element={<ProductListing />} />
       <Route path="/product/:id" element={<ProductDetail />}/>
    </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
