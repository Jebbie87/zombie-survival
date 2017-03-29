import React, { Component } from 'react'
// import Weapons from './Weapons'
import { Link } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Zombie Survival</Link>
          <Link to="/weapons">Weapons</Link>
          <Link to="/armour">Armour</Link>
        </h1>
        {this.props.children}
      </div>
    )
  }
}

