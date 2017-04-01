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

// import redux store provider
import { Provider } from 'react-redux'

// import redux store and history from store.js
import store, { history } from './store'

// import react route dependecies
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Main>
        <Route path="/" component={Home} />
        <Route path="/armour" component={Armour} />
      </Main>
    </Router>
  </Provider>,
document.getElementById('root'));
