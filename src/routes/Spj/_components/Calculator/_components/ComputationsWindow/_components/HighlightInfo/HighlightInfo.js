import React from "react"
import classnames from "classnames"

import {
  HIGHLIGH_STATEMENT_TYPES,
  STATEMENT_TYPES,
} from "constants/statementTypes"

import classes from "./HighlightInfo.module.scss"

const HighlightInfo = () => {
  return (
    <div className={classes["window"]}>
      {Object.values(STATEMENT_TYPES).map((type, i) => {
        return (
          <div className={classes["indicator"]} key={i}>
            <div
              className={classnames(
                classes["indicator__color"],
                classes["statement"],
                classes[`${type}--dot`]
              )}
            ></div>
            <div className={classes["indicator__name"]}>
              {HIGHLIGH_STATEMENT_TYPES[type]}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HighlightInfo
