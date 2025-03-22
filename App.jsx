import React from "react";
import { ThemeProvider, ThemeContext } from "./component/ThemeContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Summary from "./pages/Summary";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=":type" element={<Test />} />
            <Route path=":type/summary" element={<Summary />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
