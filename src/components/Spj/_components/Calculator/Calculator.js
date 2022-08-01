import React from "react"
import PropTypes from "prop-types"

import InputsArea from "./_components/InputsArea/InputsArea"
import ComputationsTable from "./_components/ComputationsTable/ComputationsTable"

import classes from "./Calculator.module.scss"

const Calculator = (props) => {
  const {
    inputValues,
    isComputed,
    janeCode,
    programVariables,
    setInputValues,
    setJaneCode,
    startVisualization,
    statements,
  } = props

  return (
    <div className={classes["wrapper"]}>
      <InputsArea
        inputValues={inputValues}
        janeCode={janeCode}
        programVariables={programVariables}
        setInputValues={setInputValues}
        setJaneCode={setJaneCode}
        startVisualization={startVisualization}
      />
      <ComputationsTable isComputed={isComputed} statementsRows={statements} />
    </div>
  )
}

Calculator.propTypes = {
  inputValues: PropTypes.array.isRequired,
  isComputed: PropTypes.bool.isRequired,
  janeCode: PropTypes.string.isRequired,
  programVariables: PropTypes.array.isRequired,
  setInputValues: PropTypes.func.isRequired,
  setJaneCode: PropTypes.func.isRequired,
  startVisualization: PropTypes.func.isRequired,
  statements: PropTypes.array.isRequired,
}

export default Calculator
