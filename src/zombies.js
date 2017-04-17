// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Main from './components/Main'
import Home from './components/Home'
import Armour from './components/Armour'
import Weapons from './components/Weapons'
import Misc from './components/Misc'
import App from './components/App'
import AppContainer from './containers/AppContainer'

// import styles/css
import './styles/App.css'

// import redux store provider
import { Provider } from 'react-redux'

// import redux store and history from store.js
import store, { history } from './store'

// import react route dependecies
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { IndexRoute } from 'react-router'

const MOUNT_NODE = document.getElementById('root')

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <Main>
//         <Route path='/' component={App} />
//         <Route path='/armour' component={Armour} />
//         <Route path='/weapons' component={Weapons} />
//         <Route path='/misc' component={Misc} />
//       </Main>
//     </Router>
//   </Provider>,
// document.getElementById('root'));
let render = () => {
  const routes = require('./modules/index').default(store)

  ReactDOM.render(
    <AppContainer store={store} routes={routes} />,
    MOUNT_NODE
  )
}