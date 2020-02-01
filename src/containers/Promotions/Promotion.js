import React from 'react';

// import components
import GridFood from '../../components/FoodGrid/FoodGrid.js';
import PromoCard from '../../components/UI/Cards/PromoCard/PromoCard.js';

const Promotions = (props) => {
    const promoArray = [
        {title: '2x2 Coca-cola', description: 'Veniam dolore ullamco cupidatat elit sint Lorem deserunt mollit non ipsum qui anim adipisicing. Commodo tempor magna velit est dolor incididunt velit deserunt veniam esse. Sint adipisicing nostrud ipsum fugiat do id deserunt velit amet dolor est cupidatat sit veniam.', imageSrc:''},
        {title: 'Special price for bundles!', description:'Veniam aliqua labore amet duis excepteur reprehenderit quis occaecat. Excepteur mollit et amet voluptate exercitation aute dolor dolor consectetur cillum incididunt quis enim. Sint velit excepteur quis anim minim enim et incididunt.', imageSrc:''},
        {title: 'Night watch', description:'Nisi excepteur enim ea eiusmod reprehenderit ea nisi ex officia occaecat reprehenderit eiusmod velit sint. Id proident aute in veniam pariatur. Duis pariatur adipisicing tempor ipsum veniam consectetur velit duis. Est ad tempor sunt cillum nostrud nulla proident ipsum consectetur proident ipsum dolor. Laboris cillum labore dolor cillum aliquip eu aliquip voluptate qui.'},
    ]
    
    let promoCards = promoArray.map((it, i) => {
        return <PromoCard
            key={Math.random() + '_' + (i+1)}
            title={it.title}
            description={it.description}
            imageSrc={''}
        />
    });
    
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