import React, { useState } from "react"
import PropTypes from "prop-types"

import { VISUALIZATION } from "constants/visualizationTypes"

import ComputationsWindow from "./_components/ComputationsWindow/ComputationsWindow"
import InputsArea from "./_components/InputsArea/InputsArea"
import VisualizationButtons from "./_components/VisualizationButtons/VisualizationButtons"

import classes from "./Calculator.module.scss"

const Calculator = (props) => {
  const {
    inputValues,
    janeCode,
    programVariables,
    setInputValues,
    setJaneCode,
    startVisualization,
    statements,
  } = props

  const [displayedStepsCount, setDisplayedStepsCount] = useState(
    statements.length
  )
  const [visualizationType, setVisualizationType] = useState(VISUALIZATION.NONE)

  return (
    <div className={classes["wrapper"]}>
      <InputsArea
        inputValues={inputValues}
        janeCode={janeCode}
        programVariables={programVariables}
        setInputValues={setInputValues}
        setJaneCode={setJaneCode}
      />

      <VisualizationButtons
        setDisplayedStepsCount={setDisplayedStepsCount}
        setVisualizationType={setVisualizationType}
        startVisualization={startVisualization}
      />

      <ComputationsWindow
        displayedStepsCount={displayedStepsCount}
        setDisplayedStepsCount={setDisplayedStepsCount}
        statementsRows={statements}
        visualizationType={visualizationType}
      />
    </div>
  )
}

Calculator.propTypes = {
  inputValues: PropTypes.array.isRequired,
  janeCode: PropTypes.string.isRequired,
  programVariables: PropTypes.array.isRequired,
  setInputValues: PropTypes.func.isRequired,
  setJaneCode: PropTypes.func.isRequired,
  setVisualizationType: PropTypes.func.isRequired,
  startVisualization: PropTypes.func.isRequired,
  statements: PropTypes.array.isRequired,
}

export default Calculator
