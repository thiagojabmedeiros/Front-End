import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Environment } from "@react-three/drei";

function Computer() {
  const result = useLoader(GLTFLoader, "/computer.glb");

  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      hovered ? 0.3 : 0,
      delta * 5
    );

    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      hovered ? -0.08 : 0,
      delta * 5
    );
  });

  return (
    <primitive
      ref={ref}
      position={[0,0,-3]}
      scale={2.5}
      object={result.scene}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [1.5, 1.5, 5] }}>
        <Environment preset="city" />
        <gridHelper   args={[20, 20]}
  renderOrder={-1}
  material-depthWrite={false}/>
        {/* <ambientLight intensity={0} /> */}
        <directionalLight position={[0, 0, 1]} intensity={2} />
        <Computer />
      </Canvas>
    </div>
  );
}

export default App;