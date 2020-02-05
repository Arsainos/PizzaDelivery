import React from 'react';

// import styles
import classes from './History.module.css';

// import components
import HistoryList from '../HistoryList/HistoryList.js';

const history = (props) => {
    return (
        <div className={classes.History}>
            <h1 className={classes.HistoryHeader}>Orders History</h1>
            <HistoryList orders={props.orders}/>
        </div>
    )
}

export default history;