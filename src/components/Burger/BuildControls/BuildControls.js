import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {
            controls.map((control) => (
                <BuildControl
                    key={control.label}
                    label={control.label}
                    removed={() => props.ingredientRemoved(control.type)}
                    added={() => props.ingredientAdded(control.type)}
                    disabled={props.disabled[control.type]}
                />
            ))
        }
        <button
            disabled={!props.purchaseable}
            className={classes.OrderButton}
            onClick={props.ordered}>
            ORDER NOW
        </button>
    </div>
)

export default buildControls;