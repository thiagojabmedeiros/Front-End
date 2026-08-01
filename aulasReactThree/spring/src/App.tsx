import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import { OrbitControls } from "@react-three/drei"

function App() {

  return (
    <div className="container">
      <Canvas>
        <Experience />

        <directionalLight position={[1,2,1]} intensity={1.5} castShadow />

        <OrbitControls />

        <mesh rotation={[1.57,0,0]} position={[0,-1,0]}>
          <boxGeometry args={[4,4,0.1]} />
          <meshToonMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
