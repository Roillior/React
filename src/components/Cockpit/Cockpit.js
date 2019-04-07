import React, { useEffect, useRef } from 'react';
import CharComponent from '../CharComponent/CharComponent';
import UserInput from '../Users/UserInput/UserInput';
import ValidationComponent from '../ValidationComponent/ValidationComponent';

import classes from './Cockpit.css'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        toggleBtnRef.current.click()
    }, []);
    
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //send ere httprequest
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, [props.users]); //will triger only when person change, empty [] will rn only for the first time
    let btnClass = '';

    if (props.showUsers) {
        btnClass = classes.Red;
    }

    let chars = (
        <div>
          {props.inputValue.map((value, index) => {
            return <CharComponent
              click={() => props.deleteChar(index)}
              charValue={value}/>
          })}
        </div>
      );
  
      let assignedClasses = []
      if (props.inputLength <= 5){
        assignedClasses.push(classes.blue)
      }
      else {
        assignedClasses = [classes.red]
      }
      if (props.inputLength == 5){
        assignedClasses.push(classes.bold)
      }
  

    return (
        <div className={classes.Cockpit}>
            <UserInput
                changed={props.lengthOfInput}
                inputValue={props.inputValue.join('')}/>
            <p className={assignedClasses}>
                {props.inputLength}
            </p>
            <ValidationComponent 
                inputLength={props.inputLength}/>
            {chars}
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.toggleUserHandler}>
                {props.showMesseage}
            </button>
        </div>
    );
};
// use memo for optamize when the component should render
export default React.memo(cockpit);
