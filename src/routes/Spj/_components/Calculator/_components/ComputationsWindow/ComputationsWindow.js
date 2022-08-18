import React, { useState } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import { VISUALIZATION } from "constants/visualizationTypes"

import Header from "common/Header/Header"
import HighlightInfo from "./_components/HighlightInfo/HighlightInfo"
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

  const statementsToDisplay =
    displayedStepsCount === null
      ? statementsRows
      : statementsRows.slice(0, displayedStepsCount)

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
        <div className={classes["highlight"]}>
          <InfoIcon
            className={classes["actions__action"]}
            title={"Pravidlá zvýrazňovania"}
          />
          <div className={classes["highlight__window"]}>
            <HighlightInfo />
          </div>
        </div>
      </div>
    )
  }

  const getWindowHeader = () => {
    if (visualizationType === VISUALIZATION.STEP_BY_STEP) {
      return "Vizualizácia krok po kroku"
    }

    return "Vizualizácia"
  }

  return (
    <div className={classes["computations-window"]}>
      <Header action={renderActions()} title={getWindowHeader()} />
      <div
        className={classnames(classes["table"], {
          [classes["table--whole"]]: isWholeTable === true,
          [classes["table--info"]]:
            visualizationType === VISUALIZATION.NONE ||
            visualizationType === VISUALIZATION.LOOP,
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
  displayedStepsCount: PropTypes.number,
  setDisplayedStepsCount: PropTypes.func.isRequired,
  statementsRows: PropTypes.array.isRequired,
  visualizationType: PropTypes.oneOf([
    VISUALIZATION.NONE,
    VISUALIZATION.ALL_STEPS,
    VISUALIZATION.STEP_BY_STEP,
    VISUALIZATION.LOOP,
  ]).isRequired,
}

ComputationsWindow.defualtProps = {
  displayedStepsCount: null,
}

export default ComputationsWindow
