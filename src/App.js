import React, { Component } from 'react';
import { Header, Slider } from './components';
import {
  Button
} from 'reactstrap';
import Facebook from './components/Facebook';
import { Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="styledhr"></div>
        <div className="pad-button">
          <Row className="d-flex justify-content-end">
            <Col xs="7" md="4" lg="3">
              <Button style={{ backgroundColor: "#415796", width: '100%', paddingRight: '2px' }}>
                <p className="iconText">Visit us on facebook<Facebook icon="facebook"/></p>
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
      </div>
    );
  }
}

export default App;

