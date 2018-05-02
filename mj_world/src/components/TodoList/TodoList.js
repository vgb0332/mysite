import React, { Component } from 'react';
import './TodoList.css';

import Form from './Form/Form';
import Palette from './Palette/Palette';
import TodoItemList from './TodoItemList/TodoItemList';

export class TodoList extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true },
      { id: 2, text: ' 리액트 소개', checked: false }
    ],
    color : 'black'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: color
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handlePaletteClick = (color) => {
    this.setState({
      color : color
    });
  }

  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handlePaletteClick
    } = this;

    return (
      <TodoListTemplate
        palette= {
          <Palette
            color={color}
            onPaletteClick={handlePaletteClick}
          />
        }
        form={(
        <Form
          color={color}
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList color = { color }
                      todos={ todos }
                      onToggle={handleToggle}
                      onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

const TodoListTemplate = ( {palette, form, children }) => {
  return (
    <div className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="palette-wrapper">
        {palette}
      </section>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </div>
  );
};
