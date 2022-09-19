import React, { Fragment } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { useIntl } from "react-intl"

import { VISUALIZATION } from "constants/visualizationTypes"

import ComputationRow from "./_components/ComputationRow/ComputationRow"
import ResultsRow from "./_components/ResultsRow/ResultsRow"

import classes from "./LatexComputations.module.scss"

const LatexComputations = ({ statementsRows, visualizationType }) => {
  const intl = useIntl()
  const lastRow = statementsRows[statementsRows.length - 1]

  if (visualizationType === VISUALIZATION.NONE) {
    return (
      <div className={classes["info-title"]}>
        {intl.formatMessage({ id: "empty_result" })}
      </div>
    )
  }

  if (visualizationType === VISUALIZATION.LOOP) {
    return (
      <div
        className={classnames(
          classes["info-title"],
          classes["info-title--error"]
        )}
      >
        <strong>{intl.formatMessage({ id: "forever_loop" })}</strong>&nbsp;
        {intl.formatMessage({ id: "change_var_values" })}
      </div>
    )
  }

  const finalState =
    lastRow.changedVariable !== null ? lastRow.state + 1 : lastRow.state

  return (
    <Fragment>
      {statementsRows.map((statementsRow, index) => (
        <ComputationRow
          key={index}
          index={index}
          statementsRow={statementsRow}
        />
      ))}
      <ResultsRow state={finalState} variables={lastRow.variables} />
    </Fragment>
  )
}

LatexComputations.propTypes = {
  statementsRows: PropTypes.array.isRequired,
  visualizationType: PropTypes.oneOf([
    VISUALIZATION.NONE,
    VISUALIZATION.ALL_STEPS,
    VISUALIZATION.STEP_BY_STEP,
    VISUALIZATION.LOOP,
  ]).isRequired,
}

export default LatexComputations
