import React, { useMemo,useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, PlaneBufferGeometry } from "three";
import { config, useSpring, animated } from "@react-spring/three";
//
import { OrbitControls } from '@react-three/drei/core/OrbitControls';
import { vertexShader, fragmentShader } from './shader';

import "../css/style.css";

const Box = (props: any) => {
  const ref = useRef<Mesh>(null!);
  const [clicked, setClicked] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  useFrame(() => (ref.current.rotation.x += 0.01));

  const { scale } = useSpring({
    scale: clicked ? 1.5 : 1,
    config: config.wobbly,
  });

  return (
    <animated.mesh
      {...props}
      ref={ref}
      onClick={() => setClicked(!clicked)}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1.3, 1.3, 1.3]} />
      <meshStandardMaterial color={hovered ? "yellow" : "blue"} />
    </animated.mesh>
  );
};

export const ThreeTuto = () => {
  return (
    <>
      <div id="canvas-container">
        <h1>Three.js Fiver</h1>
        <Link to="/">Home</Link>
        <Canvas>
          <Box position={[2, 2, 0]} />
          <Box position={[-2, 2, 0]} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
        </Canvas>
      </div>
    </>
  );
};
