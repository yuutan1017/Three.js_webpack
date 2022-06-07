import React from "react";
import { Canvas } from "@react-three/fiber";

import "./style.css";

export const ThreeTuto = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
        </mesh>
      </Canvas>
    </div>
  );
};
