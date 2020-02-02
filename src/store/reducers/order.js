import * as actionTypes from '../actions/actionTypes.js';

const initialState = {
    orders: [],
    error: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer;