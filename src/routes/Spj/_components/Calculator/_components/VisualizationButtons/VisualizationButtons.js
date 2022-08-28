import React from "react"
import PropTypes from "prop-types"
import { useIntl } from "react-intl"

import { VISUALIZATION } from "constants/visualizationTypes"

import Button from "common/Button/Button"
import { ReactComponent as StepsIcon } from "styles/icons/steps.svg"
import { ReactComponent as VisualizationIcon } from "styles/icons/visualization.svg"

import classes from "./VisualizationButtons.module.scss"

const VisualizationButtons = ({
  debounceLoading,
  hasErrors,
  janeCode,
  setDisplayedStepsCount,
  setVisualizationType,
  startVisualization,
}) => {
  const intl = useIntl()
  const onClickHandle = (visualizationType, count) => {
    setVisualizationType(visualizationType)
    setDisplayedStepsCount(count)
    try {
      startVisualization()
    } catch (err) {
      if (err instanceof RangeError) {
        setVisualizationType(VISUALIZATION.LOOP)
      }

      console.log(err)
    }
  }

  const isButtonDisabled =
    debounceLoading === true || janeCode === "" || hasErrors === true

  return (
    <div className={classes["buttons"]}>
      <Button
        icon={<StepsIcon className={classes["icon"]} />}
        isDisabled={isButtonDisabled}
        isExtended
        label={intl.formatMessage({ id: "step_by_step" })}
        onClick={() => onClickHandle(VISUALIZATION.STEP_BY_STEP, 1)}
        primary
      />
      <Button
        icon={<VisualizationIcon className={classes["icon"]} />}
        isDisabled={isButtonDisabled}
        isExtended
        label={intl.formatMessage({ id: "link_visualization" })}
        onClick={() => onClickHandle(VISUALIZATION.ALL_STEPS, null)}
        primary
      />
    </div>
  )
}

VisualizationButtons.propTypes = {
  debounceLoading: PropTypes.bool.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  janeCode: PropTypes.string.isRequired,
  setDisplayedStepsCount: PropTypes.func.isRequired,
  setVisualizationType: PropTypes.func.isRequired,
  startVisualization: PropTypes.func.isRequired,
}

export default VisualizationButtons
