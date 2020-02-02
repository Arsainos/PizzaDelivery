import React from 'react';

// import styles
import classes from './Checkout.module.css';

// import hocs
import AUX from '../../hocs/Axuliary.js';

// import image
import pizzaMock from '../../assets/mocks/pizzaMock.jpg';

const Checkout = (props) => {
    return (
        <AUX>
            <div className={classes.Container}>
                <div className={classes.Cart}>
                    <h1 className={classes.CartHeader}>Cart</h1>
                    <ul className={classes.CartList}>
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
                    </ul>
                    <div className={classes.CartCheckout}>
                        <div className={classes.CartCheckoutSum}>
                            <span className={classes.CartCheckoutText}>Order price:</span>
                            <span className={classes.CartCheckoutMoney}>50</span><span className={classes.CartCheckoutCurrency}>$</span>
                        </div>
                        <button className={classes.CartOrderButton}>Order</button>
                    </div>
                </div>
            </div>
        </AUX>
    )
}

export default Checkout;