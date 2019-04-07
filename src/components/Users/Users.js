import React, {Component} from 'react';
import User from './User/User';

class Users extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Users.js] getDerivedStateFromProps');
    //     return state;
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Users.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Users.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'}
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('[Users.js] componentDidUpdate');
        console.log(snapShot);
    }

    render() {
        console.log('[Users.js] rendering...');
        return this.props.users.map( ( user, index ) => {
            return(
                <User
                    click={() => this.props.clicked( index )}
                    userName={user.userName}
                    key={user.id}
                    changed={( event ) => this.props.changed( event, user.id )}
                />
                );
        });
    }
}


export default Users;