import React, { Component } from 'react';

import classes from './Modal.module.css';
import Auxilary from '../../../hocs/Axuliary.js';
import Backdrop from '../Backdrop/Backdrop.js';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render(){
        return(
        <Auxilary>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={[classes.Modal, this.props.modalClass].join(' ')}
                    style={{
                        display: this.props.show ? 'block' : 'none'
                    }}
                    >
                    {this.props.children}
                </div>
            </Auxilary>
        )
    }
};
export default Modal;