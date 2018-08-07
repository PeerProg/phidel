import React, { Component } from "react";
import PropTypes from 'prop-types';

class EventCard extends Component {
  static propTypes = {
    eventMonth: PropTypes.string,
    eventDay: PropTypes.string,
    eventName: PropTypes.string,
  }

  render() {
    const { eventMonth, eventDay, eventName } = this.props;

    return (
      <div className="flexify">
        <div className="event-date">
          <p className="month">{eventMonth}</p>
          <p className="date">{eventDay}</p>
        </div>
        <div className="content">
          <p className="event-text">{eventName}</p>
        </div>
      </div>
    );
  }
}

export default EventCard;
