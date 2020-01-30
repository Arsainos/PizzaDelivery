import React from 'react';

// import styles
import classes from './FoodGrid.module.css';

// import components
import FoodGridRow from './FoodGridRow/FoodGridRow.js';
import Card from '../UI/Card/Card.js';

const foodGrid = (props) => {
    const {id, title, cards, elementsInRow} = props;

    let cardsRow = [];
    const numberOfRows = Math.ceil(cards.length / );

    for(let i=0; i<numberOfRows;i++){
        const filtered = cards.filter((_, index) => index >= 4*i && index < 4*(i+1));
        const mapped = filtered.map((it) => (
            <Card 
                key={Math.random()*(i+1)}
                imageSrc={it.imageSrc}
                alt={it.imageAlt}
                name={it.name}
                description={it.description}
                price={it.price}              
            />
        ));

        cardsRow.push(<FoodGridRow key={id+'_foodGridRow_'+i}> {mapped}</FoodGridRow>)
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