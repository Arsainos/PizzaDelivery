import * as actionTypes from './actionTypes.js';
import foodStore from '../constants/foodStore.js';

export const setFood = (food) => {
    return {
        type: actionTypes.SET_FOOD,
        food: food
    }
}

export const fetchFoodFailed = () => {
    return {
        type: actionTypes.SET_FOOD_FAILED
    };
};

export const initFood = () => {
    // for now emulate DB fetching
    setTimeout((dispatch) => {
        dispatch(setFood(foodStore));
    },5000);
};