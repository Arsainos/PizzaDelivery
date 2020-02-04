import * as actionTypes from './actionTypes.js';
import axios from '../../axios-orders.js';

const setFood = (food) => {
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
    return dispatch => {
        dispatch(foodFetchStart());

        axios.get('https://pizza-delivery-65076.firebaseio.com/food.json')
        .then(response => {
            dispatch(setFood(response.data))
        })
        .catch(error => {
            dispatch(fetchFoodFailed());
        })
    }
};