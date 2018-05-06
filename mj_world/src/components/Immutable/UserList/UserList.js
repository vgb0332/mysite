import React, { Component } from 'react';
import User from '../User/User';

class UserList extends Component {
  shouldComponentUpdate(prevProps, prevState) {
    return prevProps.users !== this.props.users;
  }
  renderUsers = () => {
    const { users } = this.props;
    return users.map((user)=> (
      <User key={user.id} user={user} />
    ));
  }

  render() {
    console.log('User List is rendering');
    const { renderUsers } = this;
    return (
      <div>
        {renderUsers()}
      </div>
    );
  }
}

export default UserList;
