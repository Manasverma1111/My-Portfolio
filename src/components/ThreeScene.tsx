
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';
import * as THREE from 'three';

// 3D floating shape in the background
const AnimatedSphere = ({ position, color, speed = 1, distort = 0.4, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15 * speed;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial 
        color={color} 
        attach="material" 
        distort={distort} 
        speed={0.4} 
        roughness={0.4}
        metalness={0.2}
      />
    </mesh>
  );
};

// Main 3D Scene
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0e47e3" />
      
      <AnimatedSphere position={[3, 0, 0]} color="#2276ff" speed={0.8} scale={1.5} />
      <AnimatedSphere position={[-3.5, -1, -2]} color="#00c2ff" speed={1.2} distort={0.6} scale={1.2} />
      <AnimatedSphere position={[0, 2, -3]} color="#7928ca" speed={1} distort={0.2} scale={0.8} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 2}
      />
      <Environment preset="city" />
    </>
  );
};

// Main component that wraps the 3D scene
const ThreeScene = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
