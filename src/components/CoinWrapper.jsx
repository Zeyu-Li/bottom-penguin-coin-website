import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Coin from "../components/Coin";

export const CoinWrapper = () => {
  return (
    <Canvas style={{ cursor: "pointer" }}>
      <Suspense fallback={null}>
        <Coin />
      </Suspense>
      {/* three.js r155+ uses physically correct lighting; scaling by PI keeps the original brightness. */}
      <ambientLight intensity={0.1 * Math.PI} />
      <directionalLight intensity={Math.PI} position={[5, 5, 5]} />
    </Canvas>
  );
};
