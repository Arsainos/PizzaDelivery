import React, {Component} from 'react';

// import styles
import classes from './MainPage.module.css';

// import hocs 
import AUX from '../../hocs/Axuliary.js';

const mainPage = (props) => {

    return(
        <AUX>
            <div>
                <h1>CAROUSEL</h1>
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

