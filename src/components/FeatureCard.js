import React, { Component } from "react";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";


class FeatureCard extends Component {
  static propTypes = {
    featureIcon: PropTypes.object,
    featureDescription: PropTypes.string,
    featureTitle: PropTypes.string,
    iconClassname: PropTypes.string,
  }

  render() {
    const { featureIcon, featureDescription, featureTitle, iconClassname } = this.props;

    return (
      <Col xs="12" sm="6" md="6" lg="3" className="no-padding">
        <div className="black-bg">
          <div>
            <div className={iconClassname}>
              <FontAwesomeIcon
                icon={featureIcon}
                style={{ color: "white", fontSize: 35 }}
              />
            </div>
          </div>
          <div>
            <p className="ban-text award">{featureTitle}</p>
            <p className="ban-text" style={{ fontSize: 13 }}>{featureDescription}</p>
          </div>
        </div>
      </Col>
    );
  }
}

export default FeatureCard;
