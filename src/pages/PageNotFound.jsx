import React, { useEffect } from "react";
import { CoinWrapper } from "../components/CoinWrapper";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page 404 | BPC";
  });
  return (
    <div className="h-screen w-screen main-background flex justify-center content-center flex-col">
      <a href="/">
        <button className=" text-4xl text-white back-button text-left transition hover:text-button  font-bold">
          ⬅ Back
        </button>
      </a>
      <h1 className=" text-6xl text-white text-center font-bold">Page 404</h1>
      <div style={{ height: "40vh" }}>
        <CoinWrapper />
      </div>
      <h2 className=" text-4xl text-white text-center m-8 font-medium">
        This page was stolen <br />
        by some penguins
      </h2>
    </div>
  );
};
