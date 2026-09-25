import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PerspectiveCamera, Stars, Line } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Orb({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.08
    ref.current.rotation.y = state.clock.elapsedTime * 0.12
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 2]} />
      <meshStandardMaterial
        color="#7dd3fc"
        wireframe
        transparent
        opacity={0.18}
        emissive="#38bdf8"
        emissiveIntensity={0.6}
      />
    </mesh>
  )
}

function Rig() {
  const group = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!group.current) return
    const x = state.pointer.x * 0.25
    const y = state.pointer.y * 0.15
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x, 0.035)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y, 0.035)
  })
  return (
    <group ref={group}>
      <Float speed={0.7} rotationIntensity={0.12} floatIntensity={0.25}>
        <Orb position={[-2.9, 1.4, -1.5]} scale={1.2} />
      </Float>
      <Float speed={0.5} rotationIntensity={0.08} floatIntensity={0.2}>
        <Orb position={[2.6, -1.2, -2]} scale={0.85} />
      </Float>
      <Line
        points={[[-4, -2.2, -2.5], [0, 0, -1], [4, 2.2, -2.5]]}
        color="#7dd3fc"
        transparent
        opacity={0.12}
        lineWidth={1}
      />
      <mesh position={[0, 0, -4]}>
        <planeGeometry args={[18, 12]} />
        <meshBasicMaterial color="#020406" transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={42} />
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 3, 4]} intensity={10} color="#9bdcff" distance={12} />
      <pointLight position={[-4, -2, 2]} intensity={6} color="#ffffff" distance={10} />
      <Stars radius={50} depth={20} count={700} factor={1.2} saturation={0} fade speed={0.25} />
      <Rig />
    </Canvas>
  )
}
