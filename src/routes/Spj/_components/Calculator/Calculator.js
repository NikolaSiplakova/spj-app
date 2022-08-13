import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import useDebounce from "hooks/useDebounce"

import { VISUALIZATION } from "constants/visualizationTypes"

import ComputationsWindow from "./_components/ComputationsWindow/ComputationsWindow"
import InputsArea from "./_components/InputsArea/InputsArea"
import VisualizationButtons from "./_components/VisualizationButtons/VisualizationButtons"

import classes from "./Calculator.module.scss"

const Calculator = (props) => {
  const {
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

  //debounce
  const [editorValue, setEditorValue] = useState(janeCode)
  const [debouncedSearch, debounceLoading] = useDebounce(editorValue, 1000)

  useEffect(() => {
    setJaneCode(debouncedSearch)
  })

  return (
    <div className={classes["wrapper"]}>
      <InputsArea
        debounceLoading={debounceLoading}
        editorValue={editorValue}
        janeCode={janeCode}
        programVariables={programVariables}
        setEditorValue={setEditorValue}
        setInputValues={setInputValues}
        setJaneCode={setJaneCode}
      />

      <VisualizationButtons
        debounceLoading={debounceLoading}
        janeCode={janeCode}
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
  janeCode: PropTypes.string.isRequired,
  programVariables: PropTypes.array.isRequired,
  setInputValues: PropTypes.func.isRequired,
  setJaneCode: PropTypes.func.isRequired,
  startVisualization: PropTypes.func.isRequired,
  statements: PropTypes.array.isRequired,
}

export default Calculator
