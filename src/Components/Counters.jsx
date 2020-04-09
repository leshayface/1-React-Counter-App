import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {
    render() {
        return (
            <div>
                <button
                    className="btn btn-primary btn-sm"
                    style={{marginBottom: "20px"}}
                    onClick={this.props.onReset}>Reset
                </button>
                {this.props.counters.map(counter => (
                    <Counter
                        key={ counter.id }
                        counter={ counter }
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        onDelete={this.props.onDelete}    
                    />
                ))}
            </div>
        )
    }
}

export default Counters;