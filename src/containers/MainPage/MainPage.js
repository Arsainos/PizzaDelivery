import React, {useState} from 'react';


// import styles
import classes from './MainPage.module.css';

// import hocs 
import AUX from '../../hocs/Axuliary.js';

// import components
import Carousel from '../../components/UI/Carousel/Carousel.js';
import FoodGrid from '../../components/FoodGrid/FoodGrid.js';
import Modal from '../../components/UI/Modal/Modal.js';
import Card from '../../components/UI/Cards/Card/Card.js.js';

// import images
import carousel1 from '../../assets/Carousel/carousel1.jpg';
import carousel2 from '../../assets/Carousel/carousel2.jpg';
import carousel3 from '../../assets/Carousel/carousel3.jpg';

const MainPage = (props) => {
    const [mainPageState, updateMainPageState] = useState({purchasing: false, purchasingItem: null});
    
    const purchaseHandler = (currentCard) => {
        console.log(currentCard);
        updateMainPageState({purchasing: true});
    };

    const purchaseCancelHandler = () => {
        updateMainPageState({purchasing: false, purchasingItem: null});
    };

    const generateCardsData = (inputs, cardType, handler) => {
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

            default:
                return [];
        }
    };


    const pizzas = [
        {imageSrc:'', imageAlt:`pizza`, name:`Pizza 1`, description:`Peperroni`, price:`10`, clicked: purchaseHandler}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`, clicked: purchaseHandler}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`, clicked: purchaseHandler}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`, clicked: purchaseHandler}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`, clicked: purchaseHandler}
    ];

    const bundles = [
        {imageSrc:'', imageAlt:`pizza`, name:`Pizza 1`, description:`Peperroni`, price:`10`, clicked: purchaseHandler}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`, clicked: purchaseHandler}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`, clicked: purchaseHandler}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`, clicked: purchaseHandler}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`, clicked: purchaseHandler}
    ];

    const altfood = [
        {imageSrc:'', imageAlt:`pizza`, name:`Pizza 1`, description:`Peperroni`, price:`10`, clicked: purchaseHandler}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`, clicked: purchaseHandler}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`, clicked: purchaseHandler}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`, clicked: purchaseHandler}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`, clicked: purchaseHandler}
    ];

    const pizzasCards = generateCardsData(pizzas, Card, purchaseHandler);
    const bundlesCards = generateCardsData(bundles, Card, purchaseHandler);
    const altFoodCards = generateCardsData(altfood, Card, purchaseHandler);

    return(
        <AUX>
            <Modal show={mainPageState.purchasing} modalClosed={purchaseCancelHandler}>
                <div><h1>Order State</h1></div>
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
                data={pizzasCards}
                elementsInRow={4}
            />
            <FoodGrid 
                id='bundles'
                title='Bundles'
                data={bundlesCards}
                elementsInRow={4}
            />
            <FoodGrid 
                id='altfood'
                title='AltFood'
                data={altFoodCards}
                elementsInRow={4}
            />
        </AUX>
    );
};

export default MainPage;

