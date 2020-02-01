import React, {useState} from 'react';


// import styles
import classes from './MainPage.module.css';

// import hocs 
import AUX from '../../hocs/Axuliary.js';

// import components
import Carousel from '../../components/UI/Carousel/Carousel.js';
import FoodGrid from '../../components/FoodGrid/FoodGrid.js';
import Modal from '../../components/UI/Modal/Modal.js';

// import images
import carousel1 from '../../assets/Carousel/carousel1.jpg';
import carousel2 from '../../assets/Carousel/carousel2.jpg';
import carousel3 from '../../assets/Carousel/carousel3.jpg';

const MainPage = (props) => {
    const [mainPageState, updateMainPageState] = useState({purchasing: true});
    
    const purchaseHandler = () => {
        console.log(`updating`);
        updateMainPageState({purchasing: true});
    };

    const purchaseCancelHandler = () => {
        updateMainPageState({purchasing: false});
    };


    const pizzas = [
        {imageSrc:'', imageAlt:`pizza`, name:`Pizza 1`, description:`Peperroni`, price:`10`}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`}
    ];

    const bundles = [
        {imageSrc:'', imageAlt:`pizza`, name:`Pizza 1`, description:`Peperroni`, price:`10`}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`}
    ];

    const altfood = [
        {imageSrc:'', imageAlt:`pizza`, name:`Pizza 1`, description:`Peperroni`, price:`10`}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Proshuto`, description:`with onions`, price:`15`}
        ,{imageSrc:'', imageAlt:`pizza`, name:`Fungi`, description:`eat more fungi`, price:`12`}
    ];


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
                cards={pizzas}
                elementsInRow={4}
            />
            <FoodGrid 
                id='bundles'
                title='Bundles'
                cards={bundles}
                elementsInRow={4}
            />
            <FoodGrid 
                id='altfood'
                title='AltFood'
                cards={altfood}
                elementsInRow={4}
            />
        </AUX>
    );
};

export default MainPage;

