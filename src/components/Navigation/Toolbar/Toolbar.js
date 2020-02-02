import React,{Component} from 'react';

// import styles
import classes from './Toolbar.module.css';

// import components
import Button from '../../UI/Button/Button.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import Logo from '../../UI/Logo/Logo.js';

// import redux
import {connect} from 'react-redux';

class Toolbar extends Component {
    render(){
        return (
            <header className={classes.Toolbar}>
                <div className={classes.Ribon}/>
                <div className={classes.TopPanel}>
                    <div>
                        <Logo />
                    </div>
                        <div>
                        <Button><h1>{`Cart ${this.props.cart.size}`}</h1></Button>
                    </div>
                </div>    
                <div className={classes.NavPanel}>
                    <nav>
                        <NavigationItems />
                    </nav>
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