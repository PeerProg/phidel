import React, { Component } from 'react';
import { Header, HomePage, Footer } from './components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStroopwafel, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faStroopwafel, faArrowAltCircleRight);
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
