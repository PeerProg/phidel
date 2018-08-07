import React, { Component } from "react";
import { Col } from "reactstrap";

export default class EventsSection extends Component {
  render() {
    return (
      <Col xs="12" md="6" lg="3" className="no-padding">
        <div className="extend">
          <p className="events">Events</p>
          <p>
            {" "}
            See our events.
          </p>
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
    );
  }
}
