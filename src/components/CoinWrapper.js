import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Coin from "../components/Coin";

export const CoinWrapper = () => {
  return (
    <Canvas style={{ cursor: "pointer" }}>
      <Suspense fallback={null}>
        <Coin />
      </Suspense>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={1} position={[5, 5, 5]} />
    </Canvas>
  );
};
