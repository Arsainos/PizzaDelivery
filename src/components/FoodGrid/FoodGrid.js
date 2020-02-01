import React from 'react';

// import styles
import classes from './FoodGrid.module.css';

// import components
import FoodGridRow from './FoodGridRow/FoodGridRow.js';

const foodGrid = (props) => {
    const {id, title, data, elementsInRow} = props;

    let cardsRow = [];
    const numberOfRows = Math.ceil(data.length / elementsInRow);

    for(let i=0; i<numberOfRows;i++){
        const filtered = data.filter((_, index) => index >= elementsInRow*i && index < elementsInRow*(i+1));

        cardsRow.push(<FoodGridRow key={id+'_foodGridRow_'+i}> {filtered}</FoodGridRow>)
    }
    
    return (
        <div id={id}>
            <div className={classes.FoodGridContainer}>
                <h2 className={classes.FoodGridTitle}>{title}</h2>
                {cardsRow}
            </div>
        </div>
    )
}

export default foodGrid;