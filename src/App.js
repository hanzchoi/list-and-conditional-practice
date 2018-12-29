import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    arr:[],
    userInput:""
  }

  renderArr = () => {
    this.state.arr.map((arr,i) => {
      return <Something key=i ele=arr />
    })
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
        <input name="userInput" type="text" />
      </div>
    );
  }
}

export default App;
