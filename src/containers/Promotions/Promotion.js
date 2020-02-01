import React from 'react';

// import components
import GridFood from '../../components/FoodGrid/FoodGrid.js';

const Promotions = (props) => {
    const promoArray = [
        {title: '2x2 Coca-cola', description:'Buy pack of two coca-cola and get another two for three!', imageSrc:''},
        {title: 'Special price for bundles!', description:'Buy any bundles and get -10% discount', imageSrc:''},
        {title: 'Night watch', description:'Order pizza in night time (from 24:00 to 06:00) and get -50% discount'},
    ]
    
    let promoCards = [];

    promoArray.forEach((promo) => {
        const newPromoCard = (
            <div key={Math.random()+'_'+promo.title}><h1>{promo.title}</h1></div>
        );

        promoCards.push(newPromoCard);
    })
    
    return (
        <GridFood 
            id={'promotions'}
            title={'Promotions'}
            data={promoCards}
            elementsInRow={3}
        />
    );
};

export default Promotions;