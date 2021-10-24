import React, { useEffect, useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const WhitePaper = () => {
  const [PDFWidth, setPDFWidth] = useState(
    window.innerWidth > 1050 ? window.innerWidth * 0.6 : window.innerWidth * 0.6
  );
  useEffect(() => {
    const resizeListener = () => {
      setPDFWidth(
        window.innerWidth > 1050
          ? window.innerWidth * 0.6
          : window.innerWidth * 0.6
      );
    };

    // set resize listener
    window.addEventListener("resize", resizeListener);
  }, []);
  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  };

  useEffect(() => {
    document.title = "White Paper | BPC";
  });

  return (
    <div className="whitepaper w-screen main-background space-2">
      <div className="flex justify-between">
        <h1 className="text-4xl text-white">White Paper</h1>
        <a href="/" className="text-right right-0">
          <button className=" text-4xl text-white back-button transition hover:text-button  font-bold">
            ⬅ Back
          </button>
        </a>
      </div>
      <div className="text-center w-full">
        <Document file={"white-paper.pdf"}>
          <div style={{ height: PDFWidth * (11 / 8.5) }}>
            <Page
              pageNumber={2}
              width={PDFWidth}
              onLoadSuccess={removeTextLayerOffset}
            />
          </div>
        </Document>
      </div>
    </div>
  );
};
