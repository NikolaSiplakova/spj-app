import React, { useCallback, useRef, useMemo, useState, useEffect } from "react"
import _ from "lodash"
import PropTypes from "prop-types"

import useDebounce from "hooks/useDebounce"

import AceEditor from "react-ace"
import "ace-builds/src-noconflict/theme-tomorrow"
import SyntaxHighlighter from "./SyntaxHighlighter"

import SpecialSymbolsList from "./_components/SpecialSymbolsList/SpecialSymbolsList"
import FileImporter from "./_components/FileImporter/FileImporter"

import Header from "common/Header/Header"

import { ReactComponent as RefreshIcon } from "styles/icons/refresh.svg"

import classes from "./AceEditorHolder.module.scss"

const AceEditorHolder = ({ janeCode, setJaneCode }) => {
  //debounce
  const [editorValue, setEditorValue] = useState(janeCode)

  const [debouncedSearch, loading] = useDebounce(editorValue, 5000)

  useEffect(() => {
    setJaneCode(debouncedSearch)
  })

  //ace editor
  const customHighlightMode = new SyntaxHighlighter()

  const janeEditor = useRef(null)

  const setSpecialSymbol = (symbol) => {
    const editor = janeEditor.current.editor
    const cursorPosition = editor.getCursorPosition()

    editor.session.insert(cursorPosition, symbol)
  }

  const renderHeaderActions = () => (
    <div className={classes["header-actions"]}>
      <FileImporter setJaneCode={setJaneCode} />

      <RefreshIcon
        onClick={() => setJaneCode("")}
        title={"Vymazať program"}
        className={classes["action"]}
      />
    </div>
  )

  const renderLoader = () => {
    if (loading === true) {
      return "loading"
    }

    return "pica"
  }
  return (
    <div className={classes["editor-holder"]}>
      <Header action={renderHeaderActions()} title={"Program v jazyku Jane"} />
      <AceEditor
        ref={janeEditor}
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
      {renderLoader()}
    </div>
  )
}

AceEditorHolder.propTypes = {
  janeCode: PropTypes.string.isRequired,
  setJaneCode: PropTypes.func.isRequired,
}

export default React.memo(AceEditorHolder)
