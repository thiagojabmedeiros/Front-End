import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import ComputerModel from "./ComputerModel"

import { animated, useSpring } from "@react-spring/three"
import { Suspense, useState } from "react"

function Computer() {
    const [hover, setHover] = useState(false)

    const props = useSpring({
        rotY: hover ? -0.1 : -0.5,
        rotX: hover ? 0.1 : 0,
        scale: hover ? 1.05 : 1,
        config: {
            mass: 1,
            tension: 45, 
            friction: 20
        }
    })

    return (
        <Canvas>
            <Environment preset="warehouse"/>
            <animated.group
            scale={props.scale}
            rotation-y={props.rotY}
            rotation-x={props.rotX}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            >
                <Suspense fallback={null}>
                    <ComputerModel />
                </Suspense>
            </animated.group>
        </Canvas>
    )
}

export default Computer