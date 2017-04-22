import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/armour' activeClassName='route--active'>
      Armour
    </Link>
    {' · '}
    <Link to='/weapons' activeClassName='route--active'>
      Weapons
    </Link>
    {' · '}
    <Link to='/misc' activeClassName='route--active'>
      Misc
    </Link>
  </div>
)

export default Header
