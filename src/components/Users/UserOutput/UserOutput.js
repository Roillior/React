import React from 'react';
import classes from './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className={classes.UserOutput}>
            <p onClick={props.click}>User Name is {props.userName}</p>
            <p>some other p</p>
        </div>
    )
};

export default userOutput;