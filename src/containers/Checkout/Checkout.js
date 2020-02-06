import React, { Component } from 'react';

// import hocs
import AUX from '../../hocs/Axuliary.js';

// import components
import Cart from '../../components/Cart/Cart.js';
import Spinner from '../../components/UI/Spinner/Spinner.js';
import Modal from '../../components/UI/Modal/Modal.js';
import Auth from '../../components/Auth/Auth.js';
import OrderData from '../../components/OrderData/OrderData.js';

// import redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/cart.js';
import * as orderActions from '../../store/actions/order.js';
import * as authActions from '../../store/actions/auth.js';

// import styles
import spinnerClasses from '../../components/UI/Spinner/Spinner.module.css';
import ModalClasses from '../../components/UI/Modal/Modal.module.css';

class Checkout extends Component {
    state = {
        processing: false,
        isAuthRequired: false,
        orders: null,
        totalPrice: 0,
        orderData: null
    }
    
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

        this.setState({processing:true, orders: orders, totalPrice: eventData.totalPrice});
    }

    onSubmitHandler = (event, email, password, isSignUp) => {
        event.preventDefault();
        this.props.onAuth(email, password, isSignUp);
    }

    onSubmitHandlerOrder = (event, address, phone, commentary) => {
        event.preventDefault();

        const orderData = {
            phone: phone,
            address: address,
            commentary: commentary
        };

        if(this.props.isAuthenticated) {
            this.props.onTryPurchaseOrder({
                order: this.state.orders, 
                userId: this.props.userId, 
                totalPrice: this.state.totalPrice, 
                orderData:orderData }, 
                this.props.token);

            this.props.onClearCart();

            this.setState({processing:false, orders : null, totalPrice: 0, orderData: null, isAuthRequired: false});

            this.props.history.push('/orders');
        } else {
            this.setState({processing:false, isAuthRequired:true, orderData: orderData});
        }   
    }

    componentDidUpdate(prevProps) {
        if(this.props.isAuthenticated !== prevProps.isAuthenticated) {
            this.props.onTryPurchaseOrder({
                order: this.state.orders, 
                userId: this.props.userId, 
                totalPrice: this.state.totalPrice, 
                orderData:this.state.orderData }, 
                this.props.token);

            this.props.onClearCart();

            this.setState({processing:false, orders : null, totalPrice: 0, orderData: null, isAuthRequired: false});

            this.props.history.push('/orders');
        }
    }
    
    render() {
        let cartPage = this.props.error ? <p>Sorry, we can not load this page!</p> : <Spinner spinnerClass={spinnerClasses.LoaderMain} />
        
        let ModalContent = null;

        if(this.state.processing) {
            ModalContent = 
            <Modal show={this.state.processing} modalClass={ModalClasses.ModalCard}>
                <OrderData
                    onSubmitForm={this.onSubmitHandlerOrder}
                />
            </Modal>           
        } else {
            if(this.state.isAuthRequired) {
                ModalContent = 
                <Modal show={this.state.isAuthRequired} modalClass={ModalClasses.ModalAuth}>
                    <Auth 
                        loading={this.props.isAuthLoading}
                        onSubmitForm={this.onSubmitHandler}
                        error={this.props.isAuthErrorInfo}
                        isError={this.props.isAuthErrorOccured}
                    />
                </Modal>  
            }
        }
        
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
                {ModalContent}
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
        userId: state.auth.userId,
        isAuthenticated: state.auth.token !== null,
        isAuthLoading: state.auth.loading,
        isAuthErrorInfo: state.auth.error,
        isAuthErrorOccured: state.auth.isError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItemToCart: (item) => dispatch(actions.onAddItemToCart(item)),
        onRemoveItemFromCart: (item) => dispatch(actions.onRemoveItemFromCart(item)),
        onDeleteItemFromCart: (item) => dispatch(actions.onDeleteItemFromCart(item)),
        onClearCart: () => dispatch(actions.onClearCart()),
        onTryPurchaseOrder: (orderData, token) => dispatch(orderActions.onPurchaseOrder(orderData, token)),
        onAuth: (email, password, isSingup) => dispatch(authActions.onUserAuth(email, password, isSingup)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);