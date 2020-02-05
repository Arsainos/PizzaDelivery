import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

// import components
import { goToAnchor, goToTop, removeHash } from 'react-scrollable-anchor';

const NavigationItem = (props) => {
    let NavItem = null;

    switch(props.type) {
        case 'scrollabe':
            NavItem = (
                <NavLink 
                    to={props.link}
                    exact
                    activeClassName={classes.active}
                >
                    <span onClick={() => { goToAnchor(props.link, true); removeHash();}}>{props.children}</span>
                </NavLink>
            )
            break;

        default:
            NavItem = (
                <NavLink 
                    to={props.link}
                    href={props.section}
                    exact
                    activeClassName={classes.active}
                >
                    <span onClick={() =>{goToTop(); removeHash()}}>{props.children}</span>
                </NavLink>
            )
            break;
    }

    return (
    <li className={classes.NavigationItem}>
        {NavItem}
    </li>)
};

export default NavigationItem;