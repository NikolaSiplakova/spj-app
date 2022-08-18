import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"

import useDebounce from "hooks/useDebounce"

import { VISUALIZATION } from "constants/visualizationTypes"

import ComputationsWindow from "./_components/ComputationsWindow/ComputationsWindow"
import ErrorHolder from "./_components/ErrorHolder/ErrorHolder"
import InputsArea from "./_components/InputsArea/InputsArea"
import VisualizationButtons from "./_components/VisualizationButtons/VisualizationButtons"

import classes from "./Calculator.module.scss"

const Calculator = (props) => {
  const {
    errors,
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

  const setCursorPositionToError = (row, column) => {
    const editor = janeEditorRef.current.editor

    const pos = {
      row,
      column,
    }

    editor.moveCursorToPosition(pos)
    editor.clearSelection()
  }

  //ace editor
  const janeEditorRef = useRef(null)

  return (
    <div className={classes["wrapper"]}>
      <InputsArea
        editorValue={editorValue}
        janeEditorRef={janeEditorRef}
        programVariables={programVariables}
        setEditorValue={setEditorValue}
        setInputValues={setInputValues}
        setJaneCode={setJaneCode}
        setVisualizationType={setVisualizationType}
      />

      {janeCode !== "" && errors.length !== 0 && (
        <ErrorHolder
          errors={errors}
          setCursorPositionToError={setCursorPositionToError}
        />
      )}

      <VisualizationButtons
        debounceLoading={debounceLoading}
        hasErrors={errors.length > 0}
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
  errors: PropTypes.array.isRequired,
  janeCode: PropTypes.string.isRequired,
  programVariables: PropTypes.array.isRequired,
  setInputValues: PropTypes.func.isRequired,
  setJaneCode: PropTypes.func.isRequired,
  startVisualization: PropTypes.func.isRequired,
  statements: PropTypes.array.isRequired,
}

export default Calculator
