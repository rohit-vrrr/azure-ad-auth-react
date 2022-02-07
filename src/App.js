import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ThankYou from "./components/ThankYou/ThankYou";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/thank-you' element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
