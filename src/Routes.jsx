import { BrowserRouter, Route, Routes as RouteSwitch } from "react-router";

import { MainPage, WhitePaper, PageNotFound } from "./pages/Pages";

function Routes() {
  return (
    <BrowserRouter>
      <RouteSwitch>
        <Route path="/" element={<MainPage />} />
        <Route path="/whitepaper/*" element={<WhitePaper />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </RouteSwitch>
    </BrowserRouter>
  );
}

export default Routes;
