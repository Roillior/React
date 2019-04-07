import React, {Component} from 'react';
import classes from './User.css';
import PropTypes from 'prop-types';

class User extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    render () {
        console.log('[users.js] rendering ...');
        return (
            <div className={classes.User}>
                <input
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.inputValue}/>
                <p onClick={this.props.click}>User Name is {this.props.userName}</p>
            </div>
        );
    }
};

User.propTypes = {
    changed: PropTypes.func,
    inputValue: PropTypes.string,
    click: PropTypes.func,
    userName: PropTypes.string
};

export default User;