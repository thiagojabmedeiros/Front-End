import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import {
  Environment,
  OrbitControls,
  Html,
} from "@react-three/drei";

import Teste from "./componente/Teste";

function Computer() {
  const result = useLoader(GLTFLoader, "/computer.glb");

  return (
    <group position={[0, -1, 0]}>
      <primitive object={result.scene} />

      {/* Tela do computador */}
      <Html
        transform
        occlude
        position={[0.018, 0.767, -0.3125]} // Ajuste conforme necessário
        rotation={[0, 0, 0]}
        distanceFactor={0.65}
      >
        <div
          style={{
            width: "1690px",
            height: "1120px",
            background: "#ffffff",
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <Teste />
        </div>
      </Html>
    </group>
  );
}

function App() {
  return (
    <div
      id="canvas-container"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas camera={{ position: [1.5, 1, 4]}}>
        <Environment preset="city" />

        <ambientLight intensity={0.8} />

        <directionalLight
          position={[0, 5, 5]}
          intensity={2}
        />

        <Computer />

        <OrbitControls
          // enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

export default App;