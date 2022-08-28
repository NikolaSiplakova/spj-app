import React from "react"
import PropTypes from "prop-types"
import { useIntl } from "react-intl"

import AceEditor from "react-ace"
import "ace-builds/src-noconflict/theme-tomorrow"
import SyntaxHighlighter from "./SyntaxHighlighter"

import { VISUALIZATION } from "constants/visualizationTypes"

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
  setVisualizationType,
}) => {
  //ace editor
  const customHighlightMode = new SyntaxHighlighter()
  const intl = useIntl()
  const renderHeaderActions = () => (
    <div className={classes["header-actions"]}>
      <FileImporter setJaneCode={setJaneCode} />

      <RefreshIcon
        onClick={() => {
          setEditorValue("")
          setJaneCode("")
          setVisualizationType(VISUALIZATION.NONE)
          janeEditorRef.current.editor.focus()
        }}
        title={intl.formatMessage({ id: "delete_program" })}
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
      <Header
        action={renderHeaderActions()}
        title={intl.formatMessage({ id: "jane_code" })}
      />
      <AceEditor
        ref={janeEditorRef}
        style={{
          height: "200px",
          width: "100%",
        }}
        placeholder={intl.formatMessage({ id: "insert_jane_code" })}
        mode={customHighlightMode}
        theme="tomorrow"
        name="jane-editor"
        onChange={(value) => {
          setEditorValue(value)
          setVisualizationType(VISUALIZATION.NONE)
        }}
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
  janeEditorRef: PropTypes.object,
  setEditorValue: PropTypes.func.isRequired,
  setJaneCode: PropTypes.func.isRequired,
  setVisualizationType: PropTypes.func.isRequired,
}

export default React.memo(AceEditorHolder)
