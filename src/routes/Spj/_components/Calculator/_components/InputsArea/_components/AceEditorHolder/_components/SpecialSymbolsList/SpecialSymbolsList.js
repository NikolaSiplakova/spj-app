import React from "react"
import classnames from "classnames"

import { SPECIAL_SYMBOLS } from "../../../../../../../../../../constants/specialSymbols"

import classes from "./SpecialSymbolsList.module.scss"

const SpecialSymbolsList = ({ setSpecialSymbol }) => (
  <div className={classes["symbols"]}>
    {Object.values(SPECIAL_SYMBOLS).map((symbol, i) => {
      return (
        <div
          onClick={() => setSpecialSymbol(symbol)}
          className={classnames(classes["symbol"], {
            [classes["symbol--conj"]]:
              symbol === SPECIAL_SYMBOLS.AND || symbol === SPECIAL_SYMBOLS.OR,
            [classes["symbol--div"]]:
              symbol === SPECIAL_SYMBOLS.DIV || symbol === SPECIAL_SYMBOLS.MOD,
            [classes["symbol--rel"]]:
              symbol === SPECIAL_SYMBOLS.EQ ||
              symbol === SPECIAL_SYMBOLS.NEQ ||
              symbol === SPECIAL_SYMBOLS.LT ||
              symbol === SPECIAL_SYMBOLS.LE ||
              symbol === SPECIAL_SYMBOLS.GT ||
              symbol === SPECIAL_SYMBOLS.GE,
            [classes["symbol--mul"]]:
              symbol === SPECIAL_SYMBOLS.MUL || symbol === SPECIAL_SYMBOLS.SUB,
          })}
          key={i}
        >
          {symbol}
        </div>
      )
    })}
  </div>
)

export default SpecialSymbolsList
