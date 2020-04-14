import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
          <div className="row justify-content-center">
            <div className="col"><h5 style={{width: "100%"}}>Counter {this.props.counter.id}</h5></div>
            <div className="col-2">
              <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col-8">
              <button 
                className="btn btn-secondary btn-sm m-2" 
                onClick={() => (this.props.onIncrement(this.props.counter))}
              >
                +
              </button>
              <button 
                className="btn btn-secondary btn-sm m-2" 
                onClick={() => (this.props.onDecrement(this.props.counter))}
              >
                -
              </button>
              <button 
                className="btn btn-danger btn-sm" 
                onClick={() => (this.props.onDelete(this.props.counter.id))}
              >
                  Delete
              </button>
            </div>
          </div>  
         );
    }

    formatCount() {
      return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }

    getBadgeClasses() {
      let classes = "badge m-2 badge-"
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
    }
}
 
export default Counter;