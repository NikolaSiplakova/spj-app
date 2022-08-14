import React from "react"
import PropTypes from "prop-types"

import Error from "./_components/Error/Error"
import classes from "./ErrorHolder.module.scss"

const ErrorHolder = ({ errors }) => {
  return (
    <div className={classes["error-msg"]}>
      {errors.map((error, i) => (
        <Error error={error} key={i} />
      ))}
    </div>
  )
}

ErrorHolder.propTypes = {
  errors: PropTypes.array.isRequired,
}

export default ErrorHolder
