import React from 'react';

// import styles
import classes from './Button.module.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        onClick={props.clicked}
        className={[classes.Button, classes[props.buttonType]].join(' ')}
    >
        {props.children}
    </button>
);

export default button;