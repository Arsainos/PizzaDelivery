import React , {Component} from 'react';

// import styles
import classes from './OrderData.module.css';

// import helpers
import {updateObject, checkValidity} from '../../utils/helpres.js';

// import components
import Input from '../../components/UI/Input/Input.js';

class OrderData extends Component { 
    state = {
        controls: {
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Address'
                },
                value: '',
                validation:{
                    required: false,
                },
                valid: false,
                touched: false,
                classes: [classes.Input]
            },
            tel: {
                elementType: 'input',
                elementConfig: {
                    type: 'tek',
                    placeholder: 'Phone'
                },
                value: '',
                validation:{
                    required: false,
                },
                valid: false,
                touched: false,
                classes: [classes.Input]
            },
            commentary: {
                elementType: 'textarea',
                elementConfig: {
                    id:'commentary',
                    cols:'30',
                    rows:'10',
                    placeholder:'Your comment'
                },
                validation:{
                    required: false,
                },
                valid: false,
                touched: false,
                classes: [classes.TextArea]
            }
        },
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls,{
            [controlName]: updateObject(this.state.controls[controlName],{
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({controls: updatedControls});
    }

    
    render() {
        let formElement = null;

        const formElementsArray = [];
        for(let key in this.state.controls){
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let inputs = formElementsArray.map(inputElement => 
            (
                <Input
                    key={inputElement.id}
                    elementType={inputElement.config.elementType}
                    elementConfig={inputElement.config.elementConfig}
                    value={inputElement.config.value}
                    invalid={!inputElement.config.valid}
                    shouldValidate={inputElement.config.validation}
                    touched={inputElement.config.touched}
                    classes={inputElement.config.classes}
                    changed={(event) => this.inputChangedHandler(event, inputElement.id)}
                />
            )
        )

        formElement = (
            <form className={classes.AddressForm} onSubmit={(event) => this.props.onSubmitForm(event, this.state.controls.address, this.state.controls.tel, this.state.controls.commentary)}>
                {inputs}
                <button className={classes.AddressFormButton} type="submit">
                        <span>Confirm Order</span>
                </button>    
            </form>
        )

        return (
            // className={classes.ConfirmOrder}
            <div>
                {formElement}
            </div>
        )
    }
}

export default OrderData;