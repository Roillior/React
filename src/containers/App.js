import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Person from '../components/Persons//Person/Person';
import Persons from '../components/Persons/Persons';
import UserInput from '../components/Users/UserInput/UserInput';
import User from '../components/Users/User/User';
import Users from '../components/Users/Users';
import UserOutput from '../components/Users/UserOutput/UserOutput';
import ValidationComponent from '../components/ValidationComponent/ValidationComponent';
import CharComponent from '../components/CharComponent/CharComponent';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component{
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { name: 'Lior', age: 29},
      { name: 'Sarah', age: 26}
    ],
    users: [
      {  id: 'qwe', userName: 'theuser' },
      {  id: 'asd', userName: 'lior' },
    ],
    showUsers: false,
    showMesseage: 'Show',
    inputLength: 0,
    inputValue: []
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentWillUnmount() {
    console.log('[App.js] componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  userNameChangeHandler = (event, id) => {
    const userIndex = this.state.users.findIndex( p => {
      return p.id == id;
    });
    const user = {
      ...this.state.users[userIndex]
    };
    user.userName = event.target.value;
    const users = [...this.state.users];
    users[userIndex] = user;
    this.setState( { users: users } );
  }

  toggleUserHandler = () => {
    let showMessage = this.state.showMesseage;
    if (!this.state.showUsers){
      showMessage = 'Hide'
    }
    else {
      showMessage = 'Show'
    }

    this.setState((prevState, props) => {
      return {
        showUsers: !this.state.showUsers,
        showMesseage: showMessage
      };
    });
  }

  deleteUserHandler = (userIndex) => {
    // use this or next line
    // const users = this.state.users.slice();
    const users = [...this.state.users];
    users.splice(userIndex, 1);
    this.setState({users: users})
  }

  lengthOfInput = (event) => {
    this.setState({
      inputLength: event.target.value.length,
      inputValue: event.target.value.split('')
    })
  }

  deleteCharHandler = (index) => {
    const inputValue = [...this.state.inputValue];
    inputValue.splice(inputValue, 1);
    this.setState({inputValue: inputValue})
  }

  render() {
    console.log('[App.js] render');
    let showUsers = null;

    if (this.state.showUsers){
      showUsers = (
        <Users
          users={this.state.users}
          clicked={this.deleteUserHandler}
          changed={this.userNameChangeHandler}/>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showUsers={this.state.showUsers}
          inputValue={this.state.inputValue}
          deleteChar={this.deleteCharHandler}
          inputLength={this.state.inputLength}
          lengthOfInput={this.lengthOfInput}
          showMesseage={this.state.showMesseage}
          toggleUserHandler={this.toggleUserHandler}/>
        {showUsers}
      </div>
    )
  }
}

export default App;