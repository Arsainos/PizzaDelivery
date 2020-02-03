import React from 'react';

// import styles
import classes from './CartListItem.module.css';

const CartListItem = (props) => {
    return (
        <li className={classes.CartListItem}>
            <div className={classes.CartItemWrap}>
                <img className={classes.CartItemImage} src={props.data.imageSrc} alt="Pizza" />
                <div className={classes.CartImageNameWrapper}>
                    <h3 className={classes.CartProductName}>{props.data.name}</h3>
                    <div className={classes.CartItemSummary}>{props.data.description}</div>
                </div>
            </div>
            <div className={classes.CartControls}>
                <button className={classes.CartControlsButton} type="button" onClick={() => props.onDecrement(props.data)}>-</button>
                <span className={classes.CartItemCount}>{props.counter}</span>
                <button className={classes.CartControlsButton} type="button" onClick={() => props.onIncrement(props.data)}>+</button>
            </div>
            <div className={classes.CartItemPriceWrapper}>
                <div className={classes.CartPrice}>
                    <span className={classes.CartMoney}>{Number.parseFloat(props.data.price) * Number.parseFloat(props.counter)}</span><span className={classes.CartCurrency}>$</span>
                </div>
                <button className={classes.CartDeleteButton}><span className={classes.VisuallyHidden}>Delete item</span></button>
            </div>
        </li>
    )
}

export default CartListItem;