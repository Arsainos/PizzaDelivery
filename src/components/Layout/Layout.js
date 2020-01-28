import React, {Component} from 'react';

// import styles
import classes from './Layout.module.css';

// import components
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import Footer from '../Navigation/Footer/Footer.js';

// import hocs
import AUX from '../../hocs/Axuliary.js';

class Layout extends Component {
    render() {
        return (
            <AUX>
                <Toolbar>

                </Toolbar>
                <main className={classes.Content}>
                        {this.props.children}
                </main>
                <Footer>

                </Footer>
            </AUX>        
        )
    }
}

export default Layout;