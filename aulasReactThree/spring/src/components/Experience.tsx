import { animated, useSpring } from "@react-spring/three"
import { useGLTF } from "@react-three/drei"
import { useState } from "react"

function Experience() {
    const objectx = useGLTF("/inclinedComputer.glb")

    const [hover, setHover] = useState(false)
    const props = useSpring({
        scale: hover ? 1.05 : 1 ,
        roty: hover ? 0 : -0.5,
        rotx: hover ? 0.15 : 0,
        config: {
            mass: 1,
            tension: 55,
            friction: 50
        }
    })

    return (
        <animated.group
            scale={props.scale}
            rotation-y={props.roty}
            rotation-x={props.rotx}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <primitive object={objectx.scene} />
        </animated.group>
    )
}

export default Experience