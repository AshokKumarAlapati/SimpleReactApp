import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
  render() {
    return (
      <div>Welcome to react application</div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
