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
  statementsRows,
}) => {
  const onClickHandle = (count, visualizationType) => {
    setDisplayedStepsCount(count)
    startVisualization()
    setVisualizationType(visualizationType)
  }

  return (
    <div className={classes["buttons"]}>
      <Button
        icon={<StepsIcon className={classes["icon"]} />}
        isExtended
        label={"Krok po kroku"}
        onClick={() => onClickHandle(1, VISUALIZATION.STEP_BY_STEP)}
        primary
      />
      <Button
        icon={<VisualizationIcon className={classes["icon"]} />}
        isExtended={false}
        label={"Vizualizácia"}
        onClick={() =>
          onClickHandle(statementsRows.length, VISUALIZATION.ALL_STEPS)
        }
        primary
      />
    </div>
  )
}

VisualizationButtons.propTypes = {
  setDisplayedStepsCount: PropTypes.func.isRequired,
  setVisualizationType: PropTypes.func.isRequired,
  startVisualization: PropTypes.func.isRequired,
  statementsRows: PropTypes.array.isRequired,
}

export default VisualizationButtons
