import React, { Component } from 'react';

class User extends Component {
  shouldComponentUpdate(prevProps, prevState) {
    return prevProps.users !== this.props.users;
  }
  render() {
    const { user: { username } } = this.props;
    console.log("%s가 렌더링 되고 있습니다", username);
    return (
      <div>
        username
      </div>
    );
  }
}

export default User;
