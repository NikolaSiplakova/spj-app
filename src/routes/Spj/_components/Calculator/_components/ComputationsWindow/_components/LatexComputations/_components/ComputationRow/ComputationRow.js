import PropTypes from "prop-types"

import StatementsRow from "./_components/StatementsRow/StatementsRow"
import classes from "./ComputationRow.module.scss"

const ComputationRow = ({ index, statementsRow }) => {
  return (
    <div className={classes["row"]}>
      <div className={classes["row__index"]}>{index + 1}</div>
      <StatementsRow statementsRow={statementsRow} />
    </div>
  )
}

ComputationRow.propTypes = {
  index: PropTypes.number.isRequired,
  statementsRow: PropTypes.object.isRequired,
}

export default ComputationRow
