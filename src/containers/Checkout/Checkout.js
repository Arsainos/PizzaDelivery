import React, { Component } from 'react';

// import hocs
import AUX from '../../hocs/Axuliary.js';

// import components
import Cart from '../../components/Cart/Cart.js';
import Spinner from '../../components/UI/Spinner/Spinner.js';

// import redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/cart.js';

class Checkout extends Component {
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
        error: state.cart.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItemToCart: (item) => dispatch(actions.onAddItemToCart(item)),
        onRemoveItemFromCart: (item) => dispatch(actions.onRemoveItemFromCart(item)),
        onDeleteItemFromCart: (item) => dispatch(actions.onDeleteItemFromCart(item)),
        onClearCart: () => dispatch(actions.onClearCart())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);