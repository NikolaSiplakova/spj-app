import "./ComputationRow.scss"
import MathJax from "react-mathjax"

const ComputationRow = ({ statementsRow }) => {
  const stateChange = `s\_${statementsRow.state + 1} = s\_${
    statementsRow.state
  } \\Big[ ${statementsRow.changedVariable} \\Big]`

  const oneRowStatements = statementsRow.printout

  return (
    <div className="computation-step">
      <div>
        <MathJax.Provider>
          <MathJax.Node inline formula={`\\Big \\langle`} />
          {oneRowStatements.map((statementParts, index) => (
            <div
              key={index}
              className={`statement ${statementParts.statementType}`}
            >
              {Array.from(statementParts.oneStatementPrintout).map(
                (part, index) => (
                  <div key={index} className={`statement ${part.type}`}>
                    <MathJax.Node inline formula={`${part.text} \\ `} />
                  </div>
                )
              )}
            </div>
          ))}
          <MathJax.Node
            inline
            formula={`\\ s\_${statementsRow.state} \\Big \\rangle`}
          />
        </MathJax.Provider>
      </div>
      {statementsRow.changedVariable !== null && (
        <div className="computation-step__state">
          <MathJax.Provider>
            <MathJax.Node inline formula={stateChange} />
          </MathJax.Provider>
        </div>
      )}
    </div>
  )
}

export default ComputationRow
