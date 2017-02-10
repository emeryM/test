import React from 'react'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {props.counter}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.decrement}>
      Decrement
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.clear}>
      Clear
    </button>
    <TestComponent />
  </div>
)

class TestComponent extends React.Component {
  render () {
    return(<h1>TEST</h1>);
  }
}

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired,
  decrement   : React.PropTypes.func.isRequired,
  clear       : React.PropTypes.func.isRequired
}

export default Counter
