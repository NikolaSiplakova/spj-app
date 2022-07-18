import "./ComputationsTable.scss"
import ComputationRow from "./_components/ComputationRow/ComputationRow"

const ComputationsTable = ({ statementsRows }) => {
  return (
    <div className="computations">
      {statementsRows.map((statementsRow, index) => (
        <ComputationRow key={index} statementsRow={statementsRow} />
      ))}
    </div>
  )
}

export default ComputationsTable
