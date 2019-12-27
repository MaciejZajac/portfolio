import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import SideMenu from "./components/SideMenu";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className=" structure">
        <div className="container">
          <div className="columns is-desktop">
            <div className="column is-one-fifth">
              <SideMenu />
            </div>
            <div className="column">
              <Switch>
                <Route exact path="/" component={HomePage} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
