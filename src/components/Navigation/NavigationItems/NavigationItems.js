import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem.js';

const navigationItems = (props) =>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Main</NavigationItem>
        <NavigationItem link="/promotions">Promotions</NavigationItem>
        <NavigationItem link="/pizza_builder">Build you Pizza</NavigationItem>
    </ul>
);

export default navigationItems;