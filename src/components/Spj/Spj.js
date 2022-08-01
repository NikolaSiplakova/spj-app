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
  const [janeCode, setJaneCode] = useState(
    "x:=a+b; y:=a*b; while ¬(y<=a+b) do (a:=a+1; x:=a+b;);"
  )
  const [statements, setStatements] = useState([])
  const [isComputed, setIsComputed] = useState(false)

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
    setIsComputed(true)
  }

  return (
    <div>
      <TopBar />
      <Calculator
        inputValues={inputValues}
        janeCode={janeCode}
        setJaneCode={setJaneCode}
        startVisualization={startVisualization}
        setInputValues={setInputValues}
        isComputed={isComputed}
        statements={statements}
        programVariables={programVariables}
      />
      {janeCode !== "" && <ErrorHolder errors={errorListener.errors} />}
    </div>
  )
}

export default Spj
