import React from 'react';

// import styles
import classes from './FoodGrid.module.css';

// import components
import FoodGridRow from './FoodGridRow/FoodGridRow.js';

const foodGrid = (props) => {
    const {id, title, cards} = props;

    let cardsRow = [];
    const numberOfRows = Math.ceil(cards.length / 4);

    for(let i=0; i<numberOfRows;i++){
        numberOfRows.push(
            <FoodGridRow key={id+'_foodGridRow_'+i}>
                {cards.filter((_, index) => index >= 4*i && index < 4*(i+1))}
            </FoodGridRow>
        )
    }
    
    return (
        <div id={id}>
            <div className={classes.FoodGridContainer}>
                <h2 className={classes.FoodGridTitle}>{title}</h2>
                {cardsRow.join('\n')}
            </div>
        </div>
    )
}

export default foodGrid;