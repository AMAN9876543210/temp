import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Forest from './Forest.jsx';
export default function NavigationPage(){

    return(
      <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
        <ambientLight />
        <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} />
        <Suspense fallback={null}>
          <Forest />  {/* Your 3D Forest component */}
        </Suspense>
      </Canvas>
    );
}