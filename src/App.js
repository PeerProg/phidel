import React, { Component } from "react";
import { Header, Footer } from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faStroopwafel,
  faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { Main } from "./routes";

library.add(fab, faStroopwafel, faArrowAltCircleRight);
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
