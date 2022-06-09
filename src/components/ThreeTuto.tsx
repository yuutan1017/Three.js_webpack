import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

import "./style.css";

const Box = (props: any) => {
  const ref = useRef<Mesh>(null!);
  const [clicked, setClicked] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  useFrame(() => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={() => setClicked(!clicked)}
      scale={clicked ? 1.5 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1.3, 1.3, 1.3]} />
      <meshStandardMaterial color={hovered ? "yellow" : "blue"} />
    </mesh>
  );
};

export const ThreeTuto = () => {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <mesh>
            <Box position={[-2, 0.7, 0]} />
            <Box position={[2, -0.7, 0]} />
            <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
          </mesh>
        </Canvas>
      </div>
      <h1>Three.js Fiver</h1>
    </>
  );
};
