import React from 'react';

// import components
import GridFood from '../../components/FoodGrid/FoodGrid.js';
import PromoCard from '../../components/UI/Cards/PromoCard/PromoCard.js';

// import helpers and utilities
import {generateCardsData} from '../../utils/helpres.js';

const Promotions = (props) => {
    const promoArray = [
        {title: '2x2 Coca-cola', description: 'Nulla enim consequat nostrud esse ea ipsum sint reprehenderit consectetur duis consequat irure nostrud. Sint minim consectetur mollit fugiat pariatur minim est nisi ex reprehenderit sit velit. Consectetur reprehenderit mollit est aliqua in aliquip enim magna. Proident laboris cillum adipisicing cillum ea consequat ullamco esse. Labore anim quis amet proident occaecat veniam occaecat cupidatat cupidatat. Dolore qui Lorem cupidatat enim amet dolor ipsum mollit exercitation.', imageSrc:''},
        {title: 'Special price for bundles!', description:'Veniam aliqua labore amet duis excepteur reprehenderit quis occaecat. Excepteur mollit et amet voluptate exercitation aute dolor dolor consectetur cillum incididunt quis enim. Sint velit excepteur quis anim minim enim et incididunt.', imageSrc:''},
        {title: 'Night watch', description:'Nisi excepteur enim ea eiusmod reprehenderit ea nisi ex officia occaecat reprehenderit eiusmod velit sint. Id proident aute in veniam pariatur. Duis pariatur adipisicing tempor ipsum veniam consectetur velit duis. Est ad tempor sunt cillum nostrud nulla proident ipsum consectetur proident ipsum dolor. Laboris cillum labore dolor cillum aliquip eu aliquip voluptate qui.'},
    ];
    
    return (
        <GridFood 
            id={'promotions'}
            title={'Promotions'}
            data={generateCardsData(promoArray, PromoCard, null)}
            elementsInRow={3}
        />
    );
};

export default Promotions;