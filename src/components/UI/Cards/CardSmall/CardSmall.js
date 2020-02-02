import React from 'react';

// import styles
import classes from './CardSmall.module.css';

// import image
import pizzaImage from '../../../../assets/mocks/pizzaMock.jpg';

const CardSmall = (props) => {
    return(
        <li className={classes.CardSmall}>
            <img className={classes.Image} src={props.imageSrc} alt={props.imageAlt} />
            <div className={classes.Wraper}>
                <h3 className={classes.Name}>{props.name}</h3>
                <div className={classes.Description}>{props.description}</div>
                <div className={classes.Summary}>{props.ingredients}</div>
            </div>
        </li>
    )
}

export default CardSmall;