import React, { Component } from 'react'


export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Zombie Title</h1>
        <table>
          <tbody>
            <tr className='zombie-links'>
              <td><Link to='/'><h4 className='zombie-title'>Zombie Survival</h4></Link></td>
              <td><Link to='/weapons'><h4 className='weapons-title'>Weapons</h4></Link></td>
              <td><Link to='/armour'><h4 className='armour-title'>Armour</h4></Link></td>
              <td><Link to='/misc'><h4 className='misc-title'>Misc</h4></Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
}