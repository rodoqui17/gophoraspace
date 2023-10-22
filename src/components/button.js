import React from 'react'
import PropTypes from 'prop-types'

function Buttoncomponent({url}) {
  return (
    <a href={url}>
        <button type="button" class="btn btn-custom btn-outline-light">Reserva tu ticket</button>
    </a>
    
  )
}

Buttoncomponent.propTypes = {
    url: PropTypes.string.isRequired
}

export default Buttoncomponent
