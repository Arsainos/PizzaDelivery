import * as actionTypes from './actionTypes.js';
import {promotionsStore} from '../constants/promotionsStore.js';

export const setPromotions = (promotions) => {
    return {
        type: actionTypes.SET_PROMOTIONS,
        promotions: promotions
    }
}

export const promotionFetchStart = () => {
    return {
        type: actionTypes.START_PROMOTIONS_FETCH
    }
}

export const promotionFetchFailed = () => {
    return {
        type: actionTypes.SET_PROMOTIONS_FAILED
    }
}

export const initPromotions = () => {
    // for now emulate DB fetch
    return dispatch => {
        dispatch(promotionFetchStart());

        setTimeout(()=>dispatch(setPromotions(promotionsStore)), 2000);
    }
}