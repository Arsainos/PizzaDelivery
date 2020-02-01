import React, {useState} from 'react';

// import styles
import classes from './CardOrder.module.css';

// import image
import pizzaImage from '../../../../assets/mocks/pizzaMock.jpg';

const CardOrder = (props) => {
    const [cardOrderState, cardOrderUpdate] = useState({summary:`Traditional Dough, Small size`, size:`Small`})

    return(
        <div className={classes.CardOrder} >
            <div className={classes.ImageContainer} >
                <img className={classes.InnerImage}  src={pizzaImage} alt="Small" />
            </div>
            <div className={classes.InfoContainer} >
                <h2 className={classes.ProductName} >{props.name}</h2>
                <div className={classes.ProductSummary} >{cardOrderState.summary}</div>
                <div className={classes.ProductDescription} >{props.description}</div>
                <div className={classes.OptionsContainer} >
                    <h3 className={classes.OptionsHeading} >Size</h3>
                    <ul className={classes.OptionsList} >
                        <li className={classes.Checkbox} >
                            <input className={[classes.InputCheckbox, classes.VisuallyHidden].join(' ')} type="radio" id="size-s" name="size"  value="1" checked={true}/>
                            <label className={classes.CheckboxLabel} htmlFor="size-s" >Small</label>
                        </li>
                        <li className={classes.Checkbox} >
                            <input className={[classes.InputCheckbox, classes.VisuallyHidden].join(' ')} type="radio" id="size-m" name="size"  value="1" />
                            <label className={classes.CheckboxLabel} htmlFor="size-m" >Medium</label>
                        </li>
                        <li className={classes.Checkbox} >
                            <input className={[classes.InputCheckbox, classes.VisuallyHidden].join(' ')} type="radio" id="size-l" name="size"  value="1" />
                            <label className={classes.CheckboxLabel} htmlFor="size-l" >Large</label>
                        </li>
                    </ul>
                </div>
                <div className={classes.OptionsContainer} >
                    <h3 className={classes.OptionsHeading} >Dough</h3>
                    <ul className={classes.OptionsList} >
                        <li className={classes.Checkbox} >
                            <input className={[classes.InputCheckbox, classes.VisuallyHidden].join(' ')} type="radio" id="dough-traditional" name="dough"  value="1" checked={true} />
                            <label className={classes.CheckboxLabel} htmlFor="dough-traditional" >Traditional</label>
                        </li>
                        <li className={classes.Checkbox} >
                            <input className={[classes.InputCheckbox, classes.VisuallyHidden].join(' ')} type="radio" id="dough-thin" name="dough"  value="1" />
                            <label className={classes.CheckboxLabel} htmlFor="dough-thin" >Thin</label>
                        </li>
                    </ul>
                </div>
                <div className={classes.OptionsContainer} >
                    <h3 className={classes.OptionsHeading} >Toppings</h3>
                    <ul className={classes.OptionsList} >
                        <li className={classes.Checkbox} >
                            <input className={[classes.InputCheckbox, classes.VisuallyHidden].join(' ')} type="checkbox" id="toppings-mushrooms" name="toppings"  value="1" />
                            <label className={classes.CheckboxLabel} htmlFor="toppings-mushrooms" >Mushrooms</label>
                        </li>
                        <li className={classes.Checkbox} >
                            <input className={[classes.InputCheckbox, classes.VisuallyHidden].join(' ')} type="checkbox" id="toppings-mozzarella" name="toppings"  value="1" />
                            <label className={classes.CheckboxLabel} htmlFor="toppings-mozzarella" >Mozzarella</label>
                        </li>
                        <li className={classes.Checkbox} >
                            <input className={[classes.InputCheckbox, classes.VisuallyHidden].join(' ')} type="checkbox" id="toppings-jalapeno" name="toppings"  value="1" />
                            <label className={classes.CheckboxLabel} htmlFor="toppings-jalapeno" >Jalapeno</label>
                        </li>
                    </ul>
                </div>
                <button className={classes.AddButton}  onClick={props.continueClick}>{`Add to Cart for `+props.price}</button>
            </div>
        </div>
    )
}

export default CardOrder;