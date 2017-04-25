import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Weapons extends Component {
  render() {
    return (
      <div>
        <h1>Weapons Page</h1>
        {
          this.props.weapons.map((weapon) => {
            return <img key={weapon.name} src={weapon.display_src}></img>
          })
        }
      </div>
    )
  }
}
