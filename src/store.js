import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

// import the root reducer
import rootReducer from './reducers/index'

// create an object for the default data
const defaultState = {
  armour: 'armour',
  weapons: 'weapon',
  misc: 'misc',
}

// const enhancers = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(createBrowserHistory(), store)

// if (module.hot) {
//   module.hot.accept('./reducers/', () => {
//     const nextRootReducer = require('./reducers/index').default
//     store.replaceReducer(nextRootReducer)
//   })
// }

export default store