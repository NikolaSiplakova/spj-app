import "./Spj.scss"
import React, { useState } from "react"
import SpjErrorListener from "../../antlr_files/errors/SpjErrorListener"

import {
  getMyCalculator,
  getPlainCalculator,
  getParser,
} from "../../helpers/init"

import ErrorHolder from "./_components/ErrorHolder/ErrorHolder"
import Calculator from "./_components/Calculator/Calculator"
import TopBar from "./_components/TopBar/TopBar"

const Spj = () => {
  const [janeCode, setJaneCode] = useState("")
  const [statements, setStatements] = useState([])

  //parser
  const parser = getParser(janeCode)
  parser.removeErrorListeners()

  const errorListener = new SpjErrorListener()
  parser.addErrorListener(errorListener)

  const tree = parser.prog()

  console.log("Spj errors")
  console.log(errorListener.getErrors())

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
      {janeCode !== "" && <ErrorHolder errors={errorListener.errors} />}
    </div>
  )
}

export default Spj
