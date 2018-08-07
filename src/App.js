import React, { Component } from 'react';
import { Header, Slider, EventsSection, AboutUs } from './components';
import {
  Button
} from 'reactstrap';
import Facebook from './components/Facebook';
import { Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStroopwafel, faArrowAltCircleRight, faTrophy, faTasks, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faStroopwafel, faArrowAltCircleRight);
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
            <Col xs="12" sm="6" md="6" lg="3" className="no-padding">
              <div className="black-bg">
                <div>
                  <div className="small-bg">
                    <FontAwesomeIcon icon={faTrophy} style={{ color: 'white', fontSize: 35 }} />
                  </div>
                </div>
                <div>
                  <p className="ban-text award">AWARDS</p>
                  <p className="ban-text" style={{ fontSize: 13 }}>We have won numerous awards. We take pride in these achievements and look forward to continuing this laudable feat.</p>
                </div>
              </div>
            </Col>
            <Col xs="12" sm="6" md="6" lg="3" className="no-padding">
              <div className="black-bg">
                <div>
                  <div className="small-bg yellow-gb">
                    <FontAwesomeIcon icon={faTasks} style={{ color: 'white', fontSize: 35 }} />
                  </div>
                </div>
                <div>
                  <p className="ban-text award">PROGRAMS</p>
                  <p className="ban-text" style={{ fontSize: 13 }}>Our educational programs align with world class montessorri standards specially designed to meet todays needs</p>
                </div>
              </div>
            </Col>
            <Col xs="12" sm="6" md="6" lg="3" className="no-padding">
              <div className="black-bg">
                <div>
                  <div className="small-bg green-bg">
                    <FontAwesomeIcon icon={faAddressCard} style={{ color: 'white', fontSize: 38 }} />
                  </div>
                </div>
                <div>
                  <p className="ban-text award">ONLINE ED</p>
                  <p className="ban-text" style={{ fontSize: 13 }}>We have an easy-to-use online platform that allows you monitor your students grades and progress anytime.</p>
                </div>
              </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="3" className="no-padding">
              <div className="yellow-bg">
                <p className="undertext">Do not hesitate to ask us</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div>
                    <p className="discover">Discover Phidel</p>
                  </div>

                  <FontAwesomeIcon icon={faArrowAltCircleRight} style={{
                    color: 'white', fontSize: 50, marginTop: '30px', marginRight: '20px'
                  }} />
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginRight: '0px', marginLeft: '0px' }}>
            <AboutUs />
            <EventsSection />
          </Row>
        </div>
      </div>
    );
  }
}

export default App;

