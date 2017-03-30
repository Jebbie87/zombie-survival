import React, { Component } from 'react'
// import Weapons from './Weapons'
import { Link } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
          <tr className='zombie-links'>
            <td><Link to='/'><h4 className='zombie-title'>Zombie Survival</h4></Link></td>
            <td><Link to='/weapons'><h4 className='weapons-title'>Weapons</h4></Link></td>
            <td><Link to='/armour'><h4 className='armour-title'>Armour</h4></Link></td>
          </tr>
          </tbody>
        </table>
        {this.props.children}
      </div>
    )
  }
}

