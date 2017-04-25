import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Armour extends Component {
  render() {
    return (
      <div>
        <h1>I'm the armour page</h1>
        {
          this.props.armours.map((armour) => {
            return <img key={armour.name} src={armour.display_src}></img>
          })
        }
      </div>
    )
  }
}
