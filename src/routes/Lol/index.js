import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'lol',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Lol = require('./containers/LolContainer').default
      const reducer = require('./modules/lol').default

      /*  Add the reducer to the store on key 'lol'  */
      injectReducer(store, { key: 'lol', reducer })

      /*  Return getComponent   */
      cb(null, Lol)

    /* Webpack named bundle   */
    }, 'lol')
  }
})
