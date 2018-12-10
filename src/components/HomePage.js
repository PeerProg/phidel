import React, { Component, Fragment } from 'react';
import { Row } from 'reactstrap';
import { Slider, Features, AboutUs, EventsSection } from '.';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Slider />
        <div style={{ width: '100%' }}>
          <Row style={{ marginRight: '0px', marginLeft: '0px' }}>
            <Features />
          </Row>
          <Row style={{ marginRight: '0px', marginLeft: '0px' }}>
            <AboutUs />
            <EventsSection />
          </Row>
          <Row style={{ marginRight: '0px', marginLeft: '0px' }}>
            <Features />
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
