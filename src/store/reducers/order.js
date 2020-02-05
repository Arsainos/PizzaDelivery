import * as actionTypes from '../actions/actionTypes.js';
import { updateObject } from '../../utils/helpres.js';


const initialState = {
    orders: [],
    error: null,
    isError: false,
    loading: false,
    purchased: false
}

const purchaseOrderStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        purchased: false,
        isError: false,
        error: null
    })
}

const purchaseOrderSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});

    return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    });
}

const purchaseOrderFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        purchased: false,
        isError: true,
        error: action.error
    })
}

const fetchOrderStart = (state, action) => {
    return updateObject(state,
        {
            loading:true,
            purchased: false,
            isError: false,
            error: null
        })
}

const fetchOrderSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading:false,
        isError:false,
        error: null, 
        purchased: false
    })
}

const fetchOrderFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        isError: true,
        purchased: false,
        error: action.error
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_ORDER_START:
            return purchaseOrderStart(state, action);

        case actionTypes.PURCHASE_ORDER_SUCCESS:
            return purchaseOrderSuccess(state, action);

        case actionTypes.PURCHASE_ORDER_FAIL:
            return purchaseOrderFail(state, action);

        case actionTypes.FETCH_ORDERS_START:
            return fetchOrderStart(state, action);

        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrderSuccess(state, action);

        case actionTypes.FETCH_ORDERS_FAIL:
            return fetchOrderFail(state, action);

        default:
            return state;
    }
}

export default reducer;