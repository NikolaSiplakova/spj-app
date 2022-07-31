import React, { useState } from "react"
import "./InputsArea.scss"
import VariablesForm from "./_components/VariablesForm/VariablesForm"
import AceEditorHolder from "./_components/AceEditorHolder/AceEditorHolder"
import NoVariables from "./_components/NoVariables/NoVariables"

const InputsArea = (props) => {
  const {
    inputValues,
    janeCode,
    programVariables,
    setInputValues,
    setJaneCode,
    startVisualization,
  } = props

  const renderFormSection = () => {
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
    <div className="inputs-area">
      <AceEditorHolder
        janeCode={janeCode}
        setJaneCode={setJaneCode}
        startVisualization={startVisualization}
      />
      <div className="vars-holder">
        <div className="vars-holder__title">Hodnoty premenných programu</div>
        {renderFormSection()}
      </div>
    </div>
  )
}

export default InputsArea
