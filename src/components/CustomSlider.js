import React, { Component } from 'react'
import Slider from "react-slick";
import Images from '../assets/images';

class CustomSlider extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      className: 'slides'
    };
    return (
      <div className="slider-styles">
      <Slider {...settings}>
        <div className="relative">
          <img width='100%' alt="phidel-student" height='auto' src={Images.ban1} className="border-img" />
          <div className="side-div"></div>
          <div className="caption">
            <p className="slider-text">We ensure our students interact effectively. They always look forward to being in the classroom.</p>
          </div>
        </div>
        <div className="relative">
          <img width='100%' alt="phidel-student" height='auto' src={Images.ban2} className="border-img" />
          <div className="side-div"></div>
          <div className="caption">
            <p className="slider-text">Our classroom facilites are top-notch. We endeavour to make our students very comfortable.</p>
          </div>
        </div>
        <div className="relative">
          <img width='100%'  alt="phidel-student" height='auto' src={Images.ban6} className="border-img" />
          <div className="side-div"></div>
          <div className="caption">
            <p className="slider-text">We value diversity, as such, we ensure our students take part in co-curricular activities that align with their interest</p>
          </div>
        </div>
        <div className="relative">
          <img width='100%' alt="phidel-student" height='auto' src={Images.ban3} className="border-img" />
          <div className="side-div"></div>
          <div className="caption">
            <p className="slider-text">Our medical facilities are very modern. We hae an in-school medical team stationed to attend to our students.</p>
          </div>
        </div>
        <div className="relative">
          <img width='100%' alt="phidel-student" height='auto' src={Images.ban4} className="border-img" />
          <div className="side-div"></div>
          <div className="caption">
            <p className="slider-text">We love sports and culture. Our students participate in sports and cultural activities.</p>
          </div>
        </div>
        <div className="relative">
          <img width='100%' alt="phidel-student" height='auto' src={Images.ban5} className="border-img" />
          <div className="side-div"></div>
          <div className="caption">
            <p className="slider-text">Our teachers are trained to understand and meet the individual needs of our students.</p>
          </div>
        </div>
      </Slider>
    </div>
    )
  }
}

export default CustomSlider;
