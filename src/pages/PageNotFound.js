import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect, Suspense } from "react";
import Coin from "../components/Coin";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page 404 | BPC";
  });
  return (
    <div className="h-screen w-screen main-background flex justify-center content-center flex-col">
      <a href="/">
        <button className=" text-4xl text-white back-button text-left transition hover:text-button">
          ⬅ Back
        </button>
      </a>
      <h1 className=" text-6xl text-white text-center">Page 404</h1>
      <div style={{ height: "40vh" }}>
        <Canvas>
          <Suspense fallback={null}>
            <Coin />
          </Suspense>
          <ambientLight intensity={0.1} />
          <directionalLight intensity={1} position={[5, 5, 5]} />
        </Canvas>
      </div>
      <h2 className=" text-4xl text-white text-center m-8">
        This page was stolen <br />
        by some penguins
      </h2>
    </div>
  );
};
