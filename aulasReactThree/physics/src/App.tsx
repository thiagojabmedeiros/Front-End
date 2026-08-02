import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody, RapierRigidBody } from '@react-three/rapier'
import { animated, useSpring } from "@react-spring/three"
import { useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'

import './App.css'
import { Environment, OrbitControls } from '@react-three/drei'

function App() {
  const {scene} = useGLTF("/90DegreeComputer.glb")

  const [hover, setHover] = useState(false)
  const changeBlock = useSpring({
    rotX: hover ? 1 : 0,
    config: {
      mass: 1,
      tension: 50,
      friction: 50
    }
  })

  const [hoverc, setHoverc] = useState(false)
  const changeComputer = useSpring({
    rotY: hoverc ? 0.25 : 0,
    rotX: hoverc ? 0.1 : 0,
    config: {
      friction: 50,
      mass: 1, 
      tension:40
    }
  })

  const ballRef = useRef<RapierRigidBody>(null)
  function kick() {
    if (ballRef.current) {
      ballRef.current.applyImpulse({x: 0, y: 1, z: -0.5}, true)
    }
  }

  return (
    <div style={
      {
        display: "flex",
        justifyContent: "center"
      }
    }>
    <div style={{
      width: "1290px",
      height: "400px",
      border: "solid red",

    }}>


    <Canvas
    camera={{ position: [15, 0, 10], fov: 45 }}
    onCreated={({camera}) => camera.lookAt(10,0,0)}
    style={{
      position: "absolute",
      width: "100%",
      height: "100%"
    }}>
      <ambientLight />
      <Environment preset="dawn" />
      {/* <OrbitControls /> */}
      <axesHelper />
      <gridHelper args={[50]} position={[0,-3,0]}/>
      <Physics debug>
        <RigidBody
        restitution={0.5}
        colliders="hull"
        >
          <animated.group rotation-z={changeComputer.rotX} onPointerOver={() => setHoverc(true)} onPointerOut={() => setHoverc(false)}>
            <primitive position={[15,2,0]} rotation={[0,-0.25,0.2]} object={scene} >
              <Html>
                <div style={{
                  width: "100px",
                  height: "100px",
                  background: "red"
                }}>
                  hello, world!
                </div>
              </Html>
            </primitive>
          </animated.group>
        </RigidBody>
        <RigidBody 
        ref={ballRef} 
        restitution={1.2}
        friction={5}
        >
          <animated.mesh rotation-x={changeBlock.rotX} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} 
          position={[15,4,-1.5]} onClick={() => kick()}>
            <boxGeometry args={[0.5,0.5,0.5]}/>
            <meshPhongMaterial color="deeppink" />
          </animated.mesh>
        </RigidBody>

        <RigidBody type='fixed' friction={2}>
          <mesh position={[15,-1.5,0]}>
            <boxGeometry args={[5,0.5,5]}/>
            <meshPhongMaterial color="orange" />
          </mesh>
        </RigidBody>
        <RigidBody type='fixed' friction={2}>
          <mesh position={[15,1.2,-2.9]} rotation={[1.5,0,0]}>
            <boxGeometry args={[5,0.5,5]}/>
            <meshPhongMaterial color="orange" />
          </mesh>
        </RigidBody>
      </Physics>
    </Canvas>
    </div>
    </div>
  )
}

export default App
