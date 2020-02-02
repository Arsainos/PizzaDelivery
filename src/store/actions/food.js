import * as actionTypes from './actionTypes.js';
import {foodStore} from '../constants/foodStore.js';

export const setFood = (food) => {
    return {
        type: actionTypes.SET_FOOD,
        food: food
    }
}

export const foodFetchStart = () => {
    return {
        type: actionTypes.START_FOOD_FETCH
    };
};

export const fetchFoodFailed = () => {
    return {
        type: actionTypes.SET_FOOD_FAILED
    };
};

export const initFood = () => {
    // for now emulate DB fetching
    return dispatch => {
        dispatch(foodFetchStart());

        setTimeout(()=>dispatch(setFood(foodStore)),5000);
    }
};