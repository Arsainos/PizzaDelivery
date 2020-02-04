import * as actionTypes from '../actions/actionTypes.js';
import { updateObject } from '../../utils/helpres.js';

const initialState = {
    promotions: null,
    error: false
}

const setPromotion = (state, action) => {
    return updateObject(state, {
        promotions: action.promotions,
        error: false
    });
};

const setPromotionsFetchFailed = (state, action) => {
    return updateObject(state, {error:true});
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_PROMOTIONS:
            return setPromotion(state, action);

        case actionTypes.SET_PROMOTIONS_FAILED:
            return setPromotionsFetchFailed(state, action);

        default:
            return state;
    }
}

export default reducer;