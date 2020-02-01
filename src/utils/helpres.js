import React from 'react';

// import components
import Card from '../components/UI/Cards/Card/Card.js';
import PromoCard from '../components/UI/Cards/PromoCard/PromoCard.js';

export const generateCardsData = (inputs, cardType, handler) => {
    switch(cardType) {
        case Card:
            return inputs.map((it, i) => {
                return <Card
                    key={Math.random()*(i+1)}
                    mageSrc={it.imageSrc}
                    alt={it.imageAlt}
                    name={it.name}
                    description={it.description}
                    price={it.price}
                    clicked={handler}
                />
            });

        case PromoCard:
            return inputs.map((it, i) => {
                return <PromoCard
                    key={Math.random() + '_' + (i+1)}
                    title={it.title}
                    description={it.description}
                    imageSrc={''}
                />
            });

        default:
            return [];   
    }
}