import React from 'react';

// import styles
import classes from './Cart.module.css';

// import components
import CartList from '../CartList/CartList.js';
import { NavLink } from 'react-router-dom';

const Cart = (props) => {
    const getTotalPrice = (list) => {
        let totalPrice = 0;
        list.forEach((value, key, map) => {
            const currentPrice = Number.parseFloat(key.price);
            totalPrice = totalPrice + (currentPrice * Number.parseFloat(value));
        });

        return totalPrice;
    }
    
    return (
        <div className={classes.Cart}>
            <h1 className={classes.CartHeader}>Cart</h1>
            <CartList 
                onIncrementItem={props.onIncrement}
                onDecrementItem={props.onDecrement}
                onDeleteItem={props.onDelete}
                list={props.list}
            />
            <div className={classes.CartCheckout}>
                <div className={classes.CartCheckoutSum}>
                    <span className={classes.CartCheckoutText}>Order price:</span>
                    <span className={classes.CartCheckoutMoney}>{getTotalPrice(props.list)}</span><span className={classes.CartCheckoutCurrency}>$</span>
                </div>
                <NavLink
                    to={`/orders`}
                    exact
                >
                    <button className={classes.CartOrderButton} 
                        onClick={() => props.onPurchase(
                            {order: props.list, 
                            totalPrice:getTotalPrice(props.list), 
                            orderData:{
                                phone:`88005556565`,
                                address:`best street in the wrold`,
                                commentary:`as fast as it could`
                            }})}
                    >Order</button>
                </NavLink>           
            </div>
        </div>
    )
}

export default Cart;

