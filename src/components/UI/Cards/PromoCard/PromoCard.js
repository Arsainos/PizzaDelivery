import React from 'react';

//import styles
import classes from './PromoCard.module.css';

//import image
import promoImg from '../../../../assets/mocks/promo.jpeg';

const PromoCard = (props) => {
    return(
        <div className={classes.Promotion}>
            <div className={classes.PromotionImage}>
                <img className={classes.PromotionImageImg} src={promoImg} alt={'promo img'}/>
            </div>          
            <h3 className={classes.PromotionTitle}>{props.title}</h3>
            <div className={classes.PromotionDescription}>
                {props.description}
            </div>
        </div>
    )
}

export default PromoCard;