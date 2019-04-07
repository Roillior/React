import React from 'react';
import classes from './UserInput.css';

const userInput = (props) => {
    return (
        <div className={classes.UserInput}>
            <input
             type="text"
             onChange={props.changed}
             value={props.inputValue}/>
        </div>
    )
};

export default userInput;
