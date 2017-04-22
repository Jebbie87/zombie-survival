import React from 'react'
import PropTypes from 'prop-types'

export const Armour = (props) => (
  <div>
    <p>I'm the armour page</p>
    {
      props.armours.map((armour) => {
        return <img key={armour.name} src={armour.display_src}></img>
      })
    }
  </div>
)

Armour.propTypes = {

}

export default Armour
