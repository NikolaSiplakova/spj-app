import PropTypes from "prop-types"

import { STATEMENT_TYPES } from "./statementTypes"

export const statementShape = {
  changedVariables: PropTypes.string.isRequired,
  printout: PropTypes.array.isRequired,
  state: PropTypes.number.isRequired,
  variables: PropTypes.array.isRequired,
}

export const printoutShape = {
  oneStatementPrintout: PropTypes.array.isRequired,
  statementType: PropTypes.oneOf([
    STATEMENT_TYPES.ASSIGN,
    STATEMENT_TYPES.DO,
    STATEMENT_TYPES.FOR,
    STATEMENT_TYPES.IF,
    STATEMENT_TYPES.REPEAT,
    STATEMENT_TYPES.SKIP,
    STATEMENT_TYPES.WHILE,
  ]).isRequired,
}

export const oneStatementPrintoutShape = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    STATEMENT_TYPES.ASSIGN,
    STATEMENT_TYPES.DO,
    STATEMENT_TYPES.FOR,
    STATEMENT_TYPES.IF,
    STATEMENT_TYPES.REPEAT,
    STATEMENT_TYPES.SKIP,
    STATEMENT_TYPES.WHILE,
  ]).isRequired,
}

export const variableShape = {
  value: PropTypes.number.isRequired,
  varName: PropTypes.string.isRequired,
}
