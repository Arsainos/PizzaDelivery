import React, { Component } from 'react';

// import components
import OrderSummary from '../../components/Orders/Summary/Summary.js';

// import routing
import { Redirect, withRouter } from 'react-router-dom';

// import redux
import {connect} from 'react-redux';

// import hocs
import AUX from '../../hocs/Axuliary.js';

class Orders extends Component {
    render() {
        let summaryPage = (<Redirect to="/" />);

        if(this.props.isAuthenticated) {
            summaryPage = <OrderSummary />
        }

        return (
            <AUX>
                {summaryPage}
            </AUX>           
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default withRouter(connect(mapStateToProps,null)(Orders));