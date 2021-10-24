import React, { useState, useEffect } from "react";

export const MainPage = () => {
  useEffect(() => {
    document.title = "Main | BPC";
  });
  return (
    <>
      <div className="h-screen w-screen main-background flex justify-center content-center flex-col">
        <h1 className=" text-6xl text-white text-center">
          Bottom Penguin Coin
        </h1>
        <h2 className=" text-4xl text-white text-center m-8">
          Supporting Penguins around <br />
          the world 🌏 since 2021
        </h2>
      </div>
    </>
  );
};
