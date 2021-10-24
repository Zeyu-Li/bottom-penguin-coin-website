import React, { useEffect, useState } from "react";

export const WhitePaper = () => {
  useEffect(() => {
    document.title = "White Paper | BPC";
  });
  return (
    <div className="h-full w-full main-background">
      <h1 className="text-xl text-white">White Paper</h1>
    </div>
  );
};
