import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Misc extends Component {
  handleClick = (e) => {
    console.log(e.target.name)
    this.props.imageClicked(e.target.name)
  }

  render() {
    const { misc } = this.props
    return (
      <div>
        <h1>Misc page</h1>
        {Object.keys(misc).map((item) => {
          return <img
            key={misc[item].name}
            name={misc[item].name}
            src={misc[item].display_src}
            onClick={this.handleClick}
          />
        })}
      </div>
    )
  }
}

