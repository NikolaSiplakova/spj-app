import React, { useState, useRef } from "react"
import { SPECIAL_SYMBOLS } from "../../../../../../../../../../constants/specialSymbols"
import { RELATIONAL_OPERATIONS } from "../../../../../../../../../../constants/relationalOperations"
import "./SpecialSymbolsList.scss"
import AceEditor from "react-ace"
import ace from "react-ace"
import "ace-builds/src-noconflict/theme-tomorrow"
import "ace-builds/src-noconflict/mode-javascript"

const SpecialSymbolsList = (props) => {
  const { setText } = props

  const [isSymbolLibraryDisplayed, setIsSymboLibraryDisplayed] = useState(false)

  const toggleSymbolLibrary = () => {
    setIsSymboLibraryDisplayed((current) => current === false)
  }

  const setClassName = (symbol) => {
    if (symbol === SPECIAL_SYMBOLS.AND || symbol === SPECIAL_SYMBOLS.OR) {
      return "symbol symbol--conj"
    }

    if (symbol === SPECIAL_SYMBOLS.DIV || symbol === SPECIAL_SYMBOLS.MOD) {
      return "symbol symbol--div"
    }

    if (
      symbol === SPECIAL_SYMBOLS.EQ ||
      symbol === SPECIAL_SYMBOLS.NEQ ||
      symbol === SPECIAL_SYMBOLS.LT ||
      symbol === SPECIAL_SYMBOLS.LE ||
      symbol === SPECIAL_SYMBOLS.GT ||
      symbol === SPECIAL_SYMBOLS.GE
    ) {
      return "symbol symbol--rel"
    }

    if (symbol === SPECIAL_SYMBOLS.MUL || symbol === SPECIAL_SYMBOLS.SUB) {
      return "symbol symbol--mul"
    }

    return "symbol"
  }

  return (
    <div className="library-holder">
      <div onClick={toggleSymbolLibrary} className="toggle-library">
        Knižnica symbolov &gt;
      </div>
      {isSymbolLibraryDisplayed === true && (
        <div className="symbols-library">
          {Object.values(SPECIAL_SYMBOLS).map((symbol) => {
            return (
              <div
                onClick={() => setText(symbol)}
                className={setClassName(symbol)}
              >
                {symbol}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SpecialSymbolsList
