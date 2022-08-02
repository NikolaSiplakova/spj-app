import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { VISUALIZATION } from "constants/visualizationTypes"

import ComputationRow from "./_components/ComputationRow/ComputationRow"
import ResultsRow from "./_components/ResultsRow/ResultsRow"

import classes from "./LatexComputations.module.scss"

const LatexComputations = ({ statementsRows, visualizationType }) => {
  const lastRow = statementsRows[statementsRows.length - 1]

  if (visualizationType === VISUALIZATION.NONE) {
    return (
      <div className={classes["info-title"]}>
        Pre zobrazenie významu zadaného programu je potrebné spustiť
        vizualizáciu.
      </div>
    )
  }

  return (
    <Fragment>
      {statementsRows.map((statementsRow, index) => (
        <ComputationRow
          key={index}
          index={index}
          statementsRow={statementsRow}
        />
      ))}
      <ResultsRow state={lastRow.state} variables={lastRow.variables} />
    </Fragment>
  )
}

LatexComputations.propTypes = {
  statementsRows: PropTypes.array.isRequired,
  visualizationType: PropTypes.string.isRequired,
}

export default LatexComputations
