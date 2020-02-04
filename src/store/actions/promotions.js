import * as actionTypes from './actionTypes.js';
import axios from '../../axios-orders.js';

const setPromotions = (promotions) => {
    return {
        type: actionTypes.SET_PROMOTIONS,
        promotions: promotions
    }
}

const promotionFetchStart = () => {
    return {
        type: actionTypes.START_PROMOTIONS_FETCH
    }
}

const promotionFetchFailed = () => {
    return {
        type: actionTypes.SET_PROMOTIONS_FAILED
    }
}

export const initPromotions = () => {
    return dispatch => {
        dispatch(promotionFetchStart());

        axios.get('https://pizza-delivery-65076.firebaseio.com/promotion.json')
        .then(response => {
            dispatch(setPromotions(response.data));
        })
        .catch(error => {
            dispatch(promotionFetchFailed());
        })
    }
}