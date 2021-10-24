import { memo, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Coin = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/bottom_penguin_coin.gltf");
  useEffect(() => {
    group.current.rotation.x = 90;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        scale={[1.1, 0.1, 1.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={nodes.Curve003.material}
        position={[-0.4, 0.06, 0.14]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve006.geometry}
        material={nodes.Curve006.material}
        position={[-0.01, 0.06, -0.57]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve009.geometry}
        material={nodes.Curve009.material}
        position={[0.01, 0.08, 0.34]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={nodes.Curve001.material}
        position={[0.42, 0.06, 0.14]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={nodes.Curve004.material}
        position={[-0.41, 0.06, 0.13]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007.geometry}
        material={materials["SVGMat.001"]}
        position={[0.01, 0.06, 0.11]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve011.geometry}
        material={nodes.Curve011.material}
        position={[0.16, 0.06, -0.29]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve012.geometry}
        material={nodes.Curve012.material}
        position={[0.16, 0.06, -0.29]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve021.geometry}
        material={nodes.Curve021.material}
        position={[-0.01, 0.06, -0.22]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        scale={[1.01, 0.06, 1.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve018.geometry}
        material={nodes.Curve018.material}
        position={[0.16, 0.06, 0.58]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={nodes.Curve002.material}
        position={[0.43, 0.06, 0.13]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve020.geometry}
        material={nodes.Curve020.material}
        position={[0.01, 0.06, -0.22]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[0, 0.03, -0.41]}
        scale={[0.43, 0.06, 0.43]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve005.geometry}
        material={nodes.Curve005.material}
        position={[-0.01, 0.06, -0.57]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve008.geometry}
        material={nodes.Curve008.material}
        position={[0.01, 0.06, 0.11]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve016.geometry}
        material={nodes.Curve016.material}
        position={[-0.13, 0.06, 0.59]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve017.geometry}
        material={nodes.Curve017.material}
        position={[-0.23, 0.06, 0.53]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve019.geometry}
        material={nodes.Curve019.material}
        position={[0.22, 0.06, 0.51]}
        scale={[5.5, 5.5, 5.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve023.geometry}
        material={nodes.Curve023.material}
        position={[0.16, 0.08, -0.29]}
        scale={[9.16, 3.25, 9.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
      />
    </group>
  );
};

export default memo(Coin);
