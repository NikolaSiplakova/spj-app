import "./ComputationRow.scss"

const ComputationRow = (props) => {
  const { statement } = props
  const printout = statement.printout === null ? "" : statement.printout

  return (
    <div className="computation-step">
      <div className="computation-step__printout">{`< ${printout}	s${statement.state}>`}</div>

      {statement.hasStateChanged === true && (
        <div className="computation-step__state">
          <div className="state">{`s${statement.state}`}</div>
          <div>
            {statement.variables.map((variable, index) => (
              <div key={variable.varName + index}>
                {`${variable.varName} -> ${variable.value}`}
              </div>
            ))}{" "}
          </div>
        </div>
      )}
    </div>
  )
}

export default ComputationRow
