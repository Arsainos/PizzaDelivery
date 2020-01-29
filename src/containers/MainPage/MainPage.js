import React, {Component} from 'react';

// import styles
import classes from './MainPage.module.css';

// import hocs 
import AUX from '../../hocs/Axuliary.js';

// import components
import Carousel from '../../components/UI/Carousel/Carousel.js';

// import images
import carousel1 from '../../assets/Carousel/carousel1.jpg';
import carousel2 from '../../assets/Carousel/carousel2.jpg';
import carousel3 from '../../assets/Carousel/carousel3.jpg';

const mainPage = (props) => {

    return(
        <AUX>
            <div>
                <Carousel>
                    <div><img src={carousel1} alt="carousel yamu pizza"></img></div>
                    <div><img src={carousel2} alt="carousel yamu pizza"></img></div>
                    <div><img src={carousel3} alt="carousel yamu pizza"></img></div>
                </Carousel>
            </div>
            <div>
                <h1>pizza list</h1>
            </div>
            <div>
                <h1>bundles</h1>
            </div>
            <div>
                <h1>alt food</h1>
            </div>
        </AUX>
    );
};

export default mainPage;

