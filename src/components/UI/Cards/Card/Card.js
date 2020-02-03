import React from 'react';

// import styles
import classes from './Card.module.css';

// import image
import pizzaImage from '../../../../assets/mocks/pizzaMock.jpg';

const card = (props) => {
    return (
        <div className={classes.Product}>
            <div className={classes.ProductInner}>
                <div className={classes.ProductIamge}>
                    <img className={classes.ProductImageImg} src={props.imageSrc} alt={props.alt} />
                </div>
                <h3 className={classes.ProductName}>{props.name}</h3>
                <div className={classes.ProductDescription}>{props.description}</div>
            </div>
            <div className={classes.ProductControls}>
                <div className={classes.ProductCart}>
                    <div className={classes.ProductPrice}>{props.discount ? props.price * props.discount : props.price}<span className={classes.ProductCurrency}>$</span></div>
                    <div className={classes.ProductToCart}>
                        <button type="button" className={[classes.ProductToCartButton, classes.ProductButton].join(' ')}
                            onClick={() => props.clicked(props)}
                        >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card;