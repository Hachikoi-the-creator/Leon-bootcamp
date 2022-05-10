import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="*" element={<MissingPage />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
