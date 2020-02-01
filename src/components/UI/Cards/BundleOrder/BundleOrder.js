import React from 'react';

// import styles
import classes from './BundleOrder.module.css';
import classesOrder from '../CardOrder/CardOrder.module.css';

// import image
import pizzaImage from '../../../../assets/mocks/pizzaMock.jpg';

const BundleOrder = (props) => {
    return (
        <div className={classes.BundleOrder}>
            <div className={classes.ImageContainer}>
                <img className={classes.InnerImage} src={pizzaImage} alt="Pizza" />
            </div>
        <div className={classesOrder.InfoContainer}>
          <h2 className={classesOrder.ProductName}>{props.name}</h2>
          <div className={classesOrder.ProductDescription}>{props.description}</div>
          <div className={classesOrder.OptionsContainer}>
            <ul className={classesOrder.OptionsList}>
              <li>Pizza 1</li>
            </ul>
          </div>
          <div className={classes.Checkout}>
            <span className={classes.CheckoutPrice}>30$</span><span className={classes.CheckoutMoney}>30$</span>
          </div>
          <button className={classesOrder.AddButton}>Add to Cart</button>
        </div>
      </div>
    )
}

export default BundleOrder;