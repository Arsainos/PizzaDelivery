import React from 'react';

// import styles
import classes from './HistoryList.module.css';

// import components
import OrderList from './OrderList/OrderList.js';

const historyList = (props) => {
    
    let OrderListItems = [];
    
    props.orders.forEach((it,i) => {
        OrderListItems.push((
            <OrderList 
                key={`OrderList`+i}
                {...it}
            />
        ))
    })

    return (
        <ul className={classes.HistoryList}>
            {OrderListItems}
        </ul>
    )
}

export default historyList;