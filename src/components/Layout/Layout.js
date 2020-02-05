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
                <Toolbar
                    onLogin={this.props.onLogin}
                    onLogout={this.props.onLogout}
                    cartSize={this.props.cartSize}
                    isAuthenticated={this.props.isAuthenticated}
                >

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