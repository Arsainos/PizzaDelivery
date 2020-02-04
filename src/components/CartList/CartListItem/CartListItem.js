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
                    <div className={classes.CartItemSummary}>{props.data.summary ? `${props.data.summary} ${props.data.additions ? `with additional ${props.data.additions.map((addition) => addition.name).join(',')}` : ``}` : props.data.description}</div>
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
                <button className={classes.CartDeleteButton} onClick={() => props.onDelete(props.data)}>
                    <svg height="20" viewBox="-48 0 407 407" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="m89.199219 37c0-12.132812 9.46875-21 21.601562-21h88.800781c12.128907 0 21.597657 8.867188 21.597657 21v23h16v-23c0-20.953125-16.644531-37-37.597657-37h-88.800781c-20.953125 0-37.601562 16.046875-37.601562 37v23h16zm0 0"/>
                        <path d="m60.601562 407h189.199219c18.242188 0 32.398438-16.046875 32.398438-36v-247h-254v247c0 19.953125 14.15625 36 32.402343 36zm145.597657-244.800781c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm0 0"/>
                        <path d="m20 108h270.398438c11.046874 0 20-8.953125 20-20s-8.953126-20-20-20h-270.398438c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20zm0 0"/>
                    </svg>
                <span className={classes.VisuallyHidden}>Delete item</span></button>
            </div>
        </li>
    )
}

export default CartListItem;