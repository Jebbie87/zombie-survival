import { injectReducer } from '../../store/reducers'

let path = 'armour'

export default (store) => ({
  path : path,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Armour = require('./ArmourView').default
      const reducer = require('./state/armour').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: path, reducer })

      /*  Return getComponent   */
      cb(null, Armour)

      /* Webpack named bundle   */
    }, 'armour')
  }
})
