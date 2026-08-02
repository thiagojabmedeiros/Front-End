import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody, RapierRigidBody } from '@react-three/rapier'
import { animated, useSpring } from "@react-spring/three"
import { useRef, useState } from 'react'

import './App.css'
import { Environment, OrbitControls } from '@react-three/drei'

function App() {
  const [hover, setHover] = useState(false)
  const change = useSpring({
    rotX: hover ? 1 : 0,
    config: {
      mass: 1,
      tension: 50,
      friction: 50
    }
  })

  const ballRef = useRef<RapierRigidBody>(null)
  function kick() {
    if (ballRef.current) {
      ballRef.current.applyImpulse({x: 0, y: 1, z: -0.5}, true)
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
          <animated.mesh rotation-x={change.rotX} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} 
          position={[0,2,0]} onClick={() => kick()}>
            <boxGeometry args={[0.5,0.5,0.5]}/>
            <meshPhongMaterial color="deeppink" />
          </animated.mesh>
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
