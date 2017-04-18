import { injectReducer } from 'store/reducers'

let path = 'misc'

export default (store) => ({
  path : path,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Misc = require('./MiscView').default
      const reducer = require('./state/misc').default

      /*  Add the reducer to the store on key 'misc'  */
      injectReducer(store, { key: path, reducer })

      /*  Return getComponent   */
      cb(null, Misc)

      /* Webpack named bundle   */
    }, 'misc')
  }
})
