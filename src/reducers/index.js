import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import armour from './armour'
import weapons from './weapons'
import misc from './misc'

const rootReducer = combineReducers({ armour, weapons, misc, routing: routerReducer })

export default rootReducer