import React, { Component, Fragment } from "react";
import Images from '../assets/images';
import AboutUsCard from "./AboutUsCard";
import description from "../util/text";


class AboutUs extends Component {
  render() {
    return (
      <Fragment>
        <AboutUsCard
          title="Our Classroom"
          image={Images.ban2}
          description={description.classroomText}
        />
        <AboutUsCard
          title="Our Teachers"
          image={Images.ban5}
          description={description.teachersText}
        />
        <AboutUsCard
          title="Our Students"
          image={Images.ban1}
          description={description.studentsText}
        />
      </Fragment>
    );
  }
}

export default AboutUs;
