import React from 'react';

// import styles 
import classes from './HistoryListItem.module.css';

const historyListItem = (props) => {
 
    return (
        <li className={classes.OrderListItem}>
            <div>
                <img className={classes.OrderListImage} src={props.imageSrc} alt={props.imageAlt} />
                <div>
                    <h3>{props.name}</h3>
                    <div className={classes.OrderListItemSummary}>{props.summary ? `${props.summary} ${props.additions ? `with additional ${props.additions.map((addition) => addition.name).join(',')}` : ``}` : props.description}</div>
                </div>
            </div>
            <div>
                <div>
                    <span>{Number.parseFloat(props.price) * Number.parseFloat(props.count)}</span><span>$</span>
                </div>
            </div>
        </li>
    )
}

export default historyListItem;