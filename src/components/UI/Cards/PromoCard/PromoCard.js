import React from 'react';

//import styles
import classes from './PromoCard.module.css';

//import image
import promoImg from '../../../../assets/mocks/promo.jpeg';

const PromoCard = (props) => {
    return(
        <div className={classes.Promo}>
            <div className={classes.PromoImage}>
                <img className={classes.PromoImageImg} src={promoImg} alt={'promo img'}/>
            </div>          
            <h3 className={classes.PromoTitle}>{props.title}</h3>
            <div className={classes.PromoDescription}>
                {props.description}
            </div>
        </div>
    )
}

export default PromoCard;