import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import ComputerModel from "./ComputerModel"

import { animated, useSpring } from "@react-spring/three"
import { useState } from "react"

import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier"

function Computer() {
    const [hover, setHover] = useState(false)
    const props = useSpring({
        rotY: hover ? -0.15 : -0.5,
        rotX: hover ? 0.1 : 0,
        config: {
            mass: 1,
            tension: 45, 
            friction: 20
        }
    })

    return (
        <>
            <Environment preset="warehouse"/>
            <Physics>
                <RigidBody
                colliders="hull"
                gravityScale={1}
                restitution={0.5}
                >
                    <animated.group
                    rotation-y={props.rotY}

                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                    >
                            <ComputerModel />
                    </animated.group>
                </RigidBody>
                <RigidBody 
                position={[0,-1.5,0]}
                rotation={[0.2,0,0.15]}
                type="fixed">
                    <CuboidCollider args={[4,0.1,4]}/>
                </RigidBody>
            </Physics>
        </>
    )
}


function Scene() {
    return (
        <Canvas camera={{fov: 45, position: [0,1,8]}}>
            <Computer />
        </Canvas>
    )
}
export default Scene