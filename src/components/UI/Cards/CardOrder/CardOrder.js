import React, {useState} from 'react';

// import styles
import classes from './CardOrder.module.css';

// import image
import pizzaImage from '../../../../assets/mocks/pizzaMock.jpg';

const CardOrder = (props) => {
    const [cardOrderState, cardOrderUpdate] = useState({summary:`Traditional Dough, Small Size`, size:{name:`small`, price:0} , dough:{name:`traditional`, price:0} , price:props.price, additions:[]});

    const onRadioChangeHandler = (type, value) => {
        const basePrice = Number.parseFloat(props.price);
        const doughPrice = type === 'dough' ? value.price : cardOrderState.dough.price;
        const sizePrice = type === 'size' ? value.price : cardOrderState.size.price;
        let additionsPrice = 0;
        if(cardOrderState.additions.length > 0) {
            cardOrderState.additions.forEach((addition) => {
                additionsPrice = additionsPrice + addition.price;
            });
        };
        const summaryPrice = basePrice + doughPrice + sizePrice + additionsPrice;

        const summary = `${type === 'dough' ? value.name[0].toUpperCase() + value.name.slice(1, value.length) : cardOrderState.dough.name[0].toUpperCase() + cardOrderState.dough.name.slice(1, cardOrderState.dough.name.length)} Dough,
            ${type === 'size' ? value.name[0].toUpperCase()+value.name.slice(1, value.name.length) : cardOrderState.size.name[0].toUpperCase()+cardOrderState.size.name.slice(1, cardOrderState.size.name.length)} Size`;

        cardOrderUpdate({...cardOrderState, summary:summary, [type]:value, price:summaryPrice});  
    };

    const onCheckboxChangeHandler = (value) => {
        let updatedAdditions = [...cardOrderState.additions];
        if(updatedAdditions.some((it) => it.name === value.name)) {
            updatedAdditions = updatedAdditions.filter((addition) => addition.name !== value.name);
        } else {
            updatedAdditions.push(value);
        } 
        const basePrice = Number.parseFloat(props.price);
        const doughPrice = cardOrderState.dough.price;
        const sizePrice = cardOrderState.size.price;
        let additionsPrice = 0; 
        if(updatedAdditions.length > 0) {
            updatedAdditions.forEach((addition) => {
                additionsPrice = additionsPrice + addition.price;
            })
        };
        const summaryPrice = basePrice + doughPrice + sizePrice + additionsPrice;

        cardOrderUpdate({...cardOrderState, price:summaryPrice, additions: updatedAdditions});
    };

    const generateCheckboxes = (array, inputType, type, handler) => {
        return array.map((it,i) => {
            return (
                <li className={classes.Checkbox} key={it.name+'_'+i}>
                <input 
                    className={[classes.InputCheckbox, classes.VisuallyHidden].join(' ')}
                    type={inputType}
                    id={type+'-'+it.name}
                    name={type}
                    value={it.name}
                    checked={inputType === `radio` ? {...cardOrderState[type]}.name === it.name : cardOrderState.additions.some((addition) => addition.name === it.name)}
                    onChange={inputType === `radio` ? () => handler(type,it) : () => handler(it)}
                />
                <label className={classes.CheckboxLabel} htmlFor={type+'-'+it.name}>
                    {it.name[0].toUpperCase() + it.name.slice(1, it.name.length)}
                </label>
            </li>
            )
        })
    }

    const sizeCheckboxes = generateCheckboxes([{name:`small`, price:0},{name:`medium`, price:3},{name:`large`, price:8}],`radio`,`size`,onRadioChangeHandler);
    const doughCheckboxes = generateCheckboxes([{name:`traditional`, price:0},{name:`thin`, price:4}],`radio`,`dough`,onRadioChangeHandler);
    const toppingCheckboxes = generateCheckboxes([{name:`mushrooms`, price:2}, {name:`mozzarella`, price:3},{name:`jalapeno`,price:3}],`checkbox`,`toppings`,onCheckboxChangeHandler);

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
                        {sizeCheckboxes}
                    </ul>
                </div>
                <div className={classes.OptionsContainer} >
                    <h3 className={classes.OptionsHeading} >Dough</h3>
                    <ul className={classes.OptionsList} >
                        {doughCheckboxes}
                    </ul>
                </div>
                <div className={classes.OptionsContainer} >
                    <h3 className={classes.OptionsHeading} >Toppings</h3>
                    <ul className={classes.OptionsList} >
                        {toppingCheckboxes}
                    </ul>
                </div>
                <button className={classes.AddButton}  
                    onClick={() => props.continueClick(
                        {...props, 
                        price:cardOrderState.price, 
                        summary:cardOrderState.summary, 
                        additions: cardOrderState.additions})}>{`Add to Cart for `+cardOrderState.price}</button>
            </div>
        </div>
    )
}

export default CardOrder;