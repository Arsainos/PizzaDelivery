import React, {Component} from 'react';

// import styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import components
import Slider from "react-slick";

class Carousel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            arrows:false,
            autoplay:true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true
          };
        return (
            <Slider {...settings}>
                {this.props.children}
            </Slider>
        )
    }
}

export default Carousel;