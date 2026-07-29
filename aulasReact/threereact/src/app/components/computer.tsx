"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import type { Mesh } from "three";
import * as THREE from "three";

function Cubo() {
const meshRef = useRef<Mesh>(null);
const [hovered, setHovered] = useState(false);

useFrame((_, delta) => {
  if (!meshRef.current) return;

  // sem hover: virado 25°  |  com hover: 0° (de frente pra tela)
  const alvo = hovered ? 0 : THREE.MathUtils.degToRad(90);

  meshRef.current.rotation.y +=
    (alvo - meshRef.current.rotation.y) * delta * 4;
});

return (
  <mesh
    ref={meshRef}
    rotation={[0, THREE.MathUtils.degToRad(90), 0]}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
  >
    <boxGeometry args={[2, 2, 2]} />
    <meshStandardMaterial color="red" />
  </mesh>
);
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [4, 3, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Cubo />
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}