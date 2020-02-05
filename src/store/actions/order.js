import * as actionTypes from './actionTypes.js';
import axios from '../../axios-orders.js';

const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const onFetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
        axios.get('/orders.json'+queryParams)
        .then(response => {
            const orders = [];
            for(let key in response.data) {
                orders.push({
                    ...response.data[key],
                    id: key
                });
            }
            dispatch(fetchOrdersSuccess(orders));
        })
        .catch(error => {
            dispatch(fetchOrdersFail(error.response.data.error));
        })

    }
}

const purchaseOrderSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_ORDER_SUCCESS,
        orderId: id,
        orderdata: orderData
    }
}

const purchaseOrderFail = (error) => {
    return {
        type: actionTypes.PURCHASE_ORDER_FAIL,
        error: error
    }
}

const purchaseOrderStart = () => {
    return {
        type: actionTypes.PURCHASE_ORDER_START
    }
}

export const onPurchaseOrder = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseOrderStart());

        axios.post('/orders.json?auth'+token, orderData)
        .then(response => {
            dispatch(purchaseOrderSuccess(response.data.name,orderData));
        })
        .catch(error => {
            dispatch(error.response.data.error);
        })
    }
}