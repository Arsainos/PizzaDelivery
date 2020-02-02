import React from 'react';

// import hocs
import AUX from '../../hocs/Axuliary.js';

// import components
import Cart from '../../components/Cart/Cart.js';

const Checkout = (props) => {
    return (
        <AUX>
            <Cart />
        </AUX>
    )
}

export default Checkout;