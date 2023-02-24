import React from "react";
import Home from "./Home";
import SingleMovies from "./SingleMovies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context";
import "./style.css"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<SingleMovies />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </>
  );
}
