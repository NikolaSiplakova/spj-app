import React from "react"
import "./ErrorHolder.scss"

const ErrorHolder = ({ errors }) => {
  return (
    <div>
      {errors.map((error, i) => (
        <div className="error-msg" key={i}>
          <div>Riadok: {error.line}</div>
          <div>Stlpec: {error.col}</div>
          <div className="custom">{error.customMessage}</div>
          <div>{error.msg}</div>
        </div>
      ))}
    </div>
  )
}

export default ErrorHolder
