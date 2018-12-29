import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    arr:[]
  }

  deleteAnElement = (index) => {
    // copy the array
    const arr = [...this.state.arr];
    //slice the array
    arr.splice(index, 1);
    //then update the state
    this.setState({arr:arr})
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
