import React from "react";

import { Switch, Route } from "react-router-dom";
import { PhGallery, HomePage } from "./components";

export const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/gallery" component={PhGallery} />
    </Switch>
  </main>
);
