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
          to explore space{" "}
          <a className="cursor-pointer rocket transition">🚀</a>
        </p>
      </div>
      <div className="main-background--reverse" id="info">
        <div className="space main-background--reverse">
          <p className="text-center text-5xl font-bold text-white">
            The Open Source Alternative
          </p>
          <div className="p-16 flex justify-around">
            <a href="/whitepaper" className="cursor-pointer rocket transition">
              <button className="text-primary bg-white p-4 text-xl rounded-md shadow-xl">
                White Paper
              </button>
            </a>
            <a
              href="https://github.com/Zeyu-Li/bottom-penguin"
              target="_blank"
              className="cursor-pointer rocket transition ml-5"
            >
              <button className="text-white bg-primary p-4 text-xl rounded-md shadow-xl ">
                Source Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
