import React from 'react';

// import styles
import classes from './CartListItem.module.css';

// import image
import pizzaMock from '../../../assets/mocks/pizzaMock.jpg';

const CartListItem = (props) => {
    return (
        <li className={classes.CartListItem}>
            <div className={classes.CartItemWrap}>
                <img className={classes.CartItemImage} src={pizzaMock} alt="Pizza" />
                <div className={classes.CartImageNameWrapper}>
                    <h3 className={classes.CartProductName}>Margarita</h3>
                    <div className={classes.CartItemSummary}>Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
                </div>
            </div>
            <div className={classes.CartControls}>
                <button className={classes.CartControlsButton} type="button">-</button>
                <span className={classes.CartItemCount}>1</span>
                <button className={classes.CartControlsButton} type="button">+</button>
            </div>
            <div className={classes.CartItemPriceWrapper}>
                <div className={classes.CartPrice}>
                    <span className={classes.CartMoney}>50</span><span className={classes.CartCurrency}>$</span>
                </div>
                <button className={classes.CartDeleteButton}><span className={classes.VisuallyHidden}>Delete item</span></button>
            </div>
        </li>
    )
}

export default CartListItem;