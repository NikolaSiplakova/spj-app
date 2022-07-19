import "./ComputationRow.scss"
import { MathJaxContext, MathJax } from "better-react-mathjax"
import { type } from "@testing-library/user-event/dist/type"

const ComputationRow = ({
  rowsCount,
  setTypesetRowCount,
  statementsRow,
  typeSetRowCount,
}) => {
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
        <div className="computation-step">
          <div>
            {`$\\Big \\langle$`}
            {oneRowStatements.map((statementParts, index) => (
              <div
                key={index}
                className={`statement ${statementParts.statementType}`}
              >
                {Array.from(statementParts.oneStatementPrintout).map(
                  (part, index) => (
                    <div key={index} className={`statement ${part.type}`}>
                      {`$${part.text} \\ $`}
                    </div>
                  )
                )}
              </div>
            ))}
            {`$\\ s\_${statementsRow.state} \\Big \\rangle$`}
          </div>
          {statementsRow.changedVariable !== null && (
            <div className="computation-step__state">{`$${stateChange}$`}</div>
          )}
        </div>
      </MathJax>
    </MathJaxContext>
  )
}

export default ComputationRow
