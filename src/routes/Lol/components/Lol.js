import React from 'react'

export const Lol = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Lol: {props.lol}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
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
    return(<h1>TEST post please IgnoRe
    </h1>);
  }
}

Lol.propTypes = {
  lol         : React.PropTypes.string.isRequired,
  increment   : React.PropTypes.func.isRequired,
  clear       : React.PropTypes.func.isRequired
}

export default Lol
