import classnames from "classnames"
import PropTypes from "prop-types"

import { MathJax } from "better-react-mathjax"

import classes from "./StatementsRow.module.scss"

const StatementsRow = ({ statementsRow }) => {
  const oneRowStatements = statementsRow.printout

  return (
    <MathJax>
      {`$\\Big \\langle$`}
      {oneRowStatements.map((statementParts, index) => (
        <div
          key={index}
          className={classnames(
            classes["statement"],
            classes["statement--big"],
            classes[`${statementParts.statementType}`]
          )}
        >
          {Array.from(statementParts.oneStatementPrintout).map(
            (part, index) => (
              <div
                key={index}
                className={classnames(
                  classes["statement"],
                  classes[`${part.type}`]
                )}
              >
                {`$${part.text} \\ $`}
              </div>
            )
          )}
        </div>
      ))}
      {`$\\ s\_${statementsRow.state} \\Big \\rangle \\hspace{.5cm} \\Longrightarrow$`}
    </MathJax>
  )
}

StatementsRow.propTypes = {
  statementsRow: PropTypes.object.isRequired,
}

export default StatementsRow
