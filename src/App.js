import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import {withRouter} from 'react-router-dom'
import Header from './Header.js';
import {connect} from 'react-redux'

class App extends Component {
  render() {

    return (
      <div>
          <Header/>
          <Main/>
      </div>
    );
  }

}
/*
function mapStateToProps(state) {
    return {
        user : state.user,
        books : state.books
    };
}
*/
//export default withRouter(connect(mapStateToProps)(App))
export default App