import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Main from './components/Main'
import Weapons from './components/Weapons'
import './styles/index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={Main}></IndexRoute>
      <Route path='/weapons' component={Weapons} />
    </Route>
  </Router>,
  document.getElementById('root')
);