import PropTypes from "prop-types"
import { MathJaxContext, MathJax } from "better-react-mathjax"

import classes from "./ResultsRow.module.scss"

const ResultsRow = ({ state, variables }) => {
  const getVariableNotation = () =>
    variables.map((variable, index) => {
      if (index === variables.length - 1) {
        return `${variable.varName} \\mapsto ${variable.value}`
      }

      return `${variable.varName} \\mapsto ${variable.value}, \\hspace{.5cm}\\`
    })

  console.log(getVariableNotation())

  const result = `$s\_${state} = \\Big[ \\ ${getVariableNotation()} \\ \\Big]$`

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
    <div className={classes["result"]}>
      <MathJaxContext
        version={2}
        config={config}
        onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
      >
        <MathJax inline dynamic hideUntilTypeset={"first"}>
          {result}
        </MathJax>
      </MathJaxContext>
    </div>
  )
}

export default ResultsRow

ResultsRow.propTypes = {
  state: PropTypes.number.isRequired,
  variables: PropTypes.array.isRequired,
}
