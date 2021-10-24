import { Route, Switch, BrowserRouter } from "react-router-dom";

import { MainPage, WhitePaper, PageNotFound } from "./pages/Pages";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/whitepaper" component={WhitePaper} />
        <Route path="/404" component={PageNotFound} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
