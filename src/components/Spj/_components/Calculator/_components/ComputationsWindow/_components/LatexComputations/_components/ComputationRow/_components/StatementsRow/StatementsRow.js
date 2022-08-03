import { MathJaxContext, MathJax } from "better-react-mathjax"
import classnames from "classnames"

import classes from "./StatementsRow.module.scss"

const StatementsRow = ({ statementsRow }) => {
  const stateChange = `s\_${statementsRow.state + 1} = s\_${
    statementsRow.state
  } \\Big[ ${statementsRow.changedVariable} \\Big]`

  const oneRowStatements = statementsRow.printout

  const config = {
    tex2jax: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"],
      ],
    },
    messageStyle: "none",
  }

  return (
    <MathJaxContext
      version={2}
      config={config}
      onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
    >
      <MathJax inline dynamic hideUntilTypeset={"first"}>
        <div className={classes["statements-row"]}>
          <div>
            {`$\\Big \\langle$`}
            {oneRowStatements.map((statementParts, index) => (
              <div
                key={index}
                className={classnames(
                  classes["statement"],
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
          </div>
          {statementsRow.changedVariable !== null && (
            <div
              className={classes["statements-row__state"]}
            >{`$${stateChange}$`}</div>
          )}
        </div>
      </MathJax>
    </MathJaxContext>
  )
}

export default StatementsRow
