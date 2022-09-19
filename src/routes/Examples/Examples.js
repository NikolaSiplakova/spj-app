import React from "react"
import PropTypes from "prop-types"

import TopBar from "common/TopBar/TopBar"
import CardDeck from "./_components/CardDeck/CardDeck"

const Examples = (props) => {
  return (
    <div>
      <TopBar language={props.language} setLanguage={props.setLanguage} />
      <CardDeck />
    </div>
  )
}

export default Examples

Examples.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
}
