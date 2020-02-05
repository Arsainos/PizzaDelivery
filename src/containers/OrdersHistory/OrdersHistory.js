import React, { Component } from 'react';

// import hocs
import AUX from '../../hocs/Axuliary.js';

// import components
import History from '../../components/History/History.js';
import Spinner from '../../components/UI/Spinner/Spinner.js';

// import redux
import {connect} from 'react-redux';
import * as actions from '../../store/actions/order.js';

class OrdersHistory extends Component {
    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }
    
    render() {
        let historyPage = <Spinner />;

        if(!this.props.loading) {
            historyPage = <History orders={this.props.orders}/>
        }
        
        return(
            <AUX>
                {historyPage}
            </AUX>  
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.order.loading,
        orders: state.order.orders,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.onFetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersHistory);