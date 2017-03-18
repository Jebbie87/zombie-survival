import React, { Component } from 'react'
import '../styles/App.css'
import Weapons from './Weapons'

export default class Main extends Component {
  render() {
    return (
      <div className='app'>
        <h1 className='title'>
          Zombie Apocalypse Survival Gear
        </h1>
        <a href='/weapons'><Weapons /></a>
      </div>
    )
  }
}