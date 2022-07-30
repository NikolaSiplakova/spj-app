import React, { useRef, useMemo } from "react"
import _ from "lodash"

import "./AceEditorHolder.scss"
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/theme-tomorrow"
import "ace-builds/src-noconflict/mode-javascript"
import SpecialSymbolsList from "./_components/SpecialSymbolsList/SpecialSymbolsList"
import FileImporter from "./_components/FileImporter/FileImporter"
import SyntaxHighlighter from "./SyntaxHighlighter"
import "brace/theme/github"

import classes from "./AceEditorHolder.module.scss"
import Header from "../../../../../../../../common/Header/Header"
import { ReactComponent as UploadIcon } from "../../../../../../../../styles/icons/upload.svg"
import { ReactComponent as RefreshIcon } from "../../../../../../../../styles/icons/refresh.svg"

const AceEditorHolder = (props) => {
  const { janeCode, setJaneCode, startVisualization } = props

  const customHighlightMode = new SyntaxHighlighter()

  const janeEditor = useRef(null)

  const setSpecialSymbol = (symbol) => {
    const editor = janeEditor.current.editor
    const cursorPosition = editor.getCursorPosition()

    editor.session.insert(cursorPosition, symbol)
  }

  const renderHeaderActions = () => (
    <div className={classes["header-actions"]}>
      <UploadIcon
        className={classes["header-actions__action"]}
        title={"Nahrať program"}
      />
      <RefreshIcon
        className={classes["header-actions__action"]}
        onClick={() => setJaneCode("")}
        title={"Vymazať program"}
      />
    </div>
  )
  const setCode = (code) => {
    setJaneCode(code)
  }

  const debouncedSetCode = useMemo(() => _.debounce(setCode, 3000), [setCode])

  return (
    <div>
      <FileImporter setJaneCode={setJaneCode} />

      <div className={classes["editor-holder"]}>
        <Header
          action={renderHeaderActions()}
          title={"Program v jazyku Jane"}
        />
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
          onChange={debouncedSetCode}
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
        <SpecialSymbolsList setSpecialSymbol={setSpecialSymbol} />
        <div className={classes["loader"]}>
          <div className={classes["loader--completed"]}></div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(AceEditorHolder)
