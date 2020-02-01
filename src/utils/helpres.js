import React from 'react';

// import components
import Card from '../components/UI/Cards/Card/Card.js';
import PromoCard from '../components/UI/Cards/PromoCard/PromoCard.js';
import CardOrder from '../components/UI/Cards/CardOrder/CardOrder.js';
import BundleOrder from '../components/UI/Cards/BundleOrder/BundleOrder.js';

export const generateCardsData = (inputs, cardType, handler) => {
    switch(cardType) {
        case Card:
            return inputs.map((it, i) => {
                return <Card
                    key={Math.random()*(i+1)}
                    imageSrc={it.imageSrc}
                    alt={it.imageAlt}
                    name={it.name}
                    description={it.description}
                    price={it.price}
                    clicked={handler}
                    list={it.list}
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

        case CardOrder:
            return inputs.map((it, i) => {
                return <CardOrder
                key={Math.random()+'_'+(i+1)}
                iamgeSrc={it.imageSrc}
                alt={it.iamgeAlt}
                name={it.name}
                description={it.description}
                price={it.price}
                continueClick={handler}
                />
            });

        case BundleOrder:
            return inputs.map((it,i) => {
                return <BundleOrder
                key={Math.random()+'_'+(i+1)}
                iamgeSrc={it.imageSrc}
                alt={it.iamgeAlt}
                name={it.name}
                description={it.description}
                list={it.list}
                continueClick={handler}
                />
            });

        default:
            return [];   
    }
}