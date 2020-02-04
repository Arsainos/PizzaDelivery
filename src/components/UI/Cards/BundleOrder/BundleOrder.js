import React from 'react';

// import styles
import classes from './BundleOrder.module.css';
import classesOrder from '../CardOrder/CardOrder.module.css';

// import components
import CardSmall from '../CardSmall/CardSmall.js';

const BundleOrder = (props) => {
    let PizzasList = [];
    
    if(props.list.length > 0) {
        props.list.forEach((pizza , i) => {
            PizzasList.push(
                <CardSmall 
                    key={pizza.Name + '_' + i}
                    name={pizza.name}
                    description={pizza.description}
                    imageSrc={pizza.imageSrc}
                    imageAlt={pizza.imageAlt}
                />
            )
        })  
    };
    
    return (
        <div className={classes.BundleOrder}>
            <div className={classes.ImageContainer}>
                <img className={classes.InnerImage} src={props.imageSrc} alt={props.imageAlt} />
            </div>
        <div className={classesOrder.InfoContainer}>
          <h2 className={classesOrder.ProductName}>{props.name}</h2>
          <div className={classesOrder.ProductDescription}>{props.description}</div>
          <div className={classesOrder.OptionsContainer}>
            <ul className={classesOrder.OptionsList}>
              {PizzasList}
            </ul>
          </div>
          <div className={classes.Checkout}>
            <span className={classes.CheckoutPrice}>{props.price}$</span><span className={classes.CheckoutMoney}>{Math.round((props.price * props.discount) *10) /10}$</span>
          </div>
          <button className={classesOrder.AddButton} onClick={() => props.continueClick({...props, price: Math.round((props.price * props.discount) *10) /10})}>Add to Cart</button>
        </div>
      </div>
    )
}

export default BundleOrder;