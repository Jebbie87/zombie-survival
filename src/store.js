import { createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// import the root reducer
import rootReducer from './reducers/index'

// create an object for the default data
const defaultState = {
  armour: 'armour',
  weapons: 'weapon',
  misc: 'misc',
}

// create browser history
export const history = createHistory()

// create middleware history
const middleware = routerMiddleware(history)

// combines the middleware and the chrome dev tools extension
const enhancers = compose(
  middleware(history),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

// create store
const store = createStore(rootReducer, defaultState, enhancers)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store