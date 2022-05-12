import React from "react"
import PropTypes from "prop-types"

import InputsArea from "./_components/InputsArea/InputsArea"
import ComputationsTable from "./_components/ComputationsTable/ComputationsTable"

import "./Calculator.scss"

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

  return (
    <div>
      <InputsArea
        inputValues={inputValues}
        janeCode={janeCode}
        programVariables={programVariables}
        setInputValues={setInputValues}
        setJaneCode={setJaneCode}
        startVisualization={startVisualization}
      />
      <ComputationsTable statements={statements} />
    </div>
  )
}

Calculator.propTypes = {
  inputValues: PropTypes.array.isRequired,
  janeCode: PropTypes.string.isRequired,
  programVariables: PropTypes.array.isRequired,
  setInputValues: PropTypes.func.isRequired,
  setJaneCode: PropTypes.func.isRequired,
  startVisualization: PropTypes.func.isRequired,
}

export default Calculator
