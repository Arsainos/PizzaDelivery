import React from 'react';

// import styles
import classes from './Toolbar.module.css';

// import components
import Button from '../../UI/Button/Button.js';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Ribon}/>
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            <Button><h1>Cart</h1></Button>
        </div>
    </header>
);

export default toolbar;