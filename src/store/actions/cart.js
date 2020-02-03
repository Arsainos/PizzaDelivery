import * as actionTypes from './actionTypes.js';

const addItemToCart = (item) => {
    return {
        type: actionTypes.ADD_ITEM_TO_CART,
        item: item
    };
};

const removeItemFromCart = (item) => {
    return {
        type: actionTypes.REMOVE_ITEM_FROM_CART,
        item: item
    };
};

const deleteItemFromCart = (item) => {
    return {
        type: actionTypes.DELETE_ITEM_FROM_CART,
        item: item
    }
}

export const onAddItemToCart = (item) => {
    return dispatch => {
        dispatch(addItemToCart(item));
    }
}

export const onRemoveItemFromCart = (item) => {
    return dispatch => {
        dispatch(removeItemFromCart(item));
    }
}

export const onDeleteItemFromCart = (item) => {
    return dispatch => {
        dispatch(deleteItemFromCart(item));
    }
}