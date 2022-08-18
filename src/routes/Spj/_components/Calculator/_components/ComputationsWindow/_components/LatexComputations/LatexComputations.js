import React, { Fragment } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

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

  if (visualizationType === VISUALIZATION.LOOP) {
    return (
      <div
        className={classnames(
          classes["info-title"],
          classes["info-title--error"]
        )}
      >
        <strong>Detegovaný nekonečený cyklus.</strong> Prosím, zmeň hodnoty
        premenných alebo program v jayzku Jane a skús to ešte raz.
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
