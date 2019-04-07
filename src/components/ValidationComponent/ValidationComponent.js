import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {
    let msg = <p>Text too short</p>;
    if (props.inputLength >= 5){
        msg = <p>Text long enough</p>
    }
    return (
        msg
    )
};

export default validationComponent;