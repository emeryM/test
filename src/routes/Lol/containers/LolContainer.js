import { connect } from 'react-redux'
import { increment, clear } from '../modules/lol'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the lol:   */

import Lol from '../components/Lol'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  increment : () => increment('ol'),
  clear     : () => clear('Lol')
}

const mapStateToProps = (state) => ({
  lol : state.lol
})

export default connect(mapStateToProps, mapDispatchToProps)(Lol)
