import React from 'react'
import PropTypes from 'prop-types'

export const Weapons = (props) => (
  <div>
    Weapons Page
    {
      props.weapons.map((weapon) => {
        return <img key={weapon.name} src={weapon.display_src}></img>
      })
    }
  </div>
)

Weapons.propTypes = {

}

export default Weapons
