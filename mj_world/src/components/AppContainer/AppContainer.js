import React, { Component } from 'react';
import './AppContainer.css';

import { TodoList } from '../TodoList/TodoList';
import { Immutable } from '../Immutable/Immutable';
import { FullWindow } from './Common/FullWindow/FullWindow';
import { Nasa } from '../../containers/Nasa/Nasa';
import CounterContainer from  '../../containers/CounterContainer';

class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFullWindow: false,
      currentListId: '',
      list: [
        {
          name : 'Nasa',
          item : <Nasa />
        },
        {
          name : 'TodoList',
          item : <TodoList />
        },
        {
          name : 'Immutable',
          item : <Immutable />
        },
        {
          name: 'CounterContainer',
          item : <CounterContainer />
        }
      ]
    };
  }

  onFullWindow = ( id, status ) => {
    this.setState(
      ...this.state,
      {
        isFullWindow: status,
        currentListId: id
      }
    )
  };

  render(){
    let { isFullWindow, currentListId } = this.state;

    return (
      <div className="app-container">
        {
          this.state.list.map( (e, id) => (
            <AppContent
              isFullWindow = { isFullWindow }
              onFullWindow = {this.onFullWindow}
              key = {id}
              id = {id}
              targetId = {currentListId}
              name = {e.name}
              item = {e.item}
            />
        ))}
      </div>
    );
  }
};

// const AppContent = ( { name, item } ) => {
//   return (
//     <div className={ name }>
//       { item }
//     </div>
//   );
// };

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {isFullWindow: false};
    this.handleExpand = this.handleExpand.bind(this);
    this.handleMinify = this.handleMinify.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isFullWindow !== nextProps.isFullWindow;
  }

  handleExpand() {
    this.props.onFullWindow(this.props.id, true);
  }

  handleMinify() {
    this.props.onFullWindow(this.props.id, false);
  }

  render() {
    const { isFullWindow, name, item, id, targetId } = this.props;
    let style = (id !== targetId && isFullWindow) ?
                { display: 'none' } : {};

    return (
      <div style={style}
          className={ this.props.name + ( isFullWindow ? ' active' : '' ) }
      >

        <FullWindow
          onExpand = { this.handleExpand }
          onMinify = { this.handleMinify }
        />
        { item }

      </div>
    );
  }
}

export default AppContainer;
