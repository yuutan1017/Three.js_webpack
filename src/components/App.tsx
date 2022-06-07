import React from "react";
import { Link } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <>
      <h1>Hello Three.js</h1>
      <Link to="/ThreeTuto">Three.js tutorial</Link>
    </>
  );
};
