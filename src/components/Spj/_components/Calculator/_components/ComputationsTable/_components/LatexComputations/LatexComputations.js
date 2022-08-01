import React, { Fragment } from "react"

import ComputationRow from "./_components/ComputationRow/ComputationRow"
import ResultsRow from "./_components/ResultsRow/ResultsRow"

const ComputationsTable = ({ isComputed, statementsRows }) => {
  const lastRow = statementsRows[statementsRows.length - 1]

  return (
    <Fragment>
      {statementsRows.map((statementsRow, index) => (
        <ComputationRow
          key={index}
          index={index}
          statementsRow={statementsRow}
        />
      ))}
      <ResultsRow state={lastRow.state} variables={lastRow.variables} />
    </Fragment>
  )
}

export default ComputationsTable
