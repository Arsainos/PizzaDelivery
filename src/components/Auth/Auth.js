import React, { Component } from 'react';

// import styles
import classes from './Auth.module.css';
import spinnerClasses from '../UI/Spinner/Spinner.module.css';

// import helpers
import { updateObject, checkValidity } from '../../utils/helpres.js';

// import components
import Input from '../UI/Input/Input.js';
import Spinner from '../UI/Spinner/Spinner.js';


class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail'
                },
                value: '',
                validation:{
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                classes: null
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation:{
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
                classes: null
            }
        },
        isSingup: true
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

    singInClickHandler = () => {
        this.setState({isSingup: false});
    }

    singUpClickHandler = () => {
        this.setState({isSingup: true});
    }

    render() {
        let formElement = this.props.loading ? <Spinner spinnerClass={spinnerClasses.LoaderAuth} /> : null;

        if(!this.props.loading) {
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
                <form className={classes.SignUpForm} onSubmit={(event) => this.props.onSubmitForm(event, this.state.controls.email.value, this.state.controls.password.value, this.state.isSingup)}>
                    <p className={classes.ErrorMessage}>{this.props.error ? this.props.error.message : null}</p>
                    {inputs}
                    <div className={classes.SignUpFormButtonsWrap}>
                        <button className={classes.SignUpFormButtonSignUp} type="submit" onClick={() => this.singUpClickHandler()}>
                            <span>Sign Up</span>
                        </button>
                        <button className={classes.SignUpFormButtonSignUp} type="submit" onClick={() => this.singInClickHandler()}>
                            <span>Sign In</span>
                        </button>
                    </div>     
                </form>
            )
        }
        
        

        return (
            <div>
                {formElement}
            </div>
        )
    }
}

export default Auth;