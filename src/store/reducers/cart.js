import * as actionTypes from '../actions/actionTypes.js';
import {updateObject} from '../../utils/helpres.js';

const initialState = {
    cart: new Map(),
    error: false
}

const addItemToCart = (state, action) => {
    const updateMap = new Map(state.cart);
    
    if(updateMap.has(action.item)) {
        const updatedValue = updateMap.get(action.item) + 1;
        updateMap.set(action.item, updatedValue);
    } else {
        updateMap.set(action.item, 1);
    }

    return updateObject(state,{
        cart: updateMap,
        error:false
    });
}

const removeItemFromCart = (state, action) => {
    const updateMap = new Map(state.cart);

    if(updateMap.has(action.item)) {
        const searchValue = updateMap.get(action.item);
        if(searchValue > 1) {
            updateMap.set(action.item, searchValue - 1);
        } else {
            updateMap.delete(action.item);
        }
    }

    return updateObject(state, {
        cart:updateMap,
        error: false
    })
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ITEM_TO_CART:
            return  addItemToCart(state, action);

        case actionTypes.REMOVE_ITEM_FROM_CART:
            return removeItemFromCart(state, action);

        default:
            return state;
    }
}

export default reducer;