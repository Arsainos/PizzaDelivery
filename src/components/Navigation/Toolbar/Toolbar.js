import React,{Component} from 'react';

// import styles
import classes from './Toolbar.module.css';

// import components
import NavigationItems from '../NavigationItems/NavigationItems.js';
import Logo from '../../UI/Logo/Logo.js';
import { NavLink } from 'react-router-dom';
import { goToTop, removeHash } from 'react-scrollable-anchor';

class Toolbar extends Component {
    render(){

        let authButton = null;
        if(this.props.isAuthenticated) {
            authButton = (
                <button 
                    className={classes.AuthButton}
                    onClick={()=>this.props.onLogout()}
                >                        
                    {`Logout`}          
                </button>
            )
        } else {
            authButton = (
                <button 
                    onClick={()=>this.props.onLogin()}
                    className={classes.AuthButton}
                >                        
                    {`Login`}          
                </button>
            )
        }

        return (
            <header className={classes.Toolbar}>
                <Logo />
                <div className={classes.ToolbarWrap}>
                    <div className={classes.TopPanel}>
                        <p>Aute mollit sit ullamco esse nostrud elit mollit!</p>
                        {authButton}
                        <NavLink 
                            to={`/checkout`}
                            exact
                            className={classes.CartButton}>                        
                                <span onClick={()=>{goToTop(); removeHash();}}>{`Cart ${this.props.cartSize}`}</span>          
                        </NavLink>
                    </div>    
                    <div className={classes.NavPanel}>
                        <nav>
                            <NavigationItems 
                                isAuthenticated={this.props.isAuthenticated}
                            />
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
    
};

export default Toolbar;