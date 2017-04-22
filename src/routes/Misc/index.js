import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'misc',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Misc = require('./containers/MiscContainer').default
      const reducer = require('./modules/misc').default

      /*  Add the reducer to the store on key 'misc'  */
      injectReducer(store, { key: 'misc', reducer })

      /*  Return getComponent   */
      cb(null, Misc)

    /* Webpack named bundle   */
    }, 'misc')
  }
})
