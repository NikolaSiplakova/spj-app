import "./Spj.scss"
import React, { useState } from "react"

import {
  getMyCalculator,
  getPlainCalculator,
  getSyntaxTree,
} from "../../helpers/init"

import TopBar from "./_components/TopBar/TopBar"

import Calculator from "./_components/Calculator/Calculator"

const Spj = () => {
  const [janeCode, setJaneCode] = useState("")
  const [statements, setStatements] = useState([])

  const tree = getSyntaxTree(janeCode)

  //get variables in sentence
  const plainCalculator = getPlainCalculator()
  plainCalculator.visit(tree)
  const programVariables = plainCalculator.getVariables()

  const [inputValues, setInputValues] = useState([])

  //calucalator
  const calculator = getMyCalculator(inputValues)

  const startVisualization = () => {
    calculator.visit(tree)
    setStatements(calculator.getNodes())
  }

  return (
    <div className="holder">
      <TopBar />
      <Calculator
        inputValues={inputValues}
        janeCode={janeCode}
        setJaneCode={setJaneCode}
        startVisualization={startVisualization}
        setInputValues={setInputValues}
        statements={statements}
        programVariables={programVariables}
      />
    </div>
  )
}

export default Spj
