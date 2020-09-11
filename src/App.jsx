import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardCreationPage from "./pages/cardCreationPage/CardCreationPage";
import DummyPage from "./pages/dummyPage/DummyPage";

const App = () => {
  return (
    <BrowserRouter basename="/brewery-db" >
      <Switch>
        <Route path="/" exact={true} component={CardCreationPage} />
        <Route path="/page" exact={true} component={DummyPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
