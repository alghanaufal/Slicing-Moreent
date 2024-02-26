import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
