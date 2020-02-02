import React, {Component} from 'react';

// import hocs 
import AUX from '../../hocs/Axuliary.js';

// import components
import Carousel from '../../components/UI/Carousel/Carousel.js';
import FoodGrid from '../../components/FoodGrid/FoodGrid.js';
import Modal from '../../components/UI/Modal/Modal.js';
import Card from '../../components/UI/Cards/Card/Card.js';
import CardOrder from '../../components/UI/Cards/CardOrder/CardOrder.js';
import BundleOrder from '../../components/UI/Cards/BundleOrder/BundleOrder.js';
import Spinner from '../../components/UI/Spinner/Spinner.js';

// import helpers and utilities
import {generateCardsData} from '../../utils/helpres.js';

// import redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/foodReducer.js';

// import images
import carousel1 from '../../assets/Carousel/carousel1.jpg';
import carousel2 from '../../assets/Carousel/carousel2.jpg';
import carousel3 from '../../assets/Carousel/carousel3.jpg';

class MainPage extends Component {
    state = {
        purchasing: false,
        purchasingItem: null
    }

    componentDidMount() {
        this.props.onInitFood();
    }

    purchaseHandler = (currentCard) => {
        console.log(currentCard);
        
        this.setState({purchasing: true, purchasingItem: generateCardsData([currentCard], CardOrder, this.purchaseContinueHandler)});
    };

    purchaseBundleHandler = (currentCard) => {
        console.log(currentCard);

        this.setState({purchasing: true, purchasingItem: generateCardsData([currentCard], BundleOrder, this.purchaseContinueHandler)});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false, purchasingItem: null});
    };

    purchaseContinueHandler = (...data) => {
        console.log(data);
        this.setState({purchasing: false, purchasingItem: null});
    };

    render() {
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

        let mainPage = this.props.error ? <p>Sorry, page can not be loaded!</p> : <Spinner />

        if(this.props.pizzas) {
            mainPage = (
                <AUX>
                    <FoodGrid 
                        id='pizzas'
                        title='Pizza'
                        data={generateCardsData(this.props.pizzas, Card, this.purchaseHandler)}
                        elementsInRow={4}
                    />
                    <FoodGrid 
                        id='bundles'
                        title='Bundles'
                        data={generateCardsData(bundles, Card,this.purchaseBundleHandler)}
                        elementsInRow={4}
                    />
                    <FoodGrid 
                        id='altfood'
                        title='AltFood'
                        data={generateCardsData(this.props.altFoods, Card, this.purchaseContinueHandler)}
                        elementsInRow={4}
                    />
                </AUX>
            )
        }

        return(
            <AUX>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {this.state.purchasingItem}
                </Modal>
                <div>
                    <Carousel>
                        <div><img src={carousel1} alt="carousel yamu pizza"></img></div>
                        <div><img src={carousel2} alt="carousel yamu pizza"></img></div>
                        <div><img src={carousel3} alt="carousel yamu pizza"></img></div>
                    </Carousel>
                </div>
                {mainPage}
            </AUX>
        );
    }
};

const mapStateToProps = state => {
    return {
        pizzas: state.food.pizzas,
        bundles: state.food.bundles,
        altFoods: state.food.altFoods,
        drinks: state.food.drinks,
        error: state.food.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitFood: () => dispatch(actions.initFood())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);

