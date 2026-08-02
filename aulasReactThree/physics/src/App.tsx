import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody, RapierRigidBody } from '@react-three/rapier'
import { useRef } from 'react'

import './App.css'
import { Environment, OrbitControls } from '@react-three/drei'

function App() {
  const ballRef = useRef<RapierRigidBody>(null)
  function kick() {
    if (ballRef.current) {
      ballRef.current.applyImpulse({x: 0, y: 2, z: -1}, true)
    }
  }
  return (
    <Canvas style={{
      width: "100vw",
      height: "100vh"
    }}>
      <ambientLight />
      <Environment preset="dawn" />
      <OrbitControls />
      <Physics debug>
        <RigidBody
        ref={ballRef} 
        restitution={1.2}
        friction={5}
        >
          <mesh position={[0,2,0]} onClick={() => kick()}>
            <boxGeometry args={[0.5,0.5,0.5]}/>
            <meshPhongMaterial color="deeppink" />
          </mesh>
        </RigidBody>

        <RigidBody type='fixed' friction={2}>
          <mesh position={[0,-1.5,0]}>
            <boxGeometry args={[5,0.5,5]}/>
            <meshPhongMaterial color="orange" />
          </mesh>
        </RigidBody>
        <RigidBody type='fixed' friction={2}>
          <mesh position={[0,1.2,-2.9]} rotation={[1.5,0,0]}>
            <boxGeometry args={[5,0.5,5]}/>
            <meshPhongMaterial color="orange" />
          </mesh>
        </RigidBody>
      </Physics>
    </Canvas>
  )
}

export default App
