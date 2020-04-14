import React from 'react';

const Counter = ({counter, onIncrement, onDecrement, onDelete}) => {

  const formatCount = () => {
    return counter.value === 0 ? 'Zero' : counter.value;
  }

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-"
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  return (
    <div className="row justify-content-center">
      <div className="col"><h5 style={{width: "100%"}}>Counter {counter.id}</h5></div>
      <div className="col-2">
        <span className={getBadgeClasses()}>{formatCount()}</span>
      </div>
      <div className="col-8">
        <button 
          className="btn btn-secondary btn-sm m-2" 
          onClick={() => (onIncrement(counter))}
        >
          +
        </button>
        <button 
          className="btn btn-secondary btn-sm m-2" 
          onClick={() => (onDecrement(counter))}
        >
          -
        </button>
        <button 
          className="btn btn-danger btn-sm" 
          onClick={() => (onDelete(counter.id))}
        >
            Delete
        </button>
      </div>
    </div>  
  )
}
 
export default Counter;