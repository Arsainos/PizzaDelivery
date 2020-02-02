import React from 'react';

// import styles
import classes from './CartList.module.css';

// import components
import CartListItem from './CartListItem/CartListItem.js';

const CartList = (props) => {
    return (
        <ul className={classes.CartList}>
            <CartListItem />
        </ul>
    )
};

export default CartList;