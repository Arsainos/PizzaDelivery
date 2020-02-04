import React from 'react';

// import components
import Card from '../components/UI/Cards/Card/Card.js';
import PromoCard from '../components/UI/Cards/PromoCard/PromoCard.js';
import CardOrder from '../components/UI/Cards/CardOrder/CardOrder.js';
import BundleOrder from '../components/UI/Cards/BundleOrder/BundleOrder.js';

export const generateCardsData = (inputs, cardType, handler, aditionalData) => {
    switch(cardType) {
        case Card:
            return inputs.map((it, i) => {
                let itemList = [];
                let price = 0;

                if(it.list && aditionalData) {
                    aditionalData
                        .filter((data) => Array.from(it.list)
                            .includes(data.name))
                                .forEach((it)=>{
                                    itemList.push(it);
                                    price = price + Number.parseFloat(it.price);
                                })
                }

                return <Card
                    key={Math.random()*(i+1)}
                    imageSrc={it.imageSrc}
                    alt={it.imageAlt}
                    name={it.name}
                    description={it.description}
                    price={it.price ? it.price : price}
                    discount={it.discount}
                    clicked={handler}
                    list={itemList.length > 0 ? itemList : null}
                />
            });

        case PromoCard:
            return inputs.map((it, i) => {
                return <PromoCard
                    key={Math.random() + '_' + (i+1)}
                    title={it.title}
                    description={it.description}
                    imageSrc={it.imageSrc}
                    imageAlt={it.imageAlt}
                />
            });

        case CardOrder:
            return inputs.map((it, i) => {
                return <CardOrder
                key={Math.random()+'_'+(i+1)}
                imageSrc={it.imageSrc}
                alt={it.imageAlt}
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
                imageSrc={it.imageSrc}
                alt={it.imageAlt}
                name={it.name}
                description={it.description}
                list={it.list}
                continueClick={handler}
                price={it.price}
                discount={it.discount}
                />
            });

        default:
            return [];   
    }
}

export const updateObject  = (oldObject, updateProperties) => {
    return {
        ...oldObject,
        ...updateProperties
    };
};