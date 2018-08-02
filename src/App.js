import React, { Component } from 'react';
import { Header } from './components';
import { Button } from 'reactstrap';
import Facebook from './components/Facebook';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="styledhr"></div>
          <Container style={{ marginRight: 0}}>
          <Row className="d-flex justify-content-end">
            <Col xs="7" md="3" lg="2">
              <Button style={{ backgroundColor: "#415796", width: '100%' }}>
                <p className="iconText">Visit us on facebook<Facebook icon="facebook" /></p>
              </Button>{' '}
            </Col>
            <Col xs="5" md="3" lg="2">
              <Button color="success" style={{ width: '100%'}}>
                <p className="iconText"> Go to Portal</p>
              </Button>{' '}
            </Col>
          </Row>
          </Container>
      </div>
    );
  }
}

export default App;

