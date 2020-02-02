import * as actionTypes from '../actions/actionTypes.js';
import {updateObject} from '../../utils/helpres.js';
import lang from 'lodash/lang';

const initialState = {
    cart: new Map(),
    error: false
}

const addItemToCart = (state, action) => {
    const updateMap = new Map(state.cart);
    let searchKey = null;

    [...updateMap.keys()].forEach((key) => {
        if(lang.isEqual(key,action.item)) {
            searchKey = key;
        }
    });

    if(searchKey) {
        const mapValue = updateMap.get(searchKey);
        const updatedValue = mapValue + 1;
        updateMap.set(searchKey, updatedValue);
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
    let searchKey = false;
    
    updateMap.keys().forEach((key) => {
        if(lang.isEqual(key,action.item)) {
            searchKey = key;
        }
    })

    if(searchKey) {
        const searchValue = updateMap.get(searchKey);
        if(searchValue > 1) {
            updateMap.set(searchKey, searchValue - 1);
        } else {
            updateMap.delete(searchKey);
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