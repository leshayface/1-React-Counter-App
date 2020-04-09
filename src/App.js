import React, { Component } from 'react';
import './App.css';
import Counters from './Components/Counters';
import Navbar from './Components/Navbar'

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
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(item => item.value > 0).length} />
        <main className="container-fluid">
          <div className="container-md">
            <Counters
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              counters={this.state.counters}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;