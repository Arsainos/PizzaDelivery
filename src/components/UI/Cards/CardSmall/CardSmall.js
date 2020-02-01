import React from 'react';

// import styles
import classes from './CardSmall.module.css';

// import image
import pizzaImage from '../../../../assets/mocks/pizzaMock.jpg';

const CardSmall = (props) => {
    return(
        <li className={classes.CardSmall} class="options-list__option combo-option">
            <img className={classes.Image} class="combo-option__image" src={pizzaImage} alt="Pizza" />
            <div className={classes.Wraper} class="combo-option__wrapper">
                <h3 className={classes.Name} class="combo-option__product-name">{props.name}</h3>
                <div className={classes.Description} class="combo-option__product-description-full">{props.description}</div>
                <div className={classes.Summary} class="combo-option__product-summary">{props.ingredients}</div>
            </div>
        </li>
    )
}

export default CardSmall;