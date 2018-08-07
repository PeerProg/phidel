import React, { Component } from "react";
import { Col } from "reactstrap";
import { EventCard } from '.';

class EventsSection extends Component {
  render() {
    return (
      <Col xs="12" md="6" lg="3" className="no-padding">
        <div className="extend">
          <p className="events">Events</p>
          <p>
            {" "}
            See our events.
          </p>
          <EventCard
            eventMonth="AUG"
            eventDay="11"
            eventName="Open Day"
          />
          <EventCard
            eventMonth="AUG"
            eventDay="22"
            eventName="PTA Meeting"
          />
          <EventCard
            eventMonth="AUG"
            eventDay="11"
            eventName="Board Meeting"
          />
          <EventCard
            eventMonth="AUG"
            eventDay="11"
            eventName="End of term"
          />
        </div>
      </Col>
    );
  }
}

export default EventsSection;
