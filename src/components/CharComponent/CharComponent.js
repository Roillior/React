import React from 'react';
import classes from './CharComponent.css';

const charComponent = (props) => {
    return (
        <span className={classes.CharComponent} onClick={props.click}>
            {props.charValue}
        </span>
    )
};

export default charComponent;