import PropTypes from "prop-types"
import { MathJaxContext, MathJax } from "better-react-mathjax"

import classes from "./ResultsRow.module.scss"

const ResultsRow = ({ state, variables }) => {
  // const result = `s\_${state ?? ""}`

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
    <div>
      <MathJaxContext
        version={2}
        config={config}
        onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
      >
        <MathJax inline dynamic hideUntilTypeset={"first"}>
          {state}
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
