import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'armour',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Armour = require('./containers/ArmourContainer').default
      const reducer = require('./modules/armour').default

      /*  Add the reducer to the store on key 'armour'  */
      injectReducer(store, { key: 'armour', reducer })

      /*  Return getComponent   */
      cb(null, Armour)

    /* Webpack named bundle   */
    }, 'armour')
  }
})
