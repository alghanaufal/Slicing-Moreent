import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;