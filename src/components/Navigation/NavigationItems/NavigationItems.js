import React, { Component } from 'react';

// import hocs
import AUX from '../../../hocs/Axuliary.js';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem.js';

class NavigationItems extends Component {
    
    render() {
        let navItems = (
            <AUX>
                <NavigationItem link="/" exact>Main</NavigationItem>
                <NavigationItem type={'scrollabe'} link="/#section_pizzas">Pizzas</NavigationItem>
                <NavigationItem type={'scrollabe'} link="/#section_bundles">Bundles</NavigationItem>
                <NavigationItem type={'scrollabe'} link="/#section_altfoods">Alternatives</NavigationItem>
                <NavigationItem type={'scrollabe'} link="/#section_drinks">Drinks</NavigationItem>
                <NavigationItem link="/promotions">Promotions</NavigationItem>
            </AUX>
        );

        if(this.props.isAuthenticated) {
            navItems = (
                <AUX>
                    <NavigationItem link="/" exact>Main</NavigationItem>
                    <NavigationItem type={'scrollabe'} link="/#section_pizzas">Pizzas</NavigationItem>
                    <NavigationItem type={'scrollabe'} link="/#section_bundles">Bundles</NavigationItem>
                    <NavigationItem type={'scrollabe'} link="/#section_altfoods">Alternatives</NavigationItem>
                    <NavigationItem type={'scrollabe'} link="/#section_drinks">Drinks</NavigationItem>
                    <NavigationItem link="/promotions">Promotions</NavigationItem>
                    <NavigationItem link="/history">Orders history</NavigationItem>
                </AUX>
            )
        }

        return (
            <ul className={classes.NavigationItems}>
                {navItems}
            </ul>
        )
    }
};

export default NavigationItems;