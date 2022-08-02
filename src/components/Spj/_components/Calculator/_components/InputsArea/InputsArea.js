import React from "react"

import VariablesForm from "./_components/VariablesForm/VariablesForm"
import AceEditorHolder from "./_components/AceEditorHolder/AceEditorHolder"
import NoVariables from "./_components/NoVariables/NoVariables"

import classes from "./InputsArea.module.scss"

const InputsArea = (props) => {
  const {
    inputValues,
    janeCode,
    programVariables,
    setInputValues,
    setJaneCode,
  } = props

  const renderVariablesForm = () => {
    if (programVariables.length === 0) {
      return <NoVariables />
    }

    return (
      <VariablesForm
        inputValues={inputValues}
        programVariables={programVariables}
        setInputValues={setInputValues}
      />
    )
  }
  return (
    <div className={classes["inputs-area"]}>
      <AceEditorHolder janeCode={janeCode} setJaneCode={setJaneCode} />
      <div className={classes["variables-form"]}>
        <div className={classes["vars-holder__title"]}>
          Hodnoty premenných programu
        </div>
        {renderVariablesForm()}
      </div>
    </div>
  )
}

export default InputsArea
