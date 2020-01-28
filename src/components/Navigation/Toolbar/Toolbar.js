import React from 'react';

// import styles
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Ribon}/>
        <div>
            <h1>Logo</h1>
        </div>
        <nav>
            
        </nav>
    </header>
);

export default toolbar;