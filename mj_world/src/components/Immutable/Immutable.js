import React, { Component } from 'react';
import UserList from './UserList/UserList';
import { immutableTest } from './index';

export class Immutable extends Component {
  id = 3;

  state = {
    input: '',
    message: '',
    users: [
      {
        id: 1,
        username: 'velopert'
      },
      {
        id: 2,
        username: 'mjkim'
      }
    ]
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  onButtonClick = (e) => {
    this.setState(({ users, input }) => ({
      input: '',
      users: users.concat({
        id: this.id++,
        username: input
      })
    }));
  }

  onButtonClick2 = (e) => {
    this.setState({
      message: 'console을 확인하세요'
    });
  }

  render() {
    const { onChange, onButtonClick, onButtonClick2 } = this;
    const { input, users, message } = this.state;

    let btn2_style = {
      'padding': '1vw',
      'margin' : '1vw 0'
    };
    immutableTest();
    return (
      <div>
        <div>
          <input onChange={onChange} value={input} />
          <button onClick={onButtonClick}>추가</button>
        </div>
        <div>
          <button
            style={btn2_style}
            onClick={onButtonClick2}> IMMUTABLE TEST </button>
        </div>
        <h3> {message} </h3>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    );
  }
}
