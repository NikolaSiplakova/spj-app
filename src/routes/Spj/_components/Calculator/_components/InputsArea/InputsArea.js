import React from "react"
import PropTypes from "prop-types"

import VariablesForm from "./_components/VariablesForm/VariablesForm"
import AceEditorHolder from "./_components/AceEditorHolder/AceEditorHolder"
import NoVariables from "./_components/NoVariables/NoVariables"

import classes from "./InputsArea.module.scss"

const InputsArea = (props) => {
  const {
    editorValue,
    programVariables,
    setEditorValue,
    setInputValues,
    setJaneCode,
  } = props

  const renderVariablesForm = () => {
    if (programVariables.length === 0) {
      return <NoVariables />
    }

    return (
      <VariablesForm
        programVariables={programVariables}
        setInputValues={setInputValues}
      />
    )
  }
  return (
    <div className={classes["inputs-area"]}>
      <AceEditorHolder
        editorValue={editorValue}
        setEditorValue={setEditorValue}
        setJaneCode={setJaneCode}
      />
      {renderVariablesForm()}
    </div>
  )
}

InputsArea.propTypes = {
  editorValue: PropTypes.string.isRequired,
  programVariables: PropTypes.array.isRequired,
  setEditorValue: PropTypes.func.isRequired,
  setInputValues: PropTypes.func.isRequired,
  setJaneCode: PropTypes.func.isRequired,
}

export default InputsArea
