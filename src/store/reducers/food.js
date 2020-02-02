import * as actionTypes from '../actions/actionTypes.js';
import { updateObject } from '../../utils/helpres.js';

const initialState = {
    pizzas: null,
    bundles: null,
    altFoods: null,
    drinks: null,
    error: false
};



const setFood = (state, action) => {
    return updateObject(state, {
        pizzas: action.food.pizzas,
        bundles: action.food.bundles,
        altFoods: action.food.altFoods,
        drinks: action.food.drinks,
        error: false
    });
};

const fetchFoodFailed = (state, action) => {
    return updateObject(state, {error:true});
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_FOOD:
            return setFood(state, action);

        case actionTypes.SET_FOOD_FAILED:
            return fetchFoodFailed(state, action);

        default:
            return state;
    }
};

export default reducer;