import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Page/About";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
