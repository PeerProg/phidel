import React, { Component, Fragment } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { Slider, Features, AboutUs, EventsSection, Facebook } from '.';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="styledhr"></div>
        <div className="pad-button">
          <Row className="d-flex justify-content-end">
            <Col xs="7" md="4" lg="3">
              <Button style={{ backgroundColor: "#415796", width: '100%', paddingRight: '2px' }}>
                <p className="iconText">Visit us on facebook<Facebook icon="facebook" /></p>
              </Button>
            </Col>
            <Col xs="5" md="3" lg="2">
              <Button color="success" style={{ width: '100%' }}>
                <p className="iconText"> Go to Portal</p>
              </Button>
            </Col>
          </Row>
        </div>
        <Slider />
        <div style={{ width: '100%' }}>
          <Row style={{ marginRight: '0px', marginLeft: '0px' }}>
            <Features />
          </Row>
          <Row style={{ marginRight: '0px', marginLeft: '0px' }}>
            <AboutUs />
            <EventsSection />
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
