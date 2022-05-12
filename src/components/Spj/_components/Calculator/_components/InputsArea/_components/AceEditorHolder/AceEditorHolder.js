import React, { useState, useRef } from "react"
import "./AceEditorHolder.scss"
import AceEditor from "react-ace"
import ace from "react-ace"
import "ace-builds/src-noconflict/theme-tomorrow"
import "ace-builds/src-noconflict/mode-javascript"
import SpecialSymbolsList from "./_components/SpecialSymbolsList/SpecialSymbolsList"
import FileImporter from "./_components/FileImporter/FileImporter"

const AceEditorHolder = (props) => {
  const {
    janeCode,
    setJaneCode,
    startVisualization,
    areVariablesSet,
    setAreVariablesSet,
  } = props

  const janeEditor = useRef(null)

  const setText = (symbol) => {
    const editor = janeEditor.current.editor
    const cursorPosition = editor.getCursorPosition()

    editor.session.insert(cursorPosition, symbol)
  }

  const getButtonClassName = () => {
    if (areVariablesSet === false) {
      return "btn btn--disabled"
    }
    return "btn"
  }

  return (
    <div>
      <FileImporter setJaneCode={setJaneCode} />

      <div className="editor-holder">
        <AceEditor
          ref={janeEditor}
          style={{
            height: "250px",
            width: "100%",
          }}
          placeholder="Vložte program v jazyku Jane"
          mode="javascript"
          theme="tomorrow"
          name="jane-editor"
          onChange={(currentCode) => setJaneCode(currentCode)}
          fontSize={14}
          showPrintMargin={false}
          showGutter={true}
          highlightActiveLine={true}
          value={janeCode}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 4,
          }}
        />
      </div>
      <SpecialSymbolsList setText={setText} />
      <div className="btn-holder">
        <button
          className={getButtonClassName()}
          type="button"
          onClick={startVisualization}
          disabled={areVariablesSet === false}
        >
          Spustiť vizualizáciu
        </button>
      </div>
    </div>
  )
}

export default AceEditorHolder
