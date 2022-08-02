import React, { useState } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import { VISUALIZATION } from "constants/visualizationTypes"

import Header from "common/Header/Header"
import LatexComputations from "./_components/LatexComputations/LatexComputations"
import StepByStep from "./_components/StepByStep/StepByStep"

import { ReactComponent as CloseIcon } from "styles/icons/close.svg"
import { ReactComponent as OpenIcon } from "styles/icons/open.svg"
import { ReactComponent as InfoIcon } from "styles/icons/info.svg"

import classes from "./ComputationsWindow.module.scss"

const ComputationsWindow = ({
  displayedStepsCount,
  setDisplayedStepsCount,
  statementsRows,
  visualizationType,
}) => {
  const [isWholeTable, setIsWholeTable] = useState(false)

  const statementsToDisplay = statementsRows.slice(0, displayedStepsCount)

  const toggleWholeWindow = () => {
    setIsWholeTable((current) => current === false)
  }

  const renderArrow = () => {
    if (isWholeTable === true) {
      return (
        <CloseIcon
          className={classes["actions__action"]}
          onClick={toggleWholeWindow}
        />
      )
    }

    return (
      <OpenIcon
        className={classes["actions__action"]}
        onClick={toggleWholeWindow}
      />
    )
  }

  const renderActions = () => {
    if (visualizationType === VISUALIZATION.NONE) {
      return
    }

    return (
      <div className={classes["actions"]}>
        {renderArrow()}
        <InfoIcon
          className={classes["actions__action"]}
          title={"Pravidlá zvýrazňovania"}
        />
      </div>
    )
  }

  return (
    <div className={classes["computations-window"]}>
      <Header action={renderActions()} title={"Vizualizácia krokov programu"} />
      <div
        className={classnames(classes["table"], {
          [classes["table--whole"]]: isWholeTable === true,
          [classes["table--info"]]: visualizationType === VISUALIZATION.NONE,
        })}
      >
        <LatexComputations
          statementsRows={statementsToDisplay}
          visualizationType={visualizationType}
        />
      </div>
      {visualizationType === VISUALIZATION.STEP_BY_STEP && (
        <StepByStep
          allStepsCount={statementsRows.length}
          displayedStepsCount={displayedStepsCount}
          setDisplayedStepsCount={setDisplayedStepsCount}
        />
      )}
    </div>
  )
}

ComputationsWindow.propTypes = {
  displayedStepsCount: PropTypes.number.isRequired,
  setDisplayedStepsCount: PropTypes.func.isRequired,
  statementsRow: PropTypes.array.isRequired,
  visualizationType: PropTypes.string.isRequired,
}

export default ComputationsWindow
