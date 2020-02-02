import React from 'react';

// import style
import classes from './Logo.module.css';

// import image
import pizzaLogo from '../../../assets/img/logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={pizzaLogo} alt="MyPizzaDelievery"/>
    </div>
);

export default logo;