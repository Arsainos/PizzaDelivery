import React from 'react';

// import styles
import classes from './OrderList.module.css';

// import components
import HistoryListItem from '../HistoryListItem/HistoryListItem.js';

const orderList = (props) => {
    let HistoryListItems = [];
    
    props.order.forEach((it,i) => {
        HistoryListItems.push((
            <HistoryListItem 
                key={`HistoryListItem_`+i}
                {...it}
            />
        ))
    })
    
    return (
        <li className={classes.Order}>
            <div className={classes.OrderHeaderWrap}>
                <h2 className={classes.OrderHeader}>{props.orderNumber}</h2>
                <div className={classes.OrderCheckout} >
                    <div>
                        <span>Total price:</span>
                        <span className={classes.OrderCheckoutMoney}>{props.totalPrice}</span><span className={classes.OrderCheckoutCurrency}>$</span>
                    </div>
                </div>
            </div>
            <ul className={classes.OrderList}>
                    {HistoryListItems}
            </ul>
        </li>      
    )
}

export default orderList;