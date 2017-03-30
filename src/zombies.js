// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Main from './components/Main'
import Home from './components/Home'
import Armour from './components/Armour'
import Weapons from './components/Weapons'

// import styles/css
import './styles/App.css'

// import react router dependencies
import { Route } from 'react-router'

// import redux store provider
import { Provider } from 'react-redux'

// import react router redux dependencies
import { ConnectedRouter, push } from 'react-router-redux'

// import redux store and history from store.js
import store, { history } from './store'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main>
        <Route path="/" component={Home} />
        <Route path="/armour" component={Armour} />
        <Route path="/weapons" component={Weapons} />
      </Main>
    </ConnectedRouter>
  </Provider>,
document.getElementById('root'));