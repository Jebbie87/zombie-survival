import React from 'react'
import PropTypes from 'prop-types'

export const Misc = (props) => (
  <div>
    Misc page
    {
      props.misc.map((misc) => {
        return <img key={misc.name} src={misc.display_src}></img>
      })
    }
  </div>
)

Misc.propTypes = {

}

export default Misc
