import React from "react"
import PropTypes from "prop-types"

import AceEditor from "react-ace"
import "ace-builds/src-noconflict/theme-tomorrow"
import SyntaxHighlighter from "./SyntaxHighlighter"

import SpecialSymbolsList from "./_components/SpecialSymbolsList/SpecialSymbolsList"
import FileImporter from "./_components/FileImporter/FileImporter"

import Header from "common/Header/Header"

import { ReactComponent as RefreshIcon } from "styles/icons/refresh.svg"

import classes from "./AceEditorHolder.module.scss"

const AceEditorHolder = ({
  editorValue,
  janeEditorRef,
  setEditorValue,
  setJaneCode,
}) => {
  //ace editor
  const customHighlightMode = new SyntaxHighlighter()

  const renderHeaderActions = () => (
    <div className={classes["header-actions"]}>
      <FileImporter setJaneCode={setJaneCode} />

      <RefreshIcon
        onClick={() => {
          setEditorValue("")
          setJaneCode("")
        }}
        title={"Vymazať program"}
        className={classes["action"]}
      />
    </div>
  )

  const setSpecialSymbol = (symbol) => {
    const editor = janeEditorRef.current.editor
    const cursorPosition = editor.getCursorPosition()
    editor.session.insert(cursorPosition, symbol)
  }

  return (
    <div className={classes["editor-holder"]}>
      <Header action={renderHeaderActions()} title={"Program v jazyku Jane"} />
      <AceEditor
        ref={janeEditorRef}
        style={{
          height: "200px",
          width: "100%",
        }}
        placeholder="Vložte program v jazyku Jane"
        mode={customHighlightMode}
        theme="tomorrow"
        name="jane-editor"
        onChange={setEditorValue}
        fontSize={14}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={editorValue}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 4,
        }}
      />
      <SpecialSymbolsList setSpecialSymbol={setSpecialSymbol} />
    </div>
  )
}

AceEditorHolder.defaultProps = {
  janeEditorRef: null,
}

AceEditorHolder.propTypes = {
  editorValue: PropTypes.string.isRequired,
  janeEditorRef: PropTypes.node,
  setEditorValue: PropTypes.func.isRequired,
  setJaneCode: PropTypes.func.isRequired,
}

export default React.memo(AceEditorHolder)
