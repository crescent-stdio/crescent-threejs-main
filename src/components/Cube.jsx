import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Stars } from '@react-three/drei';

const Cube = () => {
  return (
    <div className="w-full" style={{ height: '90vh' }}>
      <Canvas>
        {/* <SceneCamera /> */}
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <mesh position={[0, 0, 0]} rotation={[Math.PI * 0.15, Math.PI * 0.25, 0]}>
          <boxBufferGeometry attatch="geometry" />
          <meshLambertMaterial attatch="material" color="#FDE047" />
        </mesh>
        <Stars />
      </Canvas>
    </div>
  );
};

export default Cube;
