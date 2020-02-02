import React from 'react';

// import styles
import classes from './Cart.module.css';

// import components
import CartList from '../CartList/CartList.js';

const Cart = (props) => {
    return (
        <div className={classes.Cart}>
            <h1 className={classes.CartHeader}>Cart</h1>
            <CartList />
            <div className={classes.CartCheckout}>
                <div className={classes.CartCheckoutSum}>
                    <span className={classes.CartCheckoutText}>Order price:</span>
                    <span className={classes.CartCheckoutMoney}>50</span><span className={classes.CartCheckoutCurrency}>$</span>
                </div>
                <button className={classes.CartOrderButton}>Order</button>
            </div>
        </div>
    )
}

export default Cart;

