import { useState } from "react"
import "./ComputationsTable.scss"
import ComputationRow from "./_components/ComputationRow/ComputationRow"

const ComputationsTable = ({ statementsRows }) => {
  const [typeSetRowCount, setTypesetRowCount] = useState(0)
  return (
    <div className="computations">
      {statementsRows.map((statementsRow, index) => (
        <ComputationRow
          key={index}
          setTypesetRowCount={setTypesetRowCount}
          statementsRow={statementsRow}
          rowsCount={statementsRows.length}
          typeSetRowCount={typeSetRowCount}
        />
      ))}
    </div>
  )
}

export default ComputationsTable
