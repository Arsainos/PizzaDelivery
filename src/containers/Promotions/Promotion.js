import React, {Component} from 'react';

// import components
import GridFood from '../../components/FoodGrid/FoodGrid.js';
import PromoCard from '../../components/UI/Cards/PromoCard/PromoCard.js';
import Spinner from '../../components/UI/Spinner/Spinner.js';

// import hocs
import AUX from '../../hocs/Axuliary.js';

// import helpers and utilities
import {generateCardsData} from '../../utils/helpres.js';

// import redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/promotions.js';

class Promotions extends Component {
    componentDidMount() {
        this.props.onPromotionsInit();
    }
    
    render() {
        let promoPage = this.props.error ? <p>Sorry, can not load this page!</p> : <Spinner />;

        if(this.props.promoArray) {
            promoPage = (
                <AUX>
                    <GridFood 
                        id={'promotions'}
                        title={'Promotions'}
                        data={generateCardsData(this.props.promoArray, PromoCard, null)}
                        elementsInRow={3}
                    />
                </AUX>
            )
        }

        return (
            <AUX>
                {promoPage}
            </AUX>          
        );
    }
};

const mapStateToProps = state => {
    return {
        promoArray: state.promotion.promotions,
        error: state.promotion.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPromotionsInit: () => dispatch(actions.initPromotions())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Promotions);