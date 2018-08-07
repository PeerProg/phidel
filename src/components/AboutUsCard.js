import React, { Component } from "react";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import PropTypes from 'prop-types';

class AboutUsCard extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string.isRequired
  }

  render() {
    const { image, title, description } = this.props;

    return (
      <Col xs="12" md="6" lg="3" className="card-pad">
        <Card style={{ height: '420px', width: '90%', marginLeft: '5%'}}>
          <CardImg top width="100%" src={image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText style={{ fontSize: '13px', lineHeight: 2}}>{description}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default AboutUsCard;
