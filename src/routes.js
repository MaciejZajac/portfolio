import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import SideMenu from "./components/SideMenu";
import Projects from "./components/Projects";
import Faq from "./components/FAQ";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className="structure">
        <div className="columns is-desktop">
          <div
            className="column is-2"
            style={{ paddingBottom: 0, paddingRight: 0 }}
          >
            <SideMenu />
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/faq" component={Faq} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
