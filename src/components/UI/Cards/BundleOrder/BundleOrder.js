import React from 'react';

// import styles
import classes from './BundleOrder.module.css';
import classesOrder from '../CardOrder/CardOrder.module.css';

// import image
import pizzaImage from '../../../../assets/mocks/pizzaMock.jpg';

// import components
import CardSmall from '../CardSmall/CardSmall.js';

const BundleOrder = (props) => {
    let price = 0;
    let PizzasList = [];
    
    if(props.list.length > 0) {
        props.list.forEach((pizza , i) => {
            price = price + pizza.price;
            PizzasList.push(
                <CardSmall 
                    key={pizza.Name + '_' + i}
                    name={pizza.name}
                    description={pizza.description}
                />
            )
        })  
    };
    
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
              {PizzasList}
            </ul>
          </div>
          <div className={classes.Checkout}>
            <span className={classes.CheckoutPrice}>{price}$</span><span className={classes.CheckoutMoney}>{price*0.9}$</span>
          </div>
          <button className={classesOrder.AddButton} onClick={() => props.continueClick(props)}>Add to Cart</button>
        </div>
      </div>
    )
}

export default BundleOrder;