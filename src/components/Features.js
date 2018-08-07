import React, { Component, Fragment } from "react";
import { Col } from "reactstrap";
import { faArrowAltCircleRight, faTrophy, faTasks, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FeatureCard } from '.';

class Features extends Component {
  render() {
    return (
      <Fragment>
        <FeatureCard
          iconClassname="small-bg"
          featureTitle="AWARDS"
          featureIcon={faTrophy}
          featureDescription="We have won numerous awards. We take pride in these achievements
              and look forward to continuing this laudable feat."
        />
        <FeatureCard
          iconClassname="small-bg yellow-gb"
          featureTitle="PROGRAMS"
          featureIcon={faTasks}
          featureDescription="Our educational programs align with world class montessorri
          standards specially designed to meet todays needs"
        />
        <FeatureCard
          iconClassname="small-bg green-bg"
          featureTitle="ONLINE ED"
          featureIcon={faAddressCard}
          featureDescription="We have an easy-to-use online platform that allows you monitor
          your students grades and progress anytime."
        />
        <Col xs="12" sm="12" md="6" lg="3" className="no-padding">
          <div className="yellow-bg">
            <p className="undertext">Do not hesitate to ask us</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <p className="discover">Discover Phidel</p>
              </div>

              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                style={{
                  color: "white",
                  fontSize: 50,
                  marginTop: "30px",
                  marginRight: "20px"
                }}
              />
            </div>
          </div>
        </Col>
      </Fragment>
    );
  }
}

export default Features;
