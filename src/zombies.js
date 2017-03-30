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
import { Router, Route, IndexRoute, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import store, { history } from './store'


ReactDOM.render(
  <Router history={history}>
    <Main>
      <Route path="/" component={Home} />
      <Route path="/armour" component={Armour} />
      <Route path="/weapons" component={Weapons} />
    </Main>
  </Router>,
document.getElementById('root'));