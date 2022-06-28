import antlr4 from "antlr4"

export class SpjErrorListener extends antlr4.error.ErrorListener {
  errors = []

  // eslint-disable-next-line no-unused-vars
  syntaxError(rec, offendingSymbol, line, col, msg, e) {
    const errorInfo = {
      rec,
      offendingSymbol,
      line,
      col,
      msg,
    }

    //extraneous input
    const getExtraneousInputMessge = (msg) => {
      const slicedMessage = msg.slice(msg.indexOf("'"))
      const slicedMessage2 = slicedMessage.slice(0, slicedMessage.indexOf(" "))
      return `Neočakávaný symbol ${slicedMessage2}`
    }

    //mismatched input
    const getMismatchedInputMessage = (offendingSymbol, msg) => {
      const expectedSymbol = msg.split("expecting ")[1]

      if (offendingSymbol === "<EOF>") {
        if (expectedSymbol === "{'(', Var, Num}") {
          return "Je potrebné priradiť premennú alebo číselnú hodnotu"
        }

        if (expectedSymbol === "{'true', 'false', '¬', '(', Var, Num}") {
          return "Je potrebné zadať podmienku"
        }

        if (
          expectedSymbol ===
          "{'repeat', 'for', 'while', 'if', '(', 'skip', Var}"
        ) {
          return "Zadaj príkaz"
        }

        if (expectedSymbol === "{'>', '>=', '<', '<=', '!=', '='}") {
          return "Očakávaný relačný operátor '>', '>=', '<', '<=', '!=', '='"
        }

        return `Očakávaný symbol ${expectedSymbol}`
      }

      return `Nesprávny znak '${offendingSymbol}', očakávaný znak ${expectedSymbol}`
    }

    //MISMATCHED INPUT
    if (msg.includes("mismatched input")) {
      this.errors.push({
        ...errorInfo,
        customMessage: getMismatchedInputMessage(
          errorInfo.offendingSymbol.text,
          msg
        ),
      })
      return
    }

    //assignment
    if (msg.includes("expecting ':='")) {
      this.errors.push({
        ...errorInfo,
        customMessage: "Očakávaný znak priradenia :=",
      })
      return
    }

    //condition
    if (
      msg === "no viable alternative at input '()'" ||
      msg === "no viable alternative at input '('"
    ) {
      this.errors.push({
        ...errorInfo,
        customMessage: "Je potrebné zadať podmienku",
      })
      return
    }

    if (msg.includes("extraneous input ')'")) {
      this.errors.push({
        ...errorInfo,
        customMessage: "Chýbajúci znak '('",
      })
      return
    }

    if (msg.includes("expecting 'then'")) {
      this.errors.push({
        ...errorInfo,
        customMessage: "Očakávaná ďalšia podmienka alebo kľúčové slovo then",
      })
      return
    }

    if (msg === "missing ')' at 'then'") {
      this.errors.push({
        ...errorInfo,
        customMessage: "Chýbajúci znak ')'",
      })
      return
    }

    if (msg.includes("expecting 'else'")) {
      this.errors.push({
        ...errorInfo,
        customMessage: "Očakávané kľúčové slovo else",
      })
      return
    }

    //neocakavany znak

    if (msg.includes("extraneous input")) {
      this.errors.push({
        ...errorInfo,
        customMessage: getExtraneousInputMessge(errorInfo.msg),
      })
      return
    }

    this.errors.push({ ...errorInfo, customMessage: "unknown error" })
    return
  }

  getErrors = () => {
    return this.errors
  }
}

export default SpjErrorListener
