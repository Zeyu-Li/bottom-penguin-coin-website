import React, { useState, useEffect } from "react";
import { CoinWrapper } from "../components/CoinWrapper";

export const MainPage = () => {
  useEffect(() => {
    document.title = "Main | BPC";
  });
  return (
    <>
      <div className="h-screen w-screen main-background flex justify-center content-center flex-col">
        <h1 className=" text-6xl text-white text-center font-bold">
          Bottom Penguin Coin
        </h1>
        <div style={{ height: "40vh" }}>
          <CoinWrapper />
        </div>
        <h2 className=" text-4xl text-white text-center m-8 font-medium">
          Supporting Penguins around <br />
          the world 🌏 since 2021
        </h2>
      </div>
      <div className="space" id="about">
        <p className="text-center text-secondary text-5xl font-bold">
          Allowing Penguins <br />
          to explore space 🚀
        </p>
      </div>
      <div className="main-background--reverse" id="info">
        <div className="space main-background--reverse">
          <p className="text-center text-5xl font-bold text-white">
            The Open Source Alternative
          </p>
          <a href="/whitepaper">
            <button>White Paper</button>
          </a>
        </div>
      </div>
    </>
  );
};
