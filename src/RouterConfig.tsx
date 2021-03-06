import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "./components/App";
import { FetchData } from "./components/FetchData";
import { ThreeTuto } from "./components/ThreeTuto";


export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/ThreeTuto" element={<ThreeTuto/>} />
          <Route path="/fetchData" element={<FetchData/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
