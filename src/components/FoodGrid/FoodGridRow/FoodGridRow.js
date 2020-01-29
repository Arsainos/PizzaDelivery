import React from 'react';

// import styles
import classes from './FoodGridRow.module.css';

const foodGridRow = (props) => {
    return (
        <div className={classes.GridRowOuterWrapper}>
            <div className={classes.GridRow}>
                {props.children}
            </div>
        </div>
    )
}

export default foodGridRow;