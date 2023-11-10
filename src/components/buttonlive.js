import React from "react";
import PropTypes from "prop-types";

function Buttoncomponentlive({ url }) {
  return (
    <div>
      <a href={url}>
        <button type="button" class="btn btn-custom btn-outline-light">
         Marte
        </button>
      </a>
    </div>
  );
}

Buttoncomponentlive.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Buttoncomponentlive;
