import React, {useState} from 'react';

// import hocs 
import AUX from '../../hocs/Axuliary.js';

// import components
import Carousel from '../../components/UI/Carousel/Carousel.js';
import FoodGrid from '../../components/FoodGrid/FoodGrid.js';
import Modal from '../../components/UI/Modal/Modal.js';
import Card from '../../components/UI/Cards/Card/Card.js';
import CardOrder from '../../components/UI/Cards/CardOrder/CardOrder.js';
import BundleOrder from '../../components/UI/Cards/BundleOrder/BundleOrder.js';

// import helpers and utilities
import {generateCardsData} from '../../utils/helpres.js';

// import images
import carousel1 from '../../assets/Carousel/carousel1.jpg';
import carousel2 from '../../assets/Carousel/carousel2.jpg';
import carousel3 from '../../assets/Carousel/carousel3.jpg';

const MainPage = (props) => {
    const [mainPageState, updateMainPageState] = useState({purchasing: false, purchasingItem: null});
    
    const purchaseHandler = (currentCard) => {
        console.log(currentCard);
        
        updateMainPageState({purchasing: true, purchasingItem: generateCardsData([currentCard], CardOrder, purchaseContinueHandler)});
    };

    const purchaseBundleHandler = (currentCard) => {
        console.log(currentCard);

        updateMainPageState({purchasing: true, purchasingItem: generateCardsData([currentCard], BundleOrder, purchaseContinueHandler)});
    }

    const purchaseCancelHandler = () => {
        updateMainPageState({purchasing: false, purchasingItem: null});
    };

    const purchaseContinueHandler = (...data) => {
        console.log(data);
        updateMainPageState({purchasing: false, purchasingItem: null});
    };

    const pizzas = [
        {imageSrc:'', imageAlt:`pizza`, name:`Margaritta`, description:`Proident pariatur commodo culpa reprehenderit.`, price:10}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`Veniam enim aliquip velit dolore fugiat.`, price:15, }
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`Aute excepteur tempor eu culpa consequat culpa mollit pariatur ut nostrud id duis magna.`, price:12, }
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`Laboris consectetur anim dolor voluptate mollit esse.`, price:13, }
        ,{imageSrc:'', imageAlt:`pizza`, name:`Four seasons`, description:`Ex sint anim nisi minim cupidatat duis.`, price:11, }
    ];

    const bundles = [
        {imageSrc:'', imageAlt:`pizza`, name:`High Five`, list:pizzas, description:`Sint voluptate sit do in mollit fugiat veniam et laboris voluptate aute nisi occaecat.`, }
        ,{imageSrc:'', imageAlt:`pizza`, name:`Longwave`, list:[pizzas[0],pizzas[2], pizzas[4]], description:`Ipsum nulla tempor nostrud aliqua.`, }
        ,{imageSrc:'', imageAlt:`pizza`, name:`ShortWave`, list:[pizzas[0], pizzas[1]], description:`Occaecat esse ullamco minim eu do adipisicing veniam commodo id.`, }
        ];

    const altfood = [
        {imageSrc:'', imageAlt:`pizza`, name:`Pizza 1`, description:`Peperroni`, price:`10`, }
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`, }
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`, }
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`, }
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`, }
    ];

    return(
        <AUX>
            <Modal show={mainPageState.purchasing} modalClosed={purchaseCancelHandler}>
                {mainPageState.purchasingItem}
            </Modal>
            <div>
                <Carousel>
                    <div><img src={carousel1} alt="carousel yamu pizza"></img></div>
                    <div><img src={carousel2} alt="carousel yamu pizza"></img></div>
                    <div><img src={carousel3} alt="carousel yamu pizza"></img></div>
                </Carousel>
            </div>
            <FoodGrid 
                id='pizzas'
                title='Pizza'
                data={generateCardsData(pizzas, Card, purchaseHandler)}
                elementsInRow={4}
            />
            <FoodGrid 
                id='bundles'
                title='Bundles'
                data={generateCardsData(bundles, Card, purchaseBundleHandler)}
                elementsInRow={4}
            />
            <FoodGrid 
                id='altfood'
                title='AltFood'
                data={generateCardsData(altfood, Card, purchaseContinueHandler)}
                elementsInRow={4}
            />
        </AUX>
    );
};

export default MainPage;

