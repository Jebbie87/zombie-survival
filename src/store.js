import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// import the root reducer
import reducers from './reducers'

// import dummy data
import weapons from './data/weapons'
import armour from './data/armour'
import misc from './data/misc'

// create an object for the default data
const defaultState = {
  weapons,
  armour,
  misc,
}

// create browser history
export const history = createHistory()

// create middleware history
const middleware = routerMiddleware(history)

// combines the middleware and the chrome dev tools extension
const enhancers = compose(
  applyMiddleware(middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

// create store
const store = createStore(reducers, defaultState, enhancers)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store