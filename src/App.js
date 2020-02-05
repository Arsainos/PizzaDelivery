import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import styles
import classes from './App.module.css';

// import components
import Layout from './components/Layout/Layout.js';
import Modal from './components/UI/Modal/Modal.js';
import Auth from './components/Auth/Auth.js';

// import hocs
import asyncComponent from './hocs/asyncComponent/asyncComponent.js';

// import redux
import { connect } from 'react-redux';
import * as actions from './store/actions/auth.js';

// import async containers
const asyncMainPage = asyncComponent(() => {
  return import ('./containers/MainPage/MainPage.js');
});

const asyncPromotionsPage = asyncComponent(() => {
  return import ('./containers/Promotions/Promotion.js');
})

const asyncCheckoutPage = asyncComponent(() => {
  return import ('./containers/Checkout/Checkout.js');
})

const asyncOrdersPage = asyncComponent(() => {
  return import ('./containers/Orders/Orders.js');
})

class App extends Component  {
  state = {
    isLoginProcessing:false
  }
  
  onLoginHandler = () => {
    console.log('login')
    this.setState({isLoginProcessing:true});
  }

  onLogoutHandler = () => {
    this.props.onLogout();
    this.setState({isLoginProcessing:false});
  }

  onSubmitHandler = (event, email, password, isSignUp) => {
    event.preventDefault();
    this.props.onAuth(email, password, isSignUp);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isAuthLoading !== prevProps.isAuthLoading) {
      if(!this.props.isAuthLoading && !this.props.isAuthErrorOccured) {
        this.setState({isLoginProcessing:false});
      }
    }
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/checkout" component={asyncCheckoutPage} />
        <Route path="/promotions" component={asyncPromotionsPage} />
        <Route path="/orders" component={asyncOrdersPage} />
        <Route path="/" exact component={asyncMainPage} />
      </Switch>
    );

    if(this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckoutPage} />
          <Route path="/promotions" component={asyncPromotionsPage} />
          <Route path="/orders" component={asyncOrdersPage} />
          <Route path="/history" />
          <Route path="/" exact component={asyncMainPage} />
        </Switch>
      );
    }

    return (
      <div className={classes.App}>
        <Modal show={this.state.isLoginProcessing}>
          <Auth 
            loading={this.props.isAuthLoading}
            onSubmitForm={this.onSubmitHandler}
            error={this.props.isAuthErrorInfo}
            isError={this.props.isAuthErrorOccured}
          />
        </Modal>
        <Layout
          onLogin={this.onLoginHandler}
          onLogout={this.onLogoutHandler}
          cartSize={this.props.cart.size > 0 ? [...this.props.cart.values()].reduce((accumulative, item) => accumulative + item) : `` }
          isAuthenticated={this.props.isAuthenticated}
        >
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    isAuthLoading: state.auth.loading,
    isAuthErrorInfo: state.auth.error,
    isAuthErrorOccured: state.auth.isError,
    cart: state.cart.cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (email, password, isSingup) => dispatch(actions.onUserAuth(email, password, isSingup)),
      onLogout: () => dispatch(actions.onUserLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
