import React from 'react'
import PropTypes from 'prop-types'

function Buttoncomponent({url}) {
  return (
      <div>
      <a href={url}>
        <button type="button" class="btn btn-custom btn-outline-light">
          Reservar
        </button>
      </a>
    </div>
    
  )
}

Buttoncomponent.propTypes = {
    url: PropTypes.string.isRequired
}

export default Buttoncomponent
