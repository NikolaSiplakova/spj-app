import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { ReactComponent as WarningIcon } from "styles/icons/exclamation-mark.svg"
import { ReactComponent as ExpandIcon } from "styles/icons/extend.svg"

import classes from "./Error.module.scss"

const Error = ({ error, setCursorPositionToError }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toogleIsExpanded = () => {
    setIsExpanded((current) => current === false)
  }

  return (
    <div>
      <div className={classes["outputs"]} onClick={toogleIsExpanded}>
        <div className={classes["error-text"]}>
          <WarningIcon />
          <span
            onClick={() => setCursorPositionToError(error.line, error.col)}
            className={classes["error-text--bold"]}
          >
            Riadok: {error.line}, stĺpec: {error.col}:
          </span>
          {error.customMessage}
        </div>
        <ExpandIcon
          className={classNames(classes["arrow-icon"], {
            [classes["arrow-icon--expanded"]]: isExpanded === true,
          })}
        />
      </div>
      {isExpanded && (
        <div className={classes["antlr-msg"]}>
          <span className={classes["error-text--bold"]}>ANTLR:</span>{" "}
          {error.msg}
        </div>
      )}
    </div>
  )
}

Error.propTypes = {
  error: PropTypes.object.isRequired,
}

export default Error
