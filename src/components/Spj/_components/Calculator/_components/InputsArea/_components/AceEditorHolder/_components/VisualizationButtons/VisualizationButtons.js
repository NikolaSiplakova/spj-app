import React from "react"
import PropTypes from "prop-types"

import Button from "../../../../../../../../../../common/Button/Button"
import { ReactComponent as StepsIcon } from "../../../../../../../../../../styles/icons/steps.svg"
import { ReactComponent as VisualizationIcon } from "../../../../../../../../../../styles/icons/visualization.svg"

import classes from "./VisualizationButtons.module.scss"

const VisualizationButtons = ({ startVisualization }) => (
  <div className={classes["buttons"]}>
    <Button
      icon={<StepsIcon className={classes["icon"]} />}
      isExtended
      label={"Krok po kroku"}
      primary
    />
    <Button
      icon={<VisualizationIcon className={classes["icon"]} />}
      isExtended={false}
      label={"Vizualizácia"}
      onClick={startVisualization}
      primary
    />
  </div>
)

export default VisualizationButtons

VisualizationButtons.propTypes = {
  startVisualization: PropTypes.func.isRequired,
}
