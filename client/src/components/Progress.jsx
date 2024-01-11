import React from "react";
import PropTypes from 'prop-types'

function Progress({ uploadPrecentage }) {
  return (
    <div className="progress mt-3">
      <div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={{ width: `${uploadPrecentage}%` }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {uploadPrecentage}%
      </div>
    </div>
  );
}

Progress.prototype = {
  precentage : PropTypes.number.isRequired
}

export default Progress;
