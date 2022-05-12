import "./ComputationsTable.scss"
import ComputationRow from "./_components/ComputationRow/ComputationRow"

const ComputationsTable = (props) => {
  const { statements } = props

  return (
    <div className="computations">
      {statements.map((statement, index) => (
        <ComputationRow key={index} statement={statement} />
      ))}
    </div>
  )
}

export default ComputationsTable
