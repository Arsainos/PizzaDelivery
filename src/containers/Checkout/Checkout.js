import React, { Component } from 'react';

// import hocs
import AUX from '../../hocs/Axuliary.js';

// import components
import Cart from '../../components/Cart/Cart.js';
import Spinner from '../../components/UI/Spinner/Spinner.js';

// import redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/cart.js';
import * as orderActions from '../../store/actions/order.js';

class Checkout extends Component {
    onPurchase = (eventData) => {
        let orders = [];

        eventData.order.forEach((value, key, map) => {
            orders.push(
                {
                    ...key,
                    count: value
                }
            )
        });

        this.props.onTryPurchaseOrder({order: orders, userId: this.props.userId, totalPrice: eventData.totalPrice, orderData: eventData.orderData}, this.props.token);
        this.props.onClearCart();
    }
    
    render() {
        let cartPage = this.props.error ? <p>Sorry, we can not load this page!</p> : <Spinner />
        
        if(this.props.cart) {
            cartPage = (
                <Cart 
                    list={this.props.cart}
                    onIncrement={this.props.onAddItemToCart}
                    onDecrement={this.props.onRemoveItemFromCart}
                    onDelete={this.props.onDeleteItemFromCart}
                    onOrder={this.props.onClearCart}
                    onPurchase={this.onPurchase}
                />
            )
        }

        return (
            <AUX>
                {cartPage}
            </AUX>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
        error: state.cart.error,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItemToCart: (item) => dispatch(actions.onAddItemToCart(item)),
        onRemoveItemFromCart: (item) => dispatch(actions.onRemoveItemFromCart(item)),
        onDeleteItemFromCart: (item) => dispatch(actions.onDeleteItemFromCart(item)),
        onClearCart: () => dispatch(actions.onClearCart()),
        onTryPurchaseOrder: (orderData, token) => dispatch(orderActions.onPurchaseOrder(orderData, token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);