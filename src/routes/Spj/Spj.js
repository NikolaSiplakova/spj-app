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
import TopBar from "common/TopBar/TopBar"

const Spj = () => {
  const [janeCode, setJaneCode] = useState(
    "if x<y then (x:=y; y:=y+x;) else x:=y+y;"
  )
  const [statements, setStatements] = useState([])

  //parser
  const parser = getParser(janeCode)
  parser.removeErrorListeners()

  const errorListener = new SpjErrorListener()
  parser.addErrorListener(errorListener)

  const tree = parser.prog()

  //1. visitor
  const plainCalculator = getPlainCalculator()
  plainCalculator.visit(tree)
  const programVariables = plainCalculator.getVariables()

  const [inputValues, setInputValues] = useState([])

  //2. visitor
  const calculator = getMyCalculator(inputValues)

  const startVisualization = () => {
    calculator.visit(tree)
    setStatements(calculator.getNodes())
  }

  return (
    <div>
      <TopBar />
      <Calculator
        inputValues={inputValues}
        janeCode={janeCode}
        programVariables={programVariables}
        setInputValues={setInputValues}
        setJaneCode={setJaneCode}
        startVisualization={startVisualization}
        statements={statements}
      />
      {janeCode !== "" && <ErrorHolder errors={errorListener.errors} />}
    </div>
  )
}

export default Spj
