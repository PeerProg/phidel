import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faMapMarkerAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
  render() {
    return (
      <div>
        <Row style={{ marginRight: '0px', marginLeft: '0px', marginTop: '50px', height: '150px' }}>
          <Col xs="12" md="6" lg="3" className="footer-div">
            <p className="footer-label">ABOUT THE SCHOOL</p>
            <p className="about">
              Phidel Schools was established in 2016 to develop students to become next generation of world leaders through invaluable academic and moral education.The College is situated at Isheri, Idimu, Lagos State of Nigeria. The College is a coeducational Secondary School that prepares students to excel through individual skills and teamwork with educational moral, religious and social standard
            </p>
          </Col>
          <Col xs="12" md="6" lg="3" className="footer-div">
            <p className="footer-label">WORK HOURS</p>
            <div className="work-hours">
              <p>Mon-Thur</p>
              <p>7:30am - 5:30pm</p>
            </div>
            <div className="work-hours">
              <p>Fri</p>
              <p>7:30am - 4:30pm</p>
            </div>
            <div className="holidays">
              <p>Holidays</p>
              <p>10:30am - 2:30pm</p>
            </div>
          </Col>
          <Col xs="12" md="6" lg="3" className="footer-div">
            <p className="footer-label"> VISIT US</p>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d7652.563264121312!2d3.2804623638419317!3d6.584010696446976!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d6.591408899999999!2d3.2840749999999996!4m5!1s0x103b9040b372f9c5%3A0x616ae8a0b13c2ec4!2sphidel+school+lagos+nigeria!3m2!1d6.589884!2d3.2833883!5e0!3m2!1sen!2sng!4v1533649779920"
              width="300"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen />
          </Col>
          <Col xs="12" md="6" lg="3" className="footer-black">
            <p className="contact-us">CONTACT US</p>
            <div className="contact">
              <div className="footer-contact">
                <FontAwesomeIcon icon={faPhoneSquare} style={{ color: 'white', fontSize: 35 }} />
              </div>
              <p>08072548185, 08099667865</p>
            </div>
            <div className="contact">
            <div className="footer-contact">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'white', fontSize: 35 }} />
              </div>
              <p className="contact-text">21 Odemuyiwa Street, Idimu, Lagos</p>
            </div>
            <div className="contact-wb">
            <div className="footer-contact">
                <FontAwesomeIcon icon={faEnvelopeSquare} style={{ color: 'white', fontSize: 35 }} />
              </div>
              <p className="contact-text">info@phidel.com.ng</p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Footer;
