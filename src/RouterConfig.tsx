import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./components/App";


export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
