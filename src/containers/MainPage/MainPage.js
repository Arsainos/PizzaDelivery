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
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

// import helpers and utilities
import {generateCardsData} from '../../utils/helpres.js';
import PageSection from '../../utils/pageSection.js';

// import redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/food.js';
import * as cartActions from '../../store/actions/cart.js';

// import images
import carousel1 from '../../assets/Carousel/carousel1.jpg';
import carousel2 from '../../assets/Carousel/carousel2.jpg';
import carousel3 from '../../assets/Carousel/carousel3.jpg';

//import styles
import ModalClasses from '../../components/UI/Modal/Modal.module.css';
import spinnerClasses from '../../components/UI/Spinner/Spinner.module.css';

class MainPage extends Component {
    state = {
        purchasing: false,
        purchasingItem: null
    }

    componentDidMount() {
        configureAnchors({offset: -60, scrollDuration: 300});
        this.props.onInitFood();  
    }

    purchaseHandler = (currentCard) => { 
        this.setState({purchasing: true, purchasingItem: generateCardsData([currentCard], CardOrder, this.purchaseContinueHandler)});
    };

    purchaseBundleHandler = (currentCard) => {
        this.setState({purchasing: true, purchasingItem: generateCardsData([currentCard], BundleOrder, this.purchaseContinueHandler)});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false, purchasingItem: null});
    };

    purchaseContinueHandler = (data) => {
        this.setState({purchasing: false, purchasingItem: null});

        this.props.onAddFoodToCart(
            {
                name: data.name, 
                description:data.description, 
                price: data.price, 
                additions: data.additions,
                summary: data.summary,
                list: data.list,
                imageSrc: data.imageSrc
            });
    };

    render() {
        let mainPage = this.props.error ? <p>Sorry, page can not be loaded!</p> : <Spinner spinnerClass={spinnerClasses.LoaderMain} />

        if(this.props.pizzas) {
            mainPage = (
                <AUX>
                    <ScrollableAnchor id={'section_pizzas'} key={'section_pizzas'}>
                        <PageSection content={
                            <FoodGrid 
                                id='pizzas'
                                title='Pizza'
                                data={generateCardsData(this.props.pizzas, Card, this.purchaseHandler)}
                                elementsInRow={4}
                            />
                        }/>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'section_bundles'} key={'section_bundles'}>
                        <PageSection content={
                            <FoodGrid 
                                id='bundles'
                                title='Bundles'
                                data={generateCardsData(this.props.bundles, Card, this.purchaseBundleHandler, this.props.pizzas)}
                                elementsInRow={4}
                            />
                        }/>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'section_altfoods'} key={'section_altfoods'}>
                        <PageSection content={
                            <FoodGrid 
                                id='altfood'
                                title='AltFood'
                                data={generateCardsData(this.props.altFoods, Card, this.purchaseContinueHandler)}
                                elementsInRow={4}
                            />
                        }/>
                    </ScrollableAnchor>
                    
                    <ScrollableAnchor id={'section_drinks'} key={'section_drinks'}>
                        <PageSection content={
                            <FoodGrid
                                id='drinks'
                                title='Drinks'
                                data={generateCardsData(this.props.drinks, Card, this.purchaseContinueHandler)}
                                elementsInRow={4}
                            />
                        } />
                    </ScrollableAnchor>
                </AUX>
            )
        }

        return(
            <AUX>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} modalClass={ModalClasses.ModalCard}>
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
        onInitFood: () => dispatch(actions.initFood()),
        onAddFoodToCart: (item) => dispatch(cartActions.onAddItemToCart(item))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);

