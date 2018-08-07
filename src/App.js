import React, { Component } from 'react';
import { Header, Slider, Footer } from './components';
import {
  Button
} from 'reactstrap';
import Facebook from './components/Facebook';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStroopwafel, faArrowAltCircleRight, faTrophy, faTasks, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Images from './assets/images';

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
            <Col xs="12" md="6" lg="3" className="card-pad">
              <Card>
                <CardImg top width="100%" src={Images.ban2} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Our Classroom</CardTitle>
                  <CardText >Our classrooms are very convienient to use and reuseable. They make our students feel extremely comfortabe and happy to join us in the classrooms. We ensure we provide high-quality desk and chairs. The sight of our classroom is amazing and looks beautiful, spacious and very airy.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="6" lg="3" className="card-pad">
              <Card>
                <CardImg top width="100%" src={Images.ban5} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Our Teachers</CardTitle>
                  <CardText>Our teachers are highky trained individuals who specialize in taking carre of our pupils wiht ulmost attention, meeting their every day needs. We select top-notch teachers who deliver our students in the best manner possible pereparing them to be the future leaders of tomorrow.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="6" lg="3" className="card-pad">
              <Card >
                <CardImg top width="100%" src={Images.ban1} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Our students</CardTitle>
                  <CardText>We breed impeccable students. Our students are respectful, well-trained individuals whop stand out among their peers in all facrts of life. We pay attention to the quality of students we have ensuring that thwy are prepared for challenges that lay ahead of them.We believe in them wholly</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="6" lg="3" className="no-padding">
              <div className="extend">
                <p className="events">Events</p>
                <p> See our calendar for upcoming events in 2018. Ensure to check this.</p>
                <div className="flexify">
                  <div className="event-date">
                    <p className="month">AUG</p>
                    <p className="date">11</p>
                  </div>
                  <div className="content">
                    <p className="event-text">Open Day</p>
                  </div>
                </div>
                <div className="flexify">
                  <div className="event-date">
                    <p className="month">AUG</p>
                    <p className="date">22</p>
                  </div>
                  <div className="content">
                    <p className="event-text">PTA Meeting</p>
                  </div>
                </div>
                <div className="flexify">
                  <div className="event-date">
                    <p className="month">AUG</p>
                    <p className="date">11</p>
                  </div>
                  <div className="content">
                    <p className="event-text">Board Meeting</p>
                  </div>
                </div>
                <div className="flexify">
                  <div className="event-date">
                    <p className="month">AUG</p>
                    <p className="date">11</p>
                  </div>
                  <div className="content">
                    <p className="event-text">End of term</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

/* footer styles*/

.footer-div {
  background-color: #ededed;
  height: 300px;
  width: 100%;
  border: 1px solid whitesmoke;
  padding: 30px;
}
.footer-black {
 background-color: #333436;
  height: 300px;
  width: 100%;
  padding: 30px;
}
.footer-label {
  font-weight: 700;
}
.contact-us {
  font-weight: 700;
  color: white;
}
.contact{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4%;
  border-bottom: 0.5px dashed #a7aeba;
}
.contact-wb{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4%;
}
.contact p {
  color: white;
}
.contact-wb p{
  color: white;
}
ul {
  list-style-type: none;
}
.work-hours {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4%;
  border-bottom: 0.5px dashed #a7aeba;
}
.holidays {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4%;
}
.contact-text {
  font-size: 13px;

}
.about {
  font-size: 13px;
  line-height: 1.8;
}
.footer-contact {
  display: flex;
  width: 60px;
  height: 40px;
  align-items: center;
  justify-content: center;
}
