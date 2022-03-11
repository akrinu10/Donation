import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './asset/css/SuccessStory.css';
import imgSuccess from './asset/image/Frame390.svg';

export default class VariableWidth extends Component {
    render() {
      const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      };
      return (
        <div className="box-story">
          <h1 className="title-head">Berkat Bantuan Anda</h1>
          <Slider {...settings}>
            <div className="slider-img" style={{ width: 283}}>
                <img src={imgSuccess} className="" alt="imgSuccess" />
            </div>
            <div className="slider-img" style={{ width: 283 }}>
                <img src={imgSuccess} className="" alt="imgSuccess" />
            </div>
            <div className="slider-img" style={{ width: 283 }}>
                <img src={imgSuccess} className="" alt="imgSuccess" />
            </div>
            
          </Slider>
        </div>
      );
    }
  }