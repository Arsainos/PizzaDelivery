import React,{Component} from 'react';

// import styles
import classes from './Toolbar.module.css';

// import components
import Button from '../../UI/Button/Button.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import Logo from '../../UI/Logo/Logo.js';
import { NavLink } from 'react-router-dom';

// import redux
import {connect} from 'react-redux';

class Toolbar extends Component {
    render(){
        return (
            <header className={classes.Toolbar}>
                <Logo />
                <div className={classes.ToolbarWrap}>
                    <div className={classes.TopPanel}>
                        <p>Aute mollit sit ullamco esse nostrud elit mollit!</p>
                        <NavLink 
                            to={`/checkout`}
                            exact
                            className={classes.CartButton}>                        
                                {`Cart ${this.props.cart.size > 0 ? [...this.props.cart.values()].reduce((accumulative, item) => accumulative + item) : `` }`}          
                        </NavLink>
                    </div>    
                    <div className={classes.NavPanel}>
                        <nav>
                            <NavigationItems />
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
    
};

const mapStateToProps = state => {
    return {
        cart: state.cart.cart
    };
};

export default connect(mapStateToProps, null)(Toolbar);