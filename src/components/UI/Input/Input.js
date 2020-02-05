import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.Input];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
    }

    switch(props.elementType) {
        case ('input'):
            inputElement = <input 
                {...props.elementConfig} 
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}/>;
            break;

        default:
            inputElement = <input  
            {...props.elementConfig} 
            className={inputClasses.join(' ')}
            value={props.value}
            onChange={props.changed}/>;
    }
    
    return (
    <div>
        {inputElement}
    </div>
    )
}

export default input;