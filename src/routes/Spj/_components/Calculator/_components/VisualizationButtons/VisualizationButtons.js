import React from "react"
import PropTypes from "prop-types"

import { VISUALIZATION } from "constants/visualizationTypes"

import Button from "common/Button/Button"
import { ReactComponent as StepsIcon } from "styles/icons/steps.svg"
import { ReactComponent as VisualizationIcon } from "styles/icons/visualization.svg"

import classes from "./VisualizationButtons.module.scss"

const VisualizationButtons = ({
  setDisplayedStepsCount,
  setVisualizationType,
  startVisualization,
}) => {
  const onClickHandle = (visualizationType, count) => {
    setVisualizationType(visualizationType)
    setDisplayedStepsCount(count)
    startVisualization()
  }

  const isButtonDisabled = true

  return (
    <div className={classes["buttons"]}>
      <Button
        icon={<StepsIcon className={classes["icon"]} />}
        isDisabled={isButtonDisabled}
        isExtended
        label={"Krok po kroku"}
        onClick={() => onClickHandle(VISUALIZATION.STEP_BY_STEP, 1)}
        primary
      />
      <Button
        icon={<VisualizationIcon className={classes["icon"]} />}
        isDisabled={isButtonDisabled}
        isExtended
        label={"Vizualizácia"}
        onClick={() => onClickHandle(VISUALIZATION.ALL_STEPS, null)}
        primary
      />
    </div>
  )
}

VisualizationButtons.propTypes = {
  setDisplayedStepsCount: PropTypes.func.isRequired,
  setVisualizationType: PropTypes.func.isRequired,
  startVisualization: PropTypes.func.isRequired,
}

export default VisualizationButtons
