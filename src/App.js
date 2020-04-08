import React, { Component } from 'react';
import './App.css';
import Counters from './Components/Counters';

class App extends Component {
  state = { 
    counters: [
      {id:1, value: 4},
      {id:2, value: 0},
      {id:3, value: 0},
      {id:4, value: 0},
    ]
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value ++;
    this.setState({counters})
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value > 0 && counters[index].value --;
    this.setState({counters})
  };

  handleReset = () => {
    const counters = this.state.counters.map(item => {
      item.value = 0
      return item;
    });
    this.setState({counters});
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(item => item.id !== counterId);
    this.setState({counters});
  }

  render() { 
    return (
      <div className="container-fluid" style={{padding: '0'}}>
        <nav class="navbar navbar-dark bg-dark" style={{marginBottom: '30px'}}>
          <a class="navbar-brand" href="#">Navbar</a>
        </nav>
        <div className="container-md">
          <button className="btn btn-primary btn-sm" style={{marginBottom: "20px"}} onClick={this.handleReset}>Reset</button>
          <Counters
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </div>
      </div>
    );
  }
}
 
export default App;