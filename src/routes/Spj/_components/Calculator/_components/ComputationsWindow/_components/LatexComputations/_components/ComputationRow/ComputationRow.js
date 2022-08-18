import PropTypes from "prop-types"
import { MathJaxContext, MathJax } from "better-react-mathjax"

import { MATHJAX_CONFIG } from "constants/mathJaxConfig"

import StatementsRow from "./_components/StatementsRow/StatementsRow"
import classes from "./ComputationRow.module.scss"

const ComputationRow = ({ index, statementsRow }) => {
  const stateChange = `s\_${statementsRow.state + 1} = s\_${
    statementsRow.state
  } \\Big[ ${statementsRow.changedVariable} \\Big]`

  const renderState = () => {
    if (statementsRow.changedVariable !== null) {
      return <div>{`$${stateChange}$`}</div>
    }

    return <div></div>
  }

  return (
    <div className={classes["row"]}>
      <div className={classes["row__index"]}>{index + 1}</div>
      <MathJaxContext
        version={2}
        config={MATHJAX_CONFIG}
        onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
      >
        <MathJax inline dynamic hideUntilTypeset={"first"}>
          <div className={classes["statements-row"]}>
            <StatementsRow statementsRow={statementsRow} />
            {renderState()}
          </div>
        </MathJax>
      </MathJaxContext>
    </div>
  )
}

ComputationRow.propTypes = {
  index: PropTypes.number.isRequired,
  statementsRow: PropTypes.object.isRequired,
}

export default ComputationRow
