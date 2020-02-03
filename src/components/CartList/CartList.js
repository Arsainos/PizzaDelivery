import React from 'react';

// import styles
import classes from './CartList.module.css';

// import components
import CartListItem from './CartListItem/CartListItem.js';

const CartList = (props) => {
    let cartListItems = [];
    
    props.list.forEach((value, key, map) => {
        cartListItems.push((
            <CartListItem 
                data={key}
                counter={value}
                onIncrement={props.onIncrementItem}
                onDecrement={props.onDecrementItem}
            />
        ))
    })
    
    return (
        <ul className={classes.CartList}>
            {cartListItems}
        </ul>
    )
};

export default CartList;