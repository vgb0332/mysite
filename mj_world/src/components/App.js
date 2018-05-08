import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar/AppNavbar';
import AppContainer from './AppContainer/AppContainer';
import AppFooter from './AppFooter/AppFooter';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        <AppContainer />
        {/* <AppFooter /> */}
      </React.Fragment>
    );
  }
}


export default App;
