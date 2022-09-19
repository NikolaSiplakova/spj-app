import React, { useEffect, useState } from "react"
import SpjErrorListener from "antlr_files/errors/SpjErrorListener"
import antlr4 from "antlr4"
import SpjPlainCalculatorVisitor from "antlr_files/SpjPlainCalculatorVisitor"
import SpjLexer from "antlr_files/SpjLexer"
import SpjParser from "antlr_files/SpjParser"
import SpjCalculatorVisitor from "antlr_files/SpjCalculatorVisitor"

import { inputTexts } from "constants/inputTexts"

import Calculator from "./_components/Calculator/Calculator"
import TopBar from "common/TopBar/TopBar"

import { useLocation } from "react-router-dom"

const Spj = (props) => {
  const location = useLocation()

  const [janeCode, setJaneCode] = useState(
    location.state?.initialJaneCode ?? ""
  )
  const [statements, setStatements] = useState([])

  //errors
  const errorListener = new SpjErrorListener()

  //lexer
  const chars = new antlr4.InputStream(janeCode)
  const lexer = new SpjLexer(chars)
  lexer.strictMode = false
  const tokens = new antlr4.CommonTokenStream(lexer)
  const parser = new SpjParser(tokens)

  lexer.removeErrorListeners()
  lexer.addErrorListener(errorListener)

  //parser
  parser.removeErrorListeners()
  parser.addErrorListener(errorListener)

  const tree = parser.prog()

  //1. visitor
  const plainCalculator = new SpjPlainCalculatorVisitor()
  plainCalculator.visit(tree)
  const programVariables = plainCalculator.getVariables()

  const [inputValues, setInputValues] = useState([])

  useEffect(() => {
    if (location.state !== null) {
      console.log("if")
      console.log(location.state)
      setInputValues(location.state.initialValues)
      window.history.replaceState(null, "")
      console.log(location.state)
      return
    }
    setJaneCode("")
    setInputValues(programVariables)
  }, [location.state])

  const getProgramVariables = () => {
    return programVariables.map((programVariable, i) =>
      Object.assign({}, programVariable, inputValues[i])
    )
  }
  //2. visitor

  const calculator = new SpjCalculatorVisitor(inputValues)

  const startVisualization = () => {
    calculator.visit(tree)
    setStatements(calculator.getNodes())
  }

  return (
    <div>
      <TopBar language={props.language} setLanguage={props.setLanguage} />
      <Calculator
        errors={errorListener.errors}
        inputValues={inputValues}
        janeCode={janeCode}
        programVariables={getProgramVariables()}
        setInputValues={setInputValues}
        setJaneCode={setJaneCode}
        startVisualization={startVisualization}
        statements={statements}
      />
    </div>
  )
}

export default Spj
