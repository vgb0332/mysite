import React, { Component } from 'react';
import TodoItem from  '../TodoItem/TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { color, todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      ({id, color, text, checked}) => (
        <TodoItem
          color={color}
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;
